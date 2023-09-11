import { Title, Button, Icon } from '@tremor/react';
import { useState } from 'react';
import { FaSlidersH, FaArrowDown, FaPen } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import MobileFilter from '../shared/MobileFilter';

function ExpensesHeading() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center justify-between p-3 mb-4 lg:p-6">
      <Title className="text-gray-400">Expenses</Title>
      <div>
        <Button
          variant="light"
          className="mr-3 md:hidden"
          onClick={() => setOpen(true)}
        >
          <Icon
            icon={FaSlidersH}
            color="gray"
            size="xs"
            variant="solid"
            className="px-4"
          />
        </Button>
        <MobileFilter open={open} setOpen={setOpen} />
        <Link to="create">
          <Button
            color="blue"
            variant="light"
            size="xs"
            icon={FaArrowDown}
            className="hidden md:flex"
          >
            Add Income
          </Button>
          <Icon
            icon={FaPen}
            color="blue"
            variant="solid"
            className="md:hidden"
            size="xs"
          />
        </Link>
      </div>
    </div>
  );
}
export default ExpensesHeading;