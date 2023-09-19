import { Icon, TableCell, TableRow, Text } from '@tremor/react';
import { FC, useState } from 'react';
import CategoryIcon from '../../ui/CategorySelect';
import { Link } from 'react-router-dom';
import { formatCurrency } from '../../utils/helpers';
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
import ConfirmDelete from '../../ui/ConfirmDelete';
import { useDeleteIncome } from './useDeleteIncome';
import { useUser } from '../auth/useUser';

type Props = {
  item: Income;
};
const IncomeRow: FC<Props> = ({ item }) => {
  const { user } = useUser();
  const [open, setOpen] = useState(false);

  const { mutate: deleteIncome, isLoading } = useDeleteIncome();

  const handleDeleteIncome = () => {
    deleteIncome(
      { id: item.id },
      {
        onSuccess: () => {
          setOpen(false);
        },
      },
    );
  };

  return (
    <TableRow key={item.title}>
      <TableCell className="hidden sm:table-cell">
        <Text>
          <CategoryIcon categoryKey={item.category} type="income" />
        </Text>
      </TableCell>
      <TableCell>{item.title}</TableCell>
      <TableCell className="hidden sm:table-cell">{item.date}</TableCell>
      <TableCell>
        <Text>{formatCurrency(item.amount, user?.user_metadata.currency)}</Text>
      </TableCell>
      <TableCell className="space-x-3">
        <button onClick={() => setOpen(true)}>
          <Icon icon={FaTrashAlt} color="red" variant="solid" size="xs" />
        </button>
        <ConfirmDelete
          open={open}
          setOpen={setOpen}
          resource="income"
          onConfirm={handleDeleteIncome}
          isLoading={isLoading}
        />
        <Link to={`${item.id}/edit`} state={item}>
          <Icon icon={FaPencilAlt} color="green" variant="solid" size="xs" />
        </Link>
      </TableCell>
    </TableRow>
  );
};

export default IncomeRow;
