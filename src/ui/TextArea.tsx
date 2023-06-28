import { HTMLAttributes, HTMLProps, LegacyRef, forwardRef } from 'react';
import { RefCallBack } from 'react-hook-form';

interface Props
  extends HTMLProps<HTMLTextAreaElement>,
    HTMLAttributes<HTMLTextAreaElement> {
  children?: React.ReactNode;
}
const TextArea = forwardRef<RefCallBack, Props>(
  ({ children, ...props }, ref) => {
    return (
      <div className="tremor-TextInput-root relative w-full flex items-center min-w-[10rem] outline-none rounded-tremor-default shadow-tremor-input dark:shadow-dark-tremor-input bg-tremor-background dark:bg-dark-tremor-background hover:bg-tremor-background-muted dark:hover:bg-dark-tremor-background-muted text-tremor-content dark:text-dark-tremor-content border-tremor-border dark:border-dark-tremor-border border">
        <textarea
          ref={ref as LegacyRef<HTMLTextAreaElement>}
          className="w-full py-2 pl-4 pr-4 bg-transparent border-none tremor-TextInput-input focus:outline-none focus:ring-0 text-tremor-default text-tremor-content-emphasis dark:text-dark-tremor-content-emphasis placeholder:text-tremor-content dark:placeholder:text-dark-tremor-content"
          {...props}
        >
          {children}
        </textarea>
      </div>
    );
  }
);

export default TextArea;
