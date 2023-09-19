import { Title, Button, Icon } from '@tremor/react';
import { FaSlidersH, FaArrowUp, FaPen } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import MobileFilter from '../shared/MobileFilter';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

function IncomesHeading() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  return (
    <div className="mb-4 flex items-center justify-between p-3 lg:p-6">
      <Title className="text-gray-400">{t('incomes')}</Title>
      <div>
        <Button
          variant="light"
          className="mr-3 lg:hidden"
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
            icon={FaArrowUp}
            className="hidden lg:flex"
          >
            {t('add-income')}
          </Button>
          <Icon
            icon={FaPen}
            color="blue"
            variant="solid"
            className="lg:hidden"
            size="xs"
          />
        </Link>
      </div>
    </div>
  );
}

export default IncomesHeading;
