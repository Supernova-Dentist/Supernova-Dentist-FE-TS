type TableRowProps = {
  children: React.ReactNode;
};

export default function TableRow({ children }: TableRowProps) {
  return <tr>{children}</tr>;
}
