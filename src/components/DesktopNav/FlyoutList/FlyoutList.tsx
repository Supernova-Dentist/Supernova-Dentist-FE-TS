import Link from 'next/link';

export default function FlyoutList({ flyoutItems }: FlyoutList) {
  return (
    <ul className='flex flex-col gap-4 '>
      {flyoutItems.map(({ name, link }) => (
        <li key={name}>
          <Link
            href={link}
            className='block min-h-11 rounded-sm text-base font-semibold text-gold-text-light transition-colors hover:text-obsidian focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-light'
          >
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
