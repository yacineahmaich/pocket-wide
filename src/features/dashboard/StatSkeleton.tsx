import { Card } from '@tremor/react';
const StatSkeleton = () => {
  return (
    <Card className="space-y-5 animate-pulse">
      <span className="block w-12 h-3 bg-gray-100 rounded-full"></span>
      <span className="block w-32 h-6 bg-gray-100 rounded-full"></span>

      <div className="flex items-center gap-4">
        <span className="w-12 h-3 bg-gray-100 rounded-full"></span>
        <span className="h-3 bg-gray-100 rounded-full w-28"></span>
      </div>
    </Card>
  );
};

export default StatSkeleton;
