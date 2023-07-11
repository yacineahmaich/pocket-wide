import {
  Button,
  Table,
  TableBody,
  TableHead,
  TableHeaderCell,
  TableRow,
  Title,
} from '@tremor/react';
import { FaArrowDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
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
    <section className="flex-1 p-6">
      <div className="flex items-center justify-between">
        <Title className="mb-4 text-gray-400">Expenses</Title>
        <Link to="create">
          <Button color="blue" variant="light" size="xs" icon={FaArrowDown}>
            Add Expense
          </Button>
        </Link>
      </div>
      <Table className="mt-5">
        <TableHead>
          <TableRow>
            <TableHeaderCell></TableHeaderCell>
            <TableHeaderCell>Title</TableHeaderCell>
            <TableHeaderCell>Date</TableHeaderCell>
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
    </section>
  );
}

export default ExpensesTable;
