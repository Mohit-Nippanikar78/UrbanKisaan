import React, { useEffect, useState } from 'react';

function ProgressBar() {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prev) => (prev < 80 ? prev + 10 : clearInterval(interval)));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const getColor = () => {
    if (percentage < 33) return 'bg-red-500';
    if (percentage < 66) return 'bg-orange-500';
    return 'bg-green-500';
  };

  return (
    <div className="w-96">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm">Soil Health</span>
        <span className="text-sm font-bold">{percentage}%</span>
      </div>
      <div className="relative h-4 bg-gray-200 rounded">
        <div
          className={`h-full rounded transition-all duration-300 ${getColor()}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      <h2 className='text-green-800 text-sm'> Very Good</h2>
    </div>
  );
}

export default ProgressBar;
