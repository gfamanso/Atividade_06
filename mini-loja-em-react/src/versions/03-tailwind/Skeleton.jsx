import React from 'react';

const Skeleton = () => {
  return (
    <div className="flex flex-col bg-white dark:bg-zinc-800 rounded-lg overflow-hidden shadow-md">
      <div className="w-full aspect-w-1 aspect-h-1 animate-pulse bg-gray-300 dark:bg-zinc-700"></div>
      
      <div className="p-4 flex flex-col flex-grow">
        <div className="animate-pulse h-4 bg-gray-300 dark:bg-zinc-700 rounded w-2/3 mb-2"></div>
        <div className="animate-pulse h-4 bg-gray-300 dark:bg-zinc-700 rounded w-full mb-2"></div>
        <div className="animate-pulse h-4 bg-gray-300 dark:bg-zinc-700 rounded w-1/2 mt-auto"></div>
        <div className="animate-pulse h-3 w-1/4 bg-gray-300 dark:bg-zinc-700 rounded mt-2"></div>
      </div>

      <div className="p-4 border-t border-gray-200 dark:border-zinc-700">
        <div className="animate-pulse h-10 w-full bg-gray-300 dark:bg-zinc-700 rounded"></div>
      </div>
    </div>
  );
};

export default Skeleton;