import { Icon, TableCell, TableRow, Text } from '@tremor/react';
import { FC, useState } from 'react';
import CategoryIcon from '../../ui/CategorySelect';
import { Link } from 'react-router-dom';
import { formatCurrency } from '../../utils/helpers';
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
import ConfirmDelete from '../../ui/ConfirmDelete';
import { useQueryClient } from '@tanstack/react-query';
import { useDeleteIncome } from './useDeleteIncome';
import { toast } from 'sonner';

type Props = {
  item: Income;
};
const IncomeRow: FC<Props> = ({ item }) => {
  const queryClient = useQueryClient();
  const [open, setOpen] = useState(false);

  const { mutate: deleteIncome, isLoading } = useDeleteIncome();

  const handleDeleteIncome = () => {
    deleteIncome(
      { id: item.id },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(['incomes']);
          setOpen(false);
          toast.message('income deleted');
        },
      }
    );
  };

  return (
    <TableRow key={item.title}>
      <TableCell className="hidden sm:table-cell">
        <Text>
          <CategoryIcon categoryKey={item.category} />
        </Text>
      </TableCell>
      <TableCell>{item.title}</TableCell>
      <TableCell className="hidden sm:table-cell">{item.date}</TableCell>
      <TableCell>
        <Text>{formatCurrency(item.amount, 'USD')}</Text>
      </TableCell>
      <TableCell className="space-x-3">
        <button onClick={() => setOpen(true)}>
          <Icon icon={FaTrashAlt} color="red" variant="solid" size="xs" />
        </button>
        <ConfirmDelete
          open={open}
          setOpen={setOpen}
          resource="expense"
          onConfirm={handleDeleteIncome}
          isLoading={isLoading}
        />
        <Link to={`${item.id}/edit`}>
          <Icon icon={FaPencilAlt} color="green" variant="solid" size="xs" />
        </Link>
      </TableCell>
    </TableRow>
  );
};

export default IncomeRow;
