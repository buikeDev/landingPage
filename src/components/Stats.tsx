import React, { useState, useEffect, useRef } from "react";

interface StatItemProps {
  finalValue: number;
  label: string;
  isInView: boolean;
}

const StatItem = ({ finalValue, label, isInView }: StatItemProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrameId: number;
    const duration = 2000; // 2 seconds duration

    if (isInView) {
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);

        // Easing function for smoother animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeOutQuart * finalValue));

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(animate);
        }
      };

      animationFrameId = requestAnimationFrame(animate);
    }

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [finalValue, isInView]);

  return (
    <div className="stat-item text-center relative bg-gradient-to-br from-blue-50 to-slate-100">
      <div className="text-[80px] md:text-[120px] font-bold text-white-100 opacity-10 mb-2 leading-none">
        {count}
      </div>
      <div className="text-lg md:text-2xl font-medium text-gray-800 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        {label}
      </div>
    </div>
  );
};

const Stats = () => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={ref} className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-5xl mx-auto">
          <StatItem finalValue={93} label="Projects" isInView={isInView} />

          <div className="hidden md:block w-[1px] h-28 bg-gray-200"></div>
          <StatItem finalValue={45} label="People" isInView={isInView} />

          <div className="hidden md:block w-[1px] h-28 bg-gray-200"></div>
          <StatItem finalValue={10} label="Years" isInView={isInView} />

          <div className="hidden md:block w-[1px] h-28 bg-gray-200"></div>
          <StatItem finalValue={15} label="Offices" isInView={isInView} />
        </div>
      </div>
    </section>
  );
};

export default Stats;
