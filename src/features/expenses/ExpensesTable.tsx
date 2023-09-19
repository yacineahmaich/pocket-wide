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
import { useTranslation } from 'react-i18next';

function ExpensesTable() {
  const { t } = useTranslation();
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
            <TableHeaderCell>{t('title')}</TableHeaderCell>
            <TableHeaderCell className="hidden sm:table-cell">
            {t('date')}
            </TableHeaderCell>
            <TableHeaderCell>{t('amount')}</TableHeaderCell>
            <TableHeaderCell>{t('actions')}</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.data?.map(item => <ExpenseRow key={item.title} item={item} />)}
        </TableBody>
      </Table>
      <Pagination count={data?.count as number} />
    </>
  );
}

export default ExpensesTable;
