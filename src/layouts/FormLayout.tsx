import { FC } from 'react';
import { Title, Button } from '@tremor/react';
import Logo from '../ui/Logo';
import { FaAngleLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

type Props = {
  children?: React.ReactNode;
  title: string;
};
const FormLayout: FC<Props> = ({ children, title }) => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex flex-col items-start gap-3 mb-6">
        <Title className="mx-auto text-center text-gray-400">{title}</Title>
        <Button
          role="link"
          variant="light"
          icon={FaAngleLeft}
          size="xs"
          color="blue"
          onClick={() => navigate('..')}
        >
          Back
        </Button>
      </div>

      <main className="grid min-h-screen gap-10 md:grid-cols-2">
        {children}
        <div className="items-center justify-center flex-1 hidden min-h-screen md:flex rounded-l-xl bg-tremor-brand">
          <Logo gradient className="md:w-40 md:h-40" />
        </div>
      </main>
    </div>
  );
};

export default FormLayout;
