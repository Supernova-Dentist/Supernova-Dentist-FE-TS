import Link from 'next/link';

export default function FlyoutList({ flyoutItems }: FlyoutList) {
  return (
    <ul className='flex flex-col gap-4 '>
      {flyoutItems.map(({ name, link }) => (
        <li key={name}>
          <Link
            href={link}
            className='block text-md text-gold transition-all duration-300 ease-out hover:text-lightGold hover:translate-x-1'
          >
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
