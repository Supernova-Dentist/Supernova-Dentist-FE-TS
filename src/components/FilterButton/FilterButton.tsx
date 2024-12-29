import { motion } from 'framer-motion';

type FilterButtonProps = {
  text: string;
  id: number;
  activeFilter: number;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function FilterButton({ text, id, activeFilter, handleClick }: FilterButtonProps) {
  return (
    <button
      key={id}
      id={id.toString()}
      onClick={handleClick}
      className={`${
        activeFilter === id ? 'text-white' : ' bg-cream hover:text-slate-200 hover:bg-lightGrey'
      } text-sm transition-colors px-4 py-2 rounded-md relative`}
    >
      <span className="relative z-10">{text}</span>
      {activeFilter === id && (
        <motion.span
          layoutId="pill-tab"
          transition={{ type: 'spring', duration: 0.5 }}
          className="absolute inset-0 z-0 bg-gold rounded-md"
        />
      )}
    </button>
  );
}
