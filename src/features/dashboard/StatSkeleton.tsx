import { Card } from '@tremor/react';
const StatSkeleton = () => {
  return (
    <Card className="animate-pulse space-y-5">
      <span className="block h-3 w-12 rounded-full bg-gray-100"></span>
      <span className="block h-6 w-32 rounded-full bg-gray-100"></span>

      <div className="flex items-center gap-4">
        <span className="h-3 w-12 rounded-full bg-gray-100"></span>
        <span className="h-3 w-28 rounded-full bg-gray-100"></span>
      </div>
    </Card>
  );
};

export default StatSkeleton;
