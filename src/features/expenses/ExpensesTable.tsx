import {
  Button,
  Icon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Text,
  Title,
} from '@tremor/react';
import {
  FaBook,
  FaPencilAlt,
  FaPlus,
  FaPlusCircle,
  FaTrashAlt,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { formatCurrency } from '../../utils/helpers';
import CategoryIcon from '../../ui/CategorySelect';
import { useExpenses } from './useExpenses';
import Lottie from 'lottie-react';
import animationData from '../../assets/lottie/searchingDocs.json';
import Pagination from '../../ui/Pagination';
import { HiPencil, HiPlus } from 'react-icons/hi2';

function ExpensesTable() {
  const { data, isLoading } = useExpenses();

  if (isLoading)
    return <Lottie animationData={animationData} className="m-6" />;

  return (
    <section className="flex-1 p-6">
      <div className="flex items-center justify-between">
        <Title className="mb-4 text-gray-400">Expenses</Title>
        <Link to="create">
          <Button color="blue" variant="light" size="xs" icon={FaBook}>
            Add expense
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
            <TableRow key={item.title}>
              <TableCell>
                <Text>
                  <CategoryIcon categoryKey={item.category} />
                </Text>
              </TableCell>
              <TableCell>{item.title}</TableCell>
              <TableCell>{item.date}</TableCell>
              <TableCell>
                <Text>{formatCurrency(item.amount, 'USD')}</Text>
              </TableCell>
              <TableCell className="space-x-3">
                <button>
                  <Icon
                    icon={FaTrashAlt}
                    color="red"
                    variant="solid"
                    size="xs"
                  />
                </button>
                <Link to="">
                  <Icon
                    icon={FaPencilAlt}
                    color="green"
                    variant="solid"
                    size="xs"
                  />
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Pagination count={data?.count as number} />
    </section>
  );
}

export default ExpensesTable;
