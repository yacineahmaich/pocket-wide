import { FC } from 'react';
type Props = {
  msg: string | undefined;
};
const FieldError: FC<Props> = ({ msg }) => {
  return (
    <p className="mt-1 text-sm tremor-TextInput-errorMessage text-rose-500">
      {msg}
    </p>
  );
};

export default FieldError;
