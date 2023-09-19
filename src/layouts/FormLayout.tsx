import { FC } from 'react';
import { Title, Button } from '@tremor/react';
import Logo from '../ui/Logo';
import { FaAngleLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

type Props = {
  children?: React.ReactNode;
  title: string;
};
const FormLayout: FC<Props> = ({ children, title }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="px-3 lg:px-6">
      <div className="mb-6 flex flex-col items-start gap-3">
        <Title className="mx-auto text-center text-gray-400">{title}</Title>
        <Button
          role="link"
          variant="light"
          icon={FaAngleLeft}
          size="xs"
          color="blue"
          onClick={() => navigate('..')}
        >
          {t('back')}
        </Button>
      </div>

      <main className="grid min-h-screen gap-10 md:grid-cols-2">
        {children}
        <div className="hidden min-h-screen flex-1 items-center justify-center rounded-l-xl bg-tremor-brand md:flex">
          <Logo gradient className="md:h-24 md:w-24" />
        </div>
      </main>
    </div>
  );
};

export default FormLayout;
