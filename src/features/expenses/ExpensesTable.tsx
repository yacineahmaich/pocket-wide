import {
  Table,
  TableBody,
  TableHead,
  TableHeaderCell,
  TableRow,
} from '@tremor/react';
import { useExpenses } from './useExpenses';
import Pagination from '../../ui/Pagination';
import ExpenseRow from './ExpenseRow';
import NoRecords from '../../ui/NoRecords';
import LoadingAnimation from '../../ui/LoadingAnimation';
import ErrorMessage from '../../ui/ErrorMessage';

function ExpensesTable() {
  const { data, isLoading, isError, error, refetch } = useExpenses();

  if (isError) return <ErrorMessage error={error} retry={refetch} />;

  if (isLoading) return <LoadingAnimation />;

  if (data?.data.length === 0) return <NoRecords resource="expenses" />;

  return (
    <>
      <Table className="mt-3">
        <TableHead>
          <TableRow>
            <TableHeaderCell className="hidden sm:table-cell"></TableHeaderCell>
            <TableHeaderCell>Title</TableHeaderCell>
            <TableHeaderCell className="hidden sm:table-cell">
              Date
            </TableHeaderCell>
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
