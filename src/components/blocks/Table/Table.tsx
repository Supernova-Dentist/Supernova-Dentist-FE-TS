type TableProps = {
  children: React.ReactNode;
};

export default function Table({ children }: TableProps) {
  return <table className='max-w-[80%] mx-auto divide-y divide-gray-200'>{children}</table>;
}
