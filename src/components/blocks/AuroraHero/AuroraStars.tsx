import styles from './AuroraHero.module.css';

function createSeededRandom(seed: number) {
  let state = seed >>> 0;

  return () => {
    state = (Math.imul(state, 1664525) + 1013904223) >>> 0;
    return state / 4294967296;
  };
}

const starRandom = createSeededRandom(0x51a7f00d);
const stars = Array.from({ length: 396 }, () => {
  const x = starRandom() * 1440;
  const y = starRandom() * 1080;
  const size = starRandom();
  const textSafeOpacity = x < 880 && y > 90 && y < 760 ? 0.45 : 1;

  return {
    x,
    y,
    radius:
      size > 0.994
        ? 1.35 + starRandom() * 0.45
        : size > 0.91
          ? 0.62 + starRandom() * 0.4
          : 0.25 + starRandom() * 0.36,
    opacity: (0.15 + starRandom() * 0.38) * textSafeOpacity,
  };
});

const dustRandom = createSeededRandom(0xc6a15b);
const goldDust = Array.from({ length: 138 }, () => {
  const progress = dustRandom();
  const horizontalScatter = dustRandom() + dustRandom() + dustRandom() - 1.5;
  const verticalScatter = dustRandom() + dustRandom() - 1;
  const plumeWidth = 58 + Math.sin(progress * Math.PI) * 76;

  return {
    x: 1134 - progress * 172 + Math.sin(progress * Math.PI * 2.35) * 42 + horizontalScatter * plumeWidth,
    y: 270 + progress * 690 + verticalScatter * 76,
    radius: 0.24 + dustRandom() * 0.7,
    opacity: 0.12 + dustRandom() * 0.3,
  };
});

const horizonDustRandom = createSeededRandom(0xd5b977);
const horizonDust = Array.from({ length: 78 }, () => ({
  x: 390 + horizonDustRandom() * 700,
  y: 790 + horizonDustRandom() * 270,
  radius: 0.24 + horizonDustRandom() * 0.58,
  opacity: 0.11 + horizonDustRandom() * 0.24,
}));

const brightStars = [
  { x: 1248, y: 188, size: 7, opacity: 0.72 },
  { x: 1168, y: 612, size: 4.5, opacity: 0.48 },
];

export default function AuroraStars() {
  return (
    <svg
      aria-hidden='true'
      className='h-full w-full'
      focusable='false'
      preserveAspectRatio='xMidYMid slice'
      viewBox='0 0 1440 1080'
    >
      <defs>
        <linearGradient id='aurora-shooting-star' x1='0' x2='1' y1='1' y2='0'>
          <stop offset='0' stopColor='#f7f2e9' stopOpacity='0' />
          <stop offset='.72' stopColor='#c6a15b' stopOpacity='.38' />
          <stop offset='.94' stopColor='#d5b977' stopOpacity='.74' />
          <stop offset='1' stopColor='#fff7e7' stopOpacity='.92' />
        </linearGradient>
        <radialGradient id='aurora-star-haze-gold'>
          <stop offset='0' stopColor='#e0b96d' stopOpacity='.2' />
          <stop offset='.32' stopColor='#c28a48' stopOpacity='.075' />
          <stop offset='1' stopColor='#c6a15b' stopOpacity='0' />
        </radialGradient>
        <radialGradient id='aurora-star-haze-blue'>
          <stop offset='0' stopColor='#233d49' stopOpacity='.14' />
          <stop offset='.46' stopColor='#142a34' stopOpacity='.065' />
          <stop offset='1' stopColor='#111b24' stopOpacity='0' />
        </radialGradient>
        <filter id='aurora-nebula-blur' x='-55%' y='-40%' width='210%' height='180%'>
          <feGaussianBlur stdDeviation='38' />
        </filter>
        <filter id='aurora-glint-blur' x='-80%' y='-80%' width='260%' height='260%'>
          <feGaussianBlur stdDeviation='5' />
        </filter>
      </defs>

      <g className={styles.nebula}>
        <ellipse cx='1135' cy='602' rx='218' ry='348' fill='url(#aurora-star-haze-gold)' />
        <ellipse cx='998' cy='808' rx='430' ry='286' fill='url(#aurora-star-haze-blue)' />
        <path
          d='M 1308 220 C 1168 350 1254 500 1096 668 C 1002 768 1054 900 950 1052'
          fill='none'
          filter='url(#aurora-nebula-blur)'
          opacity='.17'
          stroke='#d0a25b'
          strokeWidth='52'
        />
        <path
          d='M 1380 438 C 1198 525 1272 682 1062 848'
          fill='none'
          filter='url(#aurora-nebula-blur)'
          opacity='.13'
          stroke='#b77d3f'
          strokeWidth='34'
        />
        <path
          d='M 1262 308 C 1178 425 1234 548 1110 675 C 1041 746 1065 842 984 932'
          fill='none'
          filter='url(#aurora-nebula-blur)'
          opacity='.11'
          stroke='#e1b36a'
          strokeWidth='18'
        />
      </g>

      <g className={styles.starField} fill='#f7f2e9'>
        {stars.map((star, index) => (
          <circle
            key={index}
            cx={star.x}
            cy={star.y}
            opacity={star.opacity}
            r={star.radius}
          />
        ))}
      </g>
      <g className={styles.goldDust} fill='#d5b977'>
        {goldDust.map((star, index) => (
          <circle
            key={index}
            cx={star.x}
            cy={star.y}
            opacity={star.opacity}
            r={star.radius}
          />
        ))}
      </g>
      <g className={styles.horizonDust} fill='#c6a15b'>
        {horizonDust.map((star, index) => (
          <circle
            key={index}
            cx={star.x}
            cy={star.y}
            opacity={star.opacity}
            r={star.radius}
          />
        ))}
      </g>

      <g className={styles.brightStars}>
        {brightStars.map((star, index) => (
          <g key={index} opacity={star.opacity} transform={`translate(${star.x} ${star.y})`}>
            <circle fill='#fffaf0' filter='url(#aurora-glint-blur)' opacity='.32' r={star.size * 0.9} />
            <path
              d={`M ${-star.size} 0 H ${star.size} M 0 ${-star.size} V ${star.size}`}
              fill='none'
              stroke='#fff7e7'
              strokeLinecap='round'
              strokeWidth='.65'
            />
            <circle fill='#fffdf7' r='.9' />
          </g>
        ))}
      </g>

      <g className={styles.shootingStar}>
        <path
          d='M 962 390 L 1082 266'
          fill='none'
          filter='url(#aurora-glint-blur)'
          opacity='.18'
          stroke='#d5b977'
          strokeLinecap='round'
          strokeWidth='3.5'
        />
        <path
          d='M 962 390 L 1082 266'
          fill='none'
          opacity='.74'
          stroke='url(#aurora-shooting-star)'
          strokeLinecap='round'
          strokeWidth='1'
        />
        <circle cx='1082' cy='266' fill='#fff7e7' opacity='.9' r='1.55' />
        <circle cx='1082' cy='266' fill='#d5b977' filter='url(#aurora-glint-blur)' opacity='.18' r='6' />
      </g>
    </svg>
  );
}
