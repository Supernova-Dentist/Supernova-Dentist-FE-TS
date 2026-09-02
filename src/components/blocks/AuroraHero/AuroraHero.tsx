import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import { DentallyPortal } from '@/lib/constants';
import AuroraStars from './AuroraStars';
import styles from './AuroraHero.module.css';

function AuroraHorizon() {
  return (
    <div className={styles.horizonScene} aria-hidden='true'>
      <div className={styles.horizonFrame}>
        <div className={styles.horizon}>
          <svg focusable='false' preserveAspectRatio='none' viewBox='0 0 1200 220'>
            <defs>
              <linearGradient id='aurora-horizon-line' x1='0' x2='1'>
                <stop offset='0' stopColor='#c6a15b' stopOpacity='0' />
                <stop offset='.17' stopColor='#b98d4d' stopOpacity='.14' />
                <stop offset='.38' stopColor='#d5b977' stopOpacity='.46' />
                <stop offset='.475' stopColor='#f4dca5' stopOpacity='.88' />
                <stop offset='.5' stopColor='#fff7e7' stopOpacity='1' />
                <stop offset='.525' stopColor='#f4dca5' stopOpacity='.88' />
                <stop offset='.62' stopColor='#d5b977' stopOpacity='.46' />
                <stop offset='.83' stopColor='#b98d4d' stopOpacity='.14' />
                <stop offset='1' stopColor='#c6a15b' stopOpacity='0' />
              </linearGradient>
              <linearGradient id='aurora-horizon-core-line' x1='0' x2='1'>
                <stop offset='.3' stopColor='#d5b977' stopOpacity='0' />
                <stop offset='.43' stopColor='#f4dca5' stopOpacity='.48' />
                <stop offset='.485' stopColor='#fff7e7' stopOpacity='.96' />
                <stop offset='.5' stopColor='#fffdf7' stopOpacity='1' />
                <stop offset='.515' stopColor='#fff7e7' stopOpacity='.96' />
                <stop offset='.57' stopColor='#f4dca5' stopOpacity='.48' />
                <stop offset='.7' stopColor='#d5b977' stopOpacity='0' />
              </linearGradient>
              <radialGradient id='aurora-horizon-bloom'>
                <stop offset='0' stopColor='#fff7e7' stopOpacity='1' />
                <stop offset='.12' stopColor='#f8dfa6' stopOpacity='.86' />
                <stop offset='.38' stopColor='#d39b52' stopOpacity='.34' />
                <stop offset='.7' stopColor='#9d6534' stopOpacity='.08' />
                <stop offset='1' stopColor='#c6a15b' stopOpacity='0' />
              </radialGradient>
              <radialGradient id='aurora-horizon-reflection' cx='.5' cy='.12' r='.82'>
                <stop offset='0' stopColor='#f4dca5' stopOpacity='.22' />
                <stop offset='.38' stopColor='#c38a48' stopOpacity='.07' />
                <stop offset='1' stopColor='#c38a48' stopOpacity='0' />
              </radialGradient>
              <linearGradient id='aurora-horizon-rays' x1='.5' x2='.5' y1='1' y2='0'>
                <stop offset='0' stopColor='#fff7e7' stopOpacity='.34' />
                <stop offset='.18' stopColor='#f4dca5' stopOpacity='.22' />
                <stop offset='.58' stopColor='#d5b977' stopOpacity='.07' />
                <stop offset='1' stopColor='#c6a15b' stopOpacity='0' />
              </linearGradient>
              <filter id='aurora-horizon-glow' x='-20%' y='-120%' width='140%' height='340%'>
                <feGaussianBlur stdDeviation='5.5' />
              </filter>
              <filter id='aurora-horizon-bloom-blur' x='-40%' y='-120%' width='180%' height='340%'>
                <feGaussianBlur stdDeviation='15' />
              </filter>
              <filter id='aurora-horizon-rays-blur' x='-30%' y='-20%' width='160%' height='150%'>
                <feGaussianBlur stdDeviation='14' />
              </filter>
            </defs>

            <path
              d='M 600 126 L 350 -18 L 850 -18 Z'
              fill='url(#aurora-horizon-rays)'
              filter='url(#aurora-horizon-rays-blur)'
              opacity='.24'
            />
            <path
              d='M 600 126 L 515 -18 L 685 -18 Z'
              fill='url(#aurora-horizon-rays)'
              filter='url(#aurora-horizon-rays-blur)'
              opacity='.58'
            />
            <ellipse
              cx='600'
              cy='126'
              fill='url(#aurora-horizon-bloom)'
              filter='url(#aurora-horizon-bloom-blur)'
              opacity='1'
              rx='270'
              ry='55'
            />
            <ellipse
              cx='600'
              cy='144'
              fill='url(#aurora-horizon-reflection)'
              filter='url(#aurora-horizon-glow)'
              opacity='.72'
              rx='235'
              ry='43'
            />
            <path
              d='M -80 214 Q 600 38 1280 214'
              fill='none'
              filter='url(#aurora-horizon-glow)'
              opacity='.62'
              stroke='url(#aurora-horizon-line)'
              strokeWidth='8'
            />
            <path
              d='M -80 214 Q 600 38 1280 214'
              fill='none'
              stroke='url(#aurora-horizon-line)'
              strokeWidth='1.25'
            />
            <path
              d='M -80 214 Q 600 38 1280 214'
              fill='none'
              stroke='url(#aurora-horizon-core-line)'
              strokeWidth='2.4'
            />
            <circle cx='600' cy='126' fill='#f4dca5' filter='url(#aurora-horizon-glow)' opacity='.7' r='10' />
            <circle cx='600' cy='126' fill='#fffdf7' opacity='1' r='2.25' />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function AuroraHero() {
  return (
    <section aria-labelledby='home-hero-title' className={styles.hero}>
      <div className={styles.backdrop} aria-hidden='true' />
      <div className={styles.noise} aria-hidden='true' />
      <div className={styles.stars} aria-hidden='true'>
        <AuroraStars />
      </div>

      <div className={styles.inner}>
        <div className={styles.introduction}>
          <p className={styles.eyebrow}>
            <span>Supernova Dental</span>
            <span>Bridgwater</span>
          </p>

          <h1 id='home-hero-title' className={styles.title}>
            <span className={styles.titleLine}>
              Modern <span className={styles.mobileBreak}>dentistry,</span>
            </span>
            <span className={styles.titleLine}>
              <span className={styles.goldWord}>thoughtfully</span>{' '}
              <span className={`${styles.mobileBreak} ${styles.ivoryWord}`}>delivered.</span>
            </span>
          </h1>

          <p className={styles.summary}>
            Personal general, cosmetic and implant dentistry from a welcoming team, in a calm modern practice designed
            around you.
          </p>
        </div>

        <AuroraHorizon />

        <div className={styles.actionArea}>
          <Link
            href={DentallyPortal}
            target='_blank'
            rel='noopener noreferrer'
            className={styles.primaryAction}
          >
            <span>Book an appointment</span>
            <FiArrowRight aria-hidden='true' />
          </Link>

          <Link href='/enquiry' className={styles.secondaryAction}>
            Make an enquiry
          </Link>
        </div>
      </div>
    </section>
  );
}
