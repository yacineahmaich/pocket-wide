function OverviewSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="flex gap-3 pb-3 my-8 border-b border-gray-100">
        <span className="w-20 h-6 bg-gray-100 rounded-lg"></span>
        <span className="w-20 h-6 bg-gray-100 rounded-lg"></span>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <span className="h-6 bg-gray-100 rounded-lg w-14"></span>
          <span className="h-6 bg-gray-100 rounded-lg w-14"></span>
        </div>
        <div className="flex flex-col gap-4">
          {Array.from({ length: 5 }, (_, idx) => (
            <div key={idx} className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="w-8 h-8 mr-2 bg-gray-100 rounded-full"></span>
                <span className="w-40 h-4 bg-gray-100 rounded-lg"></span>
              </div>
              <span className="h-4 bg-gray-100 rounded-lg w-14"></span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OverviewSkeleton;
