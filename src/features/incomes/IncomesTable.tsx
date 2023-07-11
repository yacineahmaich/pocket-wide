import {
  Button,
  Table,
  TableBody,
  TableHead,
  TableHeaderCell,
  TableRow,
  Title,
} from '@tremor/react';
import { FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useIncomes } from './useIncomes';
import Lottie from 'lottie-react';
import animationData from '../../assets/lottie/searchingDocs.json';
import Pagination from '../../ui/Pagination';
import IncomeRow from './IncomeRow';

function IncomesTable() {
  const { data, isLoading } = useIncomes();

  if (isLoading)
    return <Lottie animationData={animationData} className="m-6" />;

  return (
    <section className="flex-1 p-6">
      <div className="flex items-center justify-between">
        <Title className="mb-4 text-gray-400">Incomes</Title>
        <Link to="create">
          <Button color="blue" variant="light" size="xs" icon={FaArrowUp}>
            Add Income
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
            <IncomeRow key={item.id} item={item} />
          ))}
        </TableBody>
      </Table>
      <Pagination count={data?.count as number} />
    </section>
  );
}

export default IncomesTable;
