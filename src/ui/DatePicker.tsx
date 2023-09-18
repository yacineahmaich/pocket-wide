import { HTMLProps, LegacyRef, forwardRef } from 'react';
import { RefCallBack } from 'react-hook-form';
interface Props extends HTMLProps<HTMLInputElement> {
  children?: React.ReactNode;
}
const DatePicker = forwardRef<RefCallBack, Props>((props, ref) => {
  return (
    <div className="tremor-TextInput-root relative flex w-full min-w-[10rem] items-center rounded-tremor-default border border-tremor-border bg-tremor-background text-tremor-content shadow-tremor-input outline-none hover:bg-tremor-background-muted dark:border-dark-tremor-border dark:bg-dark-tremor-background dark:text-dark-tremor-content dark:shadow-dark-tremor-input dark:hover:bg-dark-tremor-background-muted">
      <input
        ref={ref as LegacyRef<HTMLInputElement>}
        className="tremor-TextInput-input w-full border-none bg-transparent py-2 pl-4 pr-4 text-tremor-default text-tremor-content-emphasis placeholder:text-tremor-content focus:outline-none focus:ring-0 dark:text-dark-tremor-content-emphasis dark:placeholder:text-dark-tremor-content"
        type="date"
        {...props}
      />
    </div>
  );
});

export default DatePicker;
