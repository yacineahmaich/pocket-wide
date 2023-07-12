import { Title } from '@tremor/react';

import { FC } from 'react';
import Logo from '../ui/Logo';
type Props = {
  children?: React.ReactNode;
  title: string;
};
const FormLayout: FC<Props> = ({ children, title }) => {
  return (
    <div>
      <Title className="mb-6 text-center text-gray-400">{title}</Title>

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
