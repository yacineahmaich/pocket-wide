import {
  Table,
  TableBody,
  TableHead,
  TableHeaderCell,
  TableRow,
} from '@tremor/react';
import { useIncomes } from './useIncomes';
import Pagination from '../../ui/Pagination';
import IncomeRow from './IncomeRow';
import NoRecords from '../../ui/NoRecords';
import LoadingAnimation from '../../ui/LoadingAnimation';
import ErrorMessage from '../../ui/ErrorMessage';

function IncomesTable() {
  const { data, isLoading, isError, error, refetch } = useIncomes();

  if (isError) return <ErrorMessage error={error} retry={refetch} />;
  if (isLoading) return <LoadingAnimation />;
  if (data?.data.length === 0) return <NoRecords resource="incomes" />;

  return (
    <>
      <Table className="mt-3">
        <TableHead>
          <TableRow>
            <TableHeaderCell></TableHeaderCell>
            <TableHeaderCell>Title</TableHeaderCell>
            <TableHeaderCell className="hidden sm:table-cell">
              Date
            </TableHeaderCell>
            <TableHeaderCell className="hidden sm:table-cell">
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
