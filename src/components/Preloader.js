
import { useEffect, useState } from "react";

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) return prev;
        return Math.min(prev + Math.random() * 12, 90);
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] bg-moon flex flex-col items-center justify-center">
      <h1 className="font-syncopate text-2xl md:text-4xl text-midnight font-bold">
        SIMON TENEDERO
      </h1>

      <p className="font-courier text-sm text-midnight mt-6">
        Just a moment, getting things ready...
      </p>

      <div className="w-48 h-[2px] bg-gray-500/40 mt-8 overflow-hidden">
        <div
          className="h-full bg-midnight transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="font-courier text-xs text-midnight/60 mt-3">
        {Math.floor(progress)}%
      </p>
    </div>
  );
};

export default Preloader;
