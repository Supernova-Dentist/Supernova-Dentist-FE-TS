type TableProps = {
  children: React.ReactNode;
};

export default function Table({ children }: TableProps) {
  return <table className='min-w-full divide-y divide-gray-200'>{children}</table>;
}
