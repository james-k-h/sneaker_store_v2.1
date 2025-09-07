const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="relative">
        {/* Spinning circle */}
        <div className="w-16 h-16 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
      </div>

      {/* Loading text */}
      <p className="mt-4 text-lg font-medium text-gray-700">
        Loading in progress...
      </p>
    </div>
  );
};

const Loading = () => {
  return <Loader />;
};
export default Loading;
