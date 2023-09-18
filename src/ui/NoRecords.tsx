import { FC } from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/lottie/no-records.json';

type Props = {
  resource: string;
};
const NoRecords: FC<Props> = ({ resource }) => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <Lottie animationData={animationData} className="mx-auto h-[300px]" />
      <p className="text-lg font-semibold text-gray-500">
        No {resource} found!
      </p>
    </div>
  );
};

export default NoRecords;
