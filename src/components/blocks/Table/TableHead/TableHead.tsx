type TableHeadProps = {
  children: React.ReactNode;
};

export default function TableHead({ children }: TableHeadProps) {
  return <thead className='bg-grey text-gold rounded-t-lg'>{children}</thead>;
}
