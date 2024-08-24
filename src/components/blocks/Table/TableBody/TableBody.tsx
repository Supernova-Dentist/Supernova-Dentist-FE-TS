type TableBodyProps = {
  children: React.ReactNode;
};

export default function TableBody({ children }: TableBodyProps) {
  return <tbody className='bg-white divide-y divide-gray-200'>{children}</tbody>;
}
