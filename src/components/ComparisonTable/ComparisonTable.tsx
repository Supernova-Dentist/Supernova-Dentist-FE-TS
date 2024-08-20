import Table from '../blocks/Table/Table';
import TableHead from '../blocks/Table/TableHead/TableHead';
import TableRow from '../blocks/Table/TableRow/TableRow';
import TableCell from '../blocks/Table/TableCell/TableCell';
import TableHeadCell from '../blocks/Table/TableHeadCell/TableHeadCell';
import TableBody from '../blocks/Table/TableBody/TableBody';
import { CheckIcon } from '@radix-ui/react-icons';
import { XIcon } from '@heroicons/react/outline';

export default function ComparisonTable({ data }: ComparisonTableProps) {
  const { tableHeadData, tableBodyData } = data;

  return (
    <Table>
      <TableHead>
        <TableRow>
          {tableHeadData.map((heading, index) => (
            <TableHeadCell key={index} className={`font-medium ${index === 0 ? 'text-left' : 'text-center'}`}>
              {heading}
            </TableHeadCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {tableBodyData.map((row, rowIndex) => (
          <TableRow key={rowIndex}>
            <TableCell className='font-medium text-gold'>{row.feature}</TableCell>
            {row.data.map((cell, cellIndex) => (
              <TableCell key={cellIndex} className='text-center'>
                {typeof cell === 'boolean' ? (
                  cell ? (
                    <CheckIcon className='h-6 w-6 text-gold inline-block align-middle' />
                  ) : (
                    <XIcon className='h-6 w-6 text-red-500 inline-block align-middle' />
                  )
                ) : (
                  cell
                )}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
