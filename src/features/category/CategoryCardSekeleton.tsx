import { Card } from '@tremor/react';

function CategoryCardSekeleton() {
  return (
    <Card className="flex gap-4 animate-pulse">
      <span className="bg-gray-200 rounded-full w-14 h-14"></span>
      <div className="flex flex-col gap-4">
        <span className="h-3 bg-gray-200 rounded-lg w-14"></span>
        <span className="w-20 h-3 bg-gray-200 rounded-lg"></span>
      </div>
    </Card>
  );
}

export default CategoryCardSekeleton;
