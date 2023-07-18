import {
  Table,
  TableBody,
  TableHead,
  TableHeaderCell,
  TableRow,
} from '@tremor/react';
import { useIncomes } from './useIncomes';
import Lottie from 'lottie-react';
import animationData from '../../assets/lottie/searchingDocs.json';
import Pagination from '../../ui/Pagination';
import IncomeRow from './IncomeRow';
import NoRecords from '../../ui/NoRecords';

function IncomesTable() {
  const { data, isLoading } = useIncomes();

  if (isLoading)
    return <Lottie animationData={animationData} className="m-6" />;

  if (data?.data.length === 0) return <NoRecords resource="incomes" />;

  return (
    <>
      <Table className="mt-3">
        <TableHead>
          <TableRow>
            <TableHeaderCell></TableHeaderCell>
            <TableHeaderCell>Title</TableHeaderCell>
            <TableHeaderCell className="hidden md:table-cell">
              Date
            </TableHeaderCell>
            <TableHeaderCell className="hidden md:table-cell">
              Amount
            </TableHeaderCell>
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
    </>
  );
}

export default IncomesTable;
