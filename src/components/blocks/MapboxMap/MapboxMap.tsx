'use client';

import along from '@turf/along';
import distance from '@turf/distance';
import { lineString, point } from '@turf/helpers';
import { practiceCoordinates, practiceLocation, type MapCoordinate } from '@/lib/practiceLocation';
import type { Map as MapboxMapInstance, Marker, Popup } from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import MapFallbackCard from './MapFallbackCard';
import { hasUsableMapboxToken } from './mapboxAvailability';

type MapState = 'loading' | 'ready' | 'fallback';
type WalkthroughState = 'idle' | 'playing' | 'paused' | 'complete';

const PRACTICE_SOURCE_ID = 'supernova-practice';
const LANDMARK_SOURCE_ID = 'supernova-landmarks';
const ROUTE_SOURCE_ID = 'supernova-junction-route';
const ROUTE_BASE_LAYER_ID = 'supernova-junction-route-base';
const ROUTE_PROGRESS_LAYER_ID = 'supernova-junction-route-progress';
const WALKTHROUGH_DURATION = 15000;
const APPROACH_PHASE = 0.08;

const routeLine = lineString(
  practiceLocation.map.junction24Route.coordinates.map(([longitude, latitude]) => [longitude, latitude])
);

const routeDistance = practiceLocation.map.junction24Route.coordinates.reduce((total, coordinate, index, coordinates) => {
  if (index === 0) return total;

  return total + distance(point([...coordinates[index - 1]]), point([...coordinate]));
}, 0);

function toLngLat([longitude, latitude]: MapCoordinate): [number, number] {
  return [longitude, latitude];
}

function lerp(start: number, end: number, amount: number) {
  return start + (end - start) * amount;
}

function easeInOutCubic(value: number) {
  return value < 0.5 ? 4 * value * value * value : 1 - Math.pow(-2 * value + 2, 3) / 2;
}

function createPopupContent() {
  const wrapper = document.createElement('div');
  wrapper.className = 'supernova-map-popup-body';

  const title = document.createElement('strong');
  title.className = 'supernova-map-popup-title';
  title.textContent = practiceLocation.name;

  const address = document.createElement('address');
  address.textContent = practiceLocation.address;

  const locationNote = document.createElement('p');
  locationNote.textContent = 'Just off Junction 24 of the M5';

  const parkingNote = document.createElement('p');
  parkingNote.textContent = 'Patient parking available directly opposite the building';

  const actions = document.createElement('div');
  actions.className = 'supernova-map-popup-actions';

  const links = [
    { href: practiceLocation.directionsUrl, label: 'Get directions', external: true },
    { href: practiceLocation.phoneHref, label: `Call ${practiceLocation.phone}`, external: false },
    { href: practiceLocation.whatsappHref, label: `WhatsApp ${practiceLocation.whatsapp}`, external: true },
  ];

  links.forEach(({ href, label, external }) => {
    const link = document.createElement('a');
    link.href = href;
    link.textContent = label;

    if (external) {
      link.target = '_blank';
      link.rel = 'noreferrer';
    }

    actions.append(link);
  });

  wrapper.append(title, address, locationNote, parkingNote, actions);

  return wrapper;
}

function getInitialZoom() {
  return window.innerWidth < 640
    ? practiceLocation.map.initialView.mobileZoom
    : practiceLocation.map.initialView.desktopZoom;
}

export default function MapboxMap() {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<MapboxMapInstance | null>(null);
  const markerRef = useRef<Marker | null>(null);
  const popupRef = useRef<Popup | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const animationStartRef = useRef(0);
  const elapsedRef = useRef(0);
  const smoothedCenterRef = useRef<MapCoordinate | null>(null);
  const walkthroughStateRef = useRef<WalkthroughState>('idle');
  const reducedMotionRef = useRef(false);

  const [mapState, setMapState] = useState<MapState>(() =>
    hasUsableMapboxToken(process.env.NEXT_PUBLIC_MAPBOX_TOKEN) ? 'loading' : 'fallback'
  );
  const [walkthroughState, setWalkthroughState] = useState<WalkthroughState>('idle');
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const updateWalkthroughState = useCallback((nextState: WalkthroughState) => {
    walkthroughStateRef.current = nextState;
    setWalkthroughState(nextState);
  }, []);

  const cancelAnimation = useCallback(() => {
    if (animationFrameRef.current !== null) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
  }, []);

  const updateRouteProgress = useCallback((progress: number) => {
    const map = mapRef.current;

    if (map === null) return;
    if (map.getLayer(ROUTE_PROGRESS_LAYER_ID) === undefined) return;

    map.setPaintProperty(ROUTE_PROGRESS_LAYER_ID, 'line-gradient', [
      'step',
      ['line-progress'],
      '#c6a15b',
      Math.max(0, Math.min(progress, 1)),
      'rgba(198, 161, 91, 0)',
    ]);
  }, []);

  const showFinalMapState = useCallback(() => {
    cancelAnimation();
    elapsedRef.current = WALKTHROUGH_DURATION;
    updateRouteProgress(1);
    mapRef.current?.jumpTo({
      center: toLngLat(practiceLocation.map.closeView.center),
      zoom: practiceLocation.map.closeView.zoom,
      pitch: practiceLocation.map.closeView.pitch,
      bearing: 0,
    });
    updateWalkthroughState('complete');
  }, [cancelAnimation, updateRouteProgress, updateWalkthroughState]);

  const animateWalkthrough = useCallback(
    (timestamp: number) => {
      const map = mapRef.current;

      if (map === null || walkthroughStateRef.current !== 'playing') return;

      if (animationStartRef.current === 0) {
        animationStartRef.current = timestamp - elapsedRef.current;
      }

      const elapsed = timestamp - animationStartRef.current;
      const timelineProgress = Math.min(elapsed / WALKTHROUGH_DURATION, 1);
      elapsedRef.current = elapsed;

      if (timelineProgress < APPROACH_PHASE) {
        const approachProgress = easeInOutCubic(timelineProgress / APPROACH_PHASE);
        const [wideLongitude, wideLatitude] = practiceLocation.map.wideView.center;
        const [startLongitude, startLatitude] = practiceLocation.map.junction24Route.start;

        map.jumpTo({
          center: [
            lerp(wideLongitude, startLongitude, approachProgress),
            lerp(wideLatitude, startLatitude, approachProgress),
          ],
          zoom: lerp(practiceLocation.map.wideView.zoom, 14.65, approachProgress),
          pitch: lerp(practiceLocation.map.wideView.pitch, 22, approachProgress),
          bearing: 0,
        });
      } else {
        const routeProgress = Math.min((timelineProgress - APPROACH_PHASE) / (1 - APPROACH_PHASE), 1);
        const [targetLongitude, targetLatitude] = along(routeLine, routeDistance * routeProgress).geometry.coordinates;
        const previousCenter = smoothedCenterRef.current ?? ([targetLongitude, targetLatitude] as MapCoordinate);
        const nextCenter: MapCoordinate = [
          lerp(previousCenter[0], targetLongitude, 0.16),
          lerp(previousCenter[1], targetLatitude, 0.16),
        ];

        smoothedCenterRef.current = nextCenter;
        updateRouteProgress(routeProgress);
        map.jumpTo({
          center: toLngLat(nextCenter),
          zoom: lerp(14.65, practiceLocation.map.closeView.zoom, routeProgress),
          pitch: lerp(22, practiceLocation.map.closeView.pitch, routeProgress),
          bearing: 0,
        });
      }

      if (timelineProgress >= 1) {
        showFinalMapState();
        return;
      }

      animationFrameRef.current = requestAnimationFrame(animateWalkthrough);
    },
    [showFinalMapState, updateRouteProgress]
  );

  const startWalkthrough = useCallback(
    (restart = false) => {
      if (mapState !== 'ready') return;

      if (reducedMotionRef.current) {
        showFinalMapState();
        return;
      }

      cancelAnimation();

      if (restart || walkthroughStateRef.current === 'idle' || walkthroughStateRef.current === 'complete') {
        elapsedRef.current = 0;
        smoothedCenterRef.current = null;
        updateRouteProgress(0);
        mapRef.current?.jumpTo({
          center: toLngLat(practiceLocation.map.wideView.center),
          zoom: practiceLocation.map.wideView.zoom,
          pitch: practiceLocation.map.wideView.pitch,
          bearing: 0,
        });
      }

      animationStartRef.current = 0;
      updateWalkthroughState('playing');
      animationFrameRef.current = requestAnimationFrame(animateWalkthrough);
    },
    [animateWalkthrough, cancelAnimation, mapState, showFinalMapState, updateRouteProgress, updateWalkthroughState]
  );

  const pauseWalkthrough = useCallback(() => {
    if (walkthroughStateRef.current !== 'playing') return;

    cancelAnimation();
    updateWalkthroughState('paused');
  }, [cancelAnimation, updateWalkthroughState]);

  const resetMap = useCallback(() => {
    cancelAnimation();
    elapsedRef.current = 0;
    animationStartRef.current = 0;
    smoothedCenterRef.current = null;
    updateRouteProgress(0);
    popupRef.current?.remove();
    mapRef.current?.easeTo({
      center: toLngLat(practiceLocation.map.initialView.center),
      zoom: getInitialZoom(),
      pitch: practiceLocation.map.initialView.pitch,
      bearing: 0,
      duration: reducedMotionRef.current ? 0 : 700,
    });
    updateWalkthroughState('idle');
  }, [cancelAnimation, updateRouteProgress, updateWalkthroughState]);

  const recenterPractice = useCallback(() => {
    pauseWalkthrough();
    mapRef.current?.easeTo({
      center: toLngLat(practiceCoordinates),
      zoom: practiceLocation.map.closeView.zoom,
      pitch: practiceLocation.map.closeView.pitch,
      bearing: 0,
      duration: reducedMotionRef.current ? 0 : 700,
    });
  }, [pauseWalkthrough]);

  useEffect(() => {
    const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

    if (!hasUsableMapboxToken(token) || mapContainerRef.current === null) {
      setMapState('fallback');
      return;
    }

    let cancelled = false;
    let hasLoaded = false;
    let resizeObserver: ResizeObserver | null = null;
    let loadTimer: number | null = null;
    let markerElement: HTMLButtonElement | null = null;
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const applyMotionPreference = () => {
      reducedMotionRef.current = motionQuery.matches;
      setPrefersReducedMotion(motionQuery.matches);

      if (motionQuery.matches && walkthroughStateRef.current === 'playing') {
        if (animationFrameRef.current !== null) cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
        elapsedRef.current = WALKTHROUGH_DURATION;
        walkthroughStateRef.current = 'complete';
        setWalkthroughState('complete');
        updateRouteProgress(1);
        mapRef.current?.jumpTo({
          center: toLngLat(practiceLocation.map.closeView.center),
          zoom: practiceLocation.map.closeView.zoom,
          pitch: practiceLocation.map.closeView.pitch,
          bearing: 0,
        });
      }
    };

    applyMotionPreference();
    motionQuery.addEventListener('change', applyMotionPreference);

    const initialiseMap = async () => {
      try {
        const mapboxgl = (await import('mapbox-gl')).default;

        if (cancelled || mapContainerRef.current === null || !mapboxgl.supported()) {
          if (!cancelled) setMapState('fallback');
          return;
        }

        const container = mapContainerRef.current;
        const map = new mapboxgl.Map({
          accessToken: token,
          container,
          style: practiceLocation.map.style,
          center: toLngLat(practiceLocation.map.initialView.center),
          zoom: getInitialZoom(),
          pitch: practiceLocation.map.initialView.pitch,
          minZoom: 10.5,
          maxZoom: 19,
          cooperativeGestures: true,
          attributionControl: true,
        });

        mapRef.current = map;
        loadTimer = window.setTimeout(() => {
          if (!hasLoaded && !cancelled) setMapState('fallback');
        }, 15000);

        if ('ResizeObserver' in window) {
          resizeObserver = new ResizeObserver(() => {
            if (!cancelled) map.resize();
          });
          resizeObserver.observe(container);
        }

        map.addControl(new mapboxgl.NavigationControl({ showCompass: true, visualizePitch: true }), 'top-right');

        map.once('load', () => {
          if (cancelled) return;

          hasLoaded = true;
          if (loadTimer !== null) window.clearTimeout(loadTimer);

          const poiLabelFilter = map.getFilter('poi-label');

          if (poiLabelFilter !== undefined) {
            map.setFilter('poi-label', [
              'all',
              poiLabelFilter,
              ['!=', ['get', 'name'], 'Brainwave Centre SW'],
              ['!=', ['get', 'name_en'], 'Brainwave Centre SW'],
              ['!=', ['get', 'name'], 'Unique Health & Fitness'],
              ['!=', ['get', 'name_en'], 'Unique Health & Fitness'],
            ]);
          }

          map.addSource(ROUTE_SOURCE_ID, {
            type: 'geojson',
            lineMetrics: true,
            data: routeLine,
          });
          map.addLayer({
            id: ROUTE_BASE_LAYER_ID,
            type: 'line',
            source: ROUTE_SOURCE_ID,
            layout: { 'line-cap': 'round', 'line-join': 'round' },
            paint: { 'line-color': '#c6a15b', 'line-width': 5, 'line-opacity': 0.22 },
          });
          map.addLayer({
            id: ROUTE_PROGRESS_LAYER_ID,
            type: 'line',
            source: ROUTE_SOURCE_ID,
            layout: { 'line-cap': 'round', 'line-join': 'round' },
            paint: {
              'line-width': 6,
              'line-gradient': ['step', ['line-progress'], '#c6a15b', 0, 'rgba(198, 161, 91, 0)'],
            },
          });

          map.addSource(LANDMARK_SOURCE_ID, {
            type: 'geojson',
            data: {
              type: 'FeatureCollection',
              features: practiceLocation.map.landmarks.flatMap((landmark) =>
                'mapLabel' in landmark
                  ? [
                      {
                        type: 'Feature' as const,
                        properties: { id: landmark.id, label: landmark.mapLabel },
                        geometry: { type: 'Point' as const, coordinates: [...landmark.coordinates] },
                      },
                    ]
                  : []
              ),
            },
          });
          map.addLayer({
            id: 'supernova-landmark-points',
            type: 'circle',
            source: LANDMARK_SOURCE_ID,
            minzoom: 12,
            filter: ['!=', ['get', 'id'], 'brainwave-centre'],
            paint: {
              'circle-radius': ['match', ['get', 'id'], 'patient-parking', 5, 3.5],
              'circle-color': ['match', ['get', 'id'], 'patient-parking', '#c6a15b', '#f7f2e9'],
              'circle-stroke-color': '#0b1218',
              'circle-stroke-width': 2,
            },
          });
          map.addLayer({
            id: 'supernova-landmark-labels',
            type: 'symbol',
            source: LANDMARK_SOURCE_ID,
            minzoom: 12.4,
            layout: {
              'text-field': ['get', 'label'],
              'text-font': ['DIN Pro Medium', 'Arial Unicode MS Regular'],
              'text-size': 12,
              'text-anchor': 'top',
              'text-offset': [0, 0.9],
              'text-max-width': 12,
            },
            paint: {
              'text-color': '#f7f2e9',
              'text-halo-color': '#0b1218',
              'text-halo-width': 1.5,
            },
          });

          map.addSource(PRACTICE_SOURCE_ID, {
            type: 'geojson',
            data: {
              type: 'Feature',
              properties: { name: practiceLocation.name },
              geometry: { type: 'Point', coordinates: [...practiceCoordinates] },
            },
          });
          map.addLayer({
            id: 'supernova-practice-halo',
            type: 'circle',
            source: PRACTICE_SOURCE_ID,
            paint: {
              'circle-radius': ['interpolate', ['linear'], ['zoom'], 11, 8, 17, 16],
              'circle-color': 'rgba(198, 161, 91, 0.18)',
              'circle-stroke-color': '#c6a15b',
              'circle-stroke-width': 2,
            },
          });
          map.addLayer({
            id: 'supernova-practice-label',
            type: 'symbol',
            source: PRACTICE_SOURCE_ID,
            layout: {
              'text-field': 'Supernova Dental',
              'text-font': ['DIN Pro Bold', 'Arial Unicode MS Bold'],
              'text-size': ['interpolate', ['linear'], ['zoom'], 11, 13, 17, 17],
              'text-anchor': 'top',
              'text-offset': [0, 2.3],
              'text-allow-overlap': true,
              'text-ignore-placement': true,
            },
            paint: {
              'text-color': '#f7f2e9',
              'text-halo-color': '#0b1218',
              'text-halo-width': 2.5,
              'text-halo-blur': 0.4,
            },
          });

          markerElement = document.createElement('button');
          markerElement.type = 'button';
          markerElement.className = 'supernova-map-marker';
          markerElement.setAttribute('aria-label', 'Open Supernova Dental location details');
          const markerLogo = document.createElement('img');
          markerLogo.src = '/assets/images/ICON_SVG.svg';
          markerLogo.alt = '';
          markerLogo.setAttribute('aria-hidden', 'true');
          markerElement.append(markerLogo);

          let focusPopupOnOpen = false;
          markerElement.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') focusPopupOnOpen = true;
          });

          const popup = new mapboxgl.Popup({
            offset: 32,
            closeButton: true,
            closeOnClick: false,
            focusAfterOpen: false,
            className: 'supernova-map-popup',
            maxWidth: '320px',
          }).setDOMContent(createPopupContent());

          popup.on('open', () => {
            const popupElement = popup.getElement();

            if (popupElement === undefined) return;

            popupElement.setAttribute('role', 'dialog');
            popupElement.setAttribute('aria-label', 'Supernova Dental location and contact details');

            if (focusPopupOnOpen) {
              window.requestAnimationFrame(() => popupElement.querySelector<HTMLAnchorElement>('a')?.focus());
              focusPopupOnOpen = false;
            }
          });

          markerRef.current = new mapboxgl.Marker({ element: markerElement, anchor: 'bottom' })
            .setLngLat(toLngLat(practiceCoordinates))
            .setPopup(popup)
            .addTo(map);
          popupRef.current = popup;

          const pauseForUserInteraction = (event: unknown) => {
            const isUserEvent =
              typeof event === 'object' && event !== null && 'originalEvent' in event && event.originalEvent !== undefined;

            if (!isUserEvent || walkthroughStateRef.current !== 'playing') return;

            if (animationFrameRef.current !== null) cancelAnimationFrame(animationFrameRef.current);
            animationFrameRef.current = null;
            walkthroughStateRef.current = 'paused';
            setWalkthroughState('paused');
          };

          map.on('dragstart', pauseForUserInteraction);
          map.on('zoomstart', pauseForUserInteraction);
          map.resize();
          setMapState('ready');
        });

        map.on('error', () => {
          if (!hasLoaded && !cancelled) setMapState('fallback');
        });
      } catch {
        if (!cancelled) setMapState('fallback');
      }
    };

    void initialiseMap();

    return () => {
      cancelled = true;
      if (loadTimer !== null) window.clearTimeout(loadTimer);
      if (animationFrameRef.current !== null) cancelAnimationFrame(animationFrameRef.current);
      resizeObserver?.disconnect();
      motionQuery.removeEventListener('change', applyMotionPreference);
      markerRef.current?.remove();
      popupRef.current?.remove();
      mapRef.current?.remove();
      markerRef.current = null;
      popupRef.current = null;
      mapRef.current = null;
    };
  }, []);

  if (mapState === 'fallback') return <MapFallbackCard />;

  const playButtonLabel = walkthroughState === 'paused' ? 'Play' : walkthroughState === 'complete' ? 'Play again' : 'Play';

  return (
    <div className='bg-obsidian text-ivory'>
      <div
        className='relative isolate h-[390px] w-full overflow-hidden bg-deep-navy sm:h-[480px] lg:h-[610px]'
        aria-busy={mapState === 'loading'}
      >
        <div
          ref={mapContainerRef}
          className='absolute inset-0 z-[1] h-full w-full'
          role='region'
          aria-label='Interactive map showing Supernova Dental, Huntworth Gate and M5 Junction 24'
          aria-describedby='supernova-map-description'
        />
        <p id='supernova-map-description' className='sr-only'>
          Supernova Dental is at Supernova Building, Marsh Lane, Huntworth Gate, Bridgwater, Somerset TA6 6LQ. The map
          also identifies Junction 24, the practice access and reserved patient parking. A text location summary and
          directions link are available beside the map.
        </p>

        {mapState === 'loading' && (
          <div className='pointer-events-none absolute inset-0 z-[2] flex items-center justify-center bg-obsidian text-sm text-ivory/75'>
            Loading the location map…
          </div>
        )}

        {mapState === 'ready' && (
          <button
            type='button'
            onClick={recenterPractice}
            className='absolute left-3 top-3 z-[3] min-h-11 rounded-full border border-champagne/60 bg-obsidian/95 px-4 py-2 text-xs font-semibold text-ivory shadow-lg backdrop-blur-sm transition-colors hover:border-champagne hover:text-champagne focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne sm:left-4 sm:top-4 sm:text-sm'
            aria-label='Re-centre map on Supernova Dental'
          >
            Re-centre on Supernova Dental
          </button>
        )}

        {walkthroughState === 'complete' && (
          <div
            className='pointer-events-none absolute bottom-4 left-1/2 z-[3] w-[calc(100%-2rem)] max-w-sm -translate-x-1/2 rounded-2xl border border-champagne/40 bg-obsidian/95 px-5 py-4 text-center shadow-xl backdrop-blur-sm'
            role='status'
            aria-live='polite'
          >
            <p className='text-xs font-semibold uppercase tracking-[0.18em] text-champagne'>You&apos;ve arrived</p>
            <p className='mt-1 font-semibold text-ivory'>You&apos;ve arrived at Supernova Dental</p>
          </div>
        )}
      </div>

      <div className='border-t border-white/10 px-4 py-5 sm:px-6'>
        <div className='flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between'>
          <div className='max-w-xl'>
            <p className='text-sm font-semibold text-ivory'>Show the way from the M5 southbound via Junction 24</p>
            <p className='mt-1 text-xs leading-5 text-ivory/60'>{practiceLocation.map.junction24Route.notice}</p>
            {prefersReducedMotion && (
              <p className='mt-1 text-xs leading-5 text-champagne'>Reduced motion is enabled, so controls show the final map state.</p>
            )}
          </div>
          <div className='flex flex-wrap gap-2' aria-label='Map walkthrough controls'>
            {walkthroughState === 'playing' ? (
              <button type='button' className='supernova-map-control-button supernova-map-control-button-primary' onClick={pauseWalkthrough}>
                Pause
              </button>
            ) : (
              <button
                type='button'
                className='supernova-map-control-button supernova-map-control-button-primary'
                onClick={() => startWalkthrough(false)}
              >
                {playButtonLabel}
              </button>
            )}
            <button type='button' className='supernova-map-control-button' onClick={() => startWalkthrough(true)}>
              Replay
            </button>
            <button type='button' className='supernova-map-control-button' onClick={showFinalMapState}>
              Skip animation
            </button>
            <button type='button' className='supernova-map-control-button' onClick={resetMap}>
              Reset map
            </button>
            <Link
              href={practiceLocation.directionsUrl}
              target='_blank'
              rel='noreferrer'
              className='supernova-map-control-button'
            >
              Get directions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
