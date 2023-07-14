import {
  Table,
  TableBody,
  TableHead,
  TableHeaderCell,
  TableRow,
} from '@tremor/react';
import { useExpenses } from './useExpenses';
import Lottie from 'lottie-react';
import animationData from '../../assets/lottie/searchingDocs.json';
import Pagination from '../../ui/Pagination';
import ExpenseRow from './ExpenseRow';
import NoRecords from '../../ui/NoRecords';

function ExpensesTable() {
  const { data, isLoading } = useExpenses();

  if (isLoading)
    return <Lottie animationData={animationData} className="m-6" />;

  if (data?.data.length === 0) return <NoRecords resource="expenses" />;

  return (
    <>
      <Table className="mt-3">
        <TableHead>
          <TableRow>
            <TableHeaderCell></TableHeaderCell>
            <TableHeaderCell>Title</TableHeaderCell>
            <TableHeaderCell className="hidden md:block">Date</TableHeaderCell>
            <TableHeaderCell>Amount</TableHeaderCell>
            <TableHeaderCell>Actions</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.data?.map(item => (
            <ExpenseRow key={item.title} item={item} />
          ))}
        </TableBody>
      </Table>
      <Pagination count={data?.count as number} />
    </>
  );
}

export default ExpensesTable;
