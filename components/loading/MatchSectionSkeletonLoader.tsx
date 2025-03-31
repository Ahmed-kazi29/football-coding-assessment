const MatchSectionSkeletonLoader = () => {
  return (
    <div className="w-full flex flex-col gap-4 rounded-xl bg-custom-gray-1 py-4 px-4 animate-pulse">
      <div className="flex flex-col md:flex-row items-center gap-4">
        <div className="h-10 w-full md:w-24 bg-custom-gray-2 rounded-md" />
        <div className="w-full md:flex-grow h-10 bg-custom-gray-2 rounded-md" />
        <div className="h-10 w-full md:w-32 bg-custom-gray-2 rounded-md" />
      </div>
      <div className="h-16 bg-custom-gray-2 rounded-md" />
      <div className="h-28 bg-custom-gray-2 rounded-md" />
    </div>
  );
};

export default MatchSectionSkeletonLoader;
