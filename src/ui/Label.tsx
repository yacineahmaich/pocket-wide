import { FC, HTMLProps } from 'react';
interface Props extends HTMLProps<HTMLLabelElement> {
  children?: React.ReactNode;
}
const Label: FC<Props> = ({ children, ...props }) => {
  return (
    <label
      className="text-tremor-default text-tremor-content dark:text-dark-tremor-content"
      {...props}
    >
      {children}
    </label>
  );
};

export default Label;
