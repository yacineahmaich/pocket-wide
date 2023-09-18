import { Card } from '@tremor/react';

function CategoryCardSekeleton() {
  return (
    <Card className="flex animate-pulse gap-4">
      <span className="h-14 w-14 rounded-full bg-gray-200"></span>
      <div className="flex flex-col gap-4">
        <span className="h-3 w-14 rounded-lg bg-gray-200"></span>
        <span className="h-3 w-20 rounded-lg bg-gray-200"></span>
      </div>
    </Card>
  );
}

export default CategoryCardSekeleton;
