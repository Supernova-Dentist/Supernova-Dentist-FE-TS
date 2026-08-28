import { cleanup, render } from '@testing-library/react';
import React from 'react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import MapFallbackCard from './MapFallbackCard';
import MapboxMap from './MapboxMap';
import { hasUsableMapboxToken } from './mapboxAvailability';
import { practiceCoordinates, practiceLocation } from '@/lib/practiceLocation';

afterEach(() => {
  cleanup();
  vi.unstubAllEnvs();
});

describe('Mapbox availability', () => {
  it('rejects missing, blank and placeholder token values', () => {
    expect(hasUsableMapboxToken(undefined)).toBe(false);
    expect(hasUsableMapboxToken('')).toBe(false);
    expect(hasUsableMapboxToken('pk.example')).toBe(false);
  });

  it('accepts a non-empty public Mapbox token shape', () => {
    expect(hasUsableMapboxToken('pk.public-token-for-test')).toBe(true);
  });
});

describe('Practice map data', () => {
  it('pins the Supernova building and routes there from the southbound M5', () => {
    expect(practiceCoordinates).toEqual([-2.99336, 51.10969]);
    expect(practiceLocation.map.junction24Route.start).toEqual([-2.979284, 51.114993]);
    expect(practiceLocation.map.junction24Route.coordinates.length).toBeGreaterThan(80);
    expect(practiceLocation.map.junction24Route.coordinates.at(-1)).toEqual(practiceCoordinates);
    expect(practiceLocation.directionsUrl).toContain('51.10969%2C-2.99336');
  });

  it('places patient parking opposite the practice and keeps Brainwave north of it', () => {
    const parking = practiceLocation.map.landmarks.find(({ id }) => id === 'patient-parking');
    const brainwave = practiceLocation.map.landmarks.find(({ id }) => id === 'brainwave-centre');

    expect(parking?.coordinates).toEqual([-2.99304, 51.10988]);
    expect(brainwave?.coordinates[1]).toBeGreaterThan(practiceCoordinates[1]);
  });
});

describe('Map fallback', () => {
  it('keeps the address, contact actions and directions available', () => {
    const { getByRole, getByText } = render(<MapFallbackCard />);

    expect(getByRole('region', { name: 'Supernova Dental location details' })).toBeInTheDocument();
    expect(getByText(/Supernova Building, Marsh Lane/)).toBeInTheDocument();
    expect(getByRole('link', { name: 'Call 01278 228665' })).toHaveAttribute('href', 'tel:+441278228665');
    expect(getByRole('link', { name: 'Get directions' })).toHaveAttribute('href');
  });

  it('renders the same useful fallback when the public token is missing', () => {
    vi.stubEnv('NEXT_PUBLIC_MAPBOX_TOKEN', '');
    const { getByRole, queryByLabelText } = render(<MapboxMap />);

    expect(getByRole('region', { name: 'Supernova Dental location details' })).toBeInTheDocument();
    expect(queryByLabelText(/Interactive map showing/)).not.toBeInTheDocument();
  });
});
