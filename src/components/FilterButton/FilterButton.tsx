import { cn } from '@/lib/utils';
import Button from '../Button/Button';

type FilterButtonProps = {
  text: string;
  id: number;
  activeFilter: number;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function FilterButton({ text, id, activeFilter, handleClick }: FilterButtonProps) {
  return (
    <Button
      text={text}
      id={id}
      className={cn(
        `bg-gray-200 rounded hover:bg-gray-100 border border-transparent hover:border-gray-300 ${
          activeFilter === id ? 'bg-gold text-offWhite hover:bg-bold hover:border-transparent' : null
        }`
      )}
      onClick={handleClick}
    />
  );
}
