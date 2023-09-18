import { FC } from 'react';
type Props = {
  msg: string | undefined;
};
const FieldError: FC<Props> = ({ msg }) => {
  return (
    <p className="tremor-TextInput-errorMessage mt-1 text-sm text-rose-500">
      {msg}
    </p>
  );
};

export default FieldError;
