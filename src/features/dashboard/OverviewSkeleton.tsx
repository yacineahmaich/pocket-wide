function OverviewSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="my-8 flex gap-3 border-b border-gray-100 pb-3">
        <span className="h-6 w-20 rounded-lg bg-gray-100"></span>
        <span className="h-6 w-20 rounded-lg bg-gray-100"></span>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <span className="h-6 w-14 rounded-lg bg-gray-100"></span>
          <span className="h-6 w-14 rounded-lg bg-gray-100"></span>
        </div>
        <div className="flex flex-col gap-4">
          {Array.from({ length: 5 }, (_, idx) => (
            <div key={idx} className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="mr-2 h-8 w-8 rounded-full bg-gray-100"></span>
                <span className="h-4 w-40 rounded-lg bg-gray-100"></span>
              </div>
              <span className="h-4 w-14 rounded-lg bg-gray-100"></span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OverviewSkeleton;
