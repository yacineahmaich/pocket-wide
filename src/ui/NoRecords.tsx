import { FC } from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/lottie/no-data.json';

type Props = {
  resource: string;
};
const NoRecords: FC<Props> = ({ resource }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-6">
      <Lottie
        animationData={animationData}
        className="h-[300px] mt-0 mx-auto"
      />
      <p className="text-lg font-semibold text-gray-500">
        No {resource} found!
      </p>
    </div>
  );
};

export default NoRecords;
