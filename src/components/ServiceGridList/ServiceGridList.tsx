import ServiceGridListItem from '../ServiceGridListItem/ServiceGridListItem';

export default function ServiceGridList({ listItems, textColors }: ServiceGridListProps) {
  return (
    <ul className='mt-6 grid gap-4 md:grid-cols-2'>
      {listItems.map(({ heading, text, id }) => (
        <ServiceGridListItem key={id} heading={heading} text={text} textColors={textColors} />
      ))}
    </ul>
  );
}
