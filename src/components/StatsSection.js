import CountUp from 'react-countup';

const stats = [
  { label: 'Projects Completed', value: 6 },
  { label: 'Years of Experience', value: 2 },
  { label: 'Certifications Earned', value: 3 },
];

const StatsSection = () => {
  return (
    <div className="w-full bg-gray-900 text-white py-12 px-6">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center space-y-2">
            <h3 className="text-5xl font-extrabold text-yellow-400">
              <CountUp end={stat.value} duration={2} />
              <span className="text-white">+</span>
            </h3>
            <p className="text-sm uppercase tracking-widest text-gray-300">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
