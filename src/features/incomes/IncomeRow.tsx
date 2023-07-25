import { Icon, TableCell, TableRow, Text } from '@tremor/react';
import { FC, useState } from 'react';
import CategoryIcon from '../../ui/CategorySelect';
import { Link } from 'react-router-dom';
import { formatCurrency } from '../../utils/helpers';
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
import ConfirmDelete from '../../ui/ConfirmDelete';
import { useDeleteIncome } from './useDeleteIncome';

type Props = {
  item: Income;
};
const IncomeRow: FC<Props> = ({ item }) => {
  const [open, setOpen] = useState(false);

  const { mutate: deleteIncome, isLoading } = useDeleteIncome();

  const handleDeleteIncome = () => {
    deleteIncome(
      { id: item.id },
      {
        onSuccess: () => {
          setOpen(false);
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
