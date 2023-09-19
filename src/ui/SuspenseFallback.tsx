import { Icon } from '@tremor/react';
import { CgSpinner } from 'react-icons/cg';

function SuspenseFallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <Icon icon={CgSpinner} className="animate-spin" />
    </div>
  );
}

export default SuspenseFallback;
