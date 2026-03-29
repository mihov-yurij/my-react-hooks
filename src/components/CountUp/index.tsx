import CountUp from 'react-countup';
import { FaBriefcase } from "react-icons/fa"; // Важно: fa
import { FaSackDollar, FaUserAstronaut } from "react-icons/fa6"; // Важно: fa6
import { TbBrandZapier } from "react-icons/tb";

const stats = [
  { id: 1, label: 'Зароблено коштів', end: 12500.5, prefix: '$', color: 'text-green-500', type: 'money' },
  { id: 2, label: 'Зареєстровано', end: 450, color: 'text-blue-500', type: 'users' },
  { id: 3, label: 'Активні проекти', end: 120, color: 'text-purple-500', type: 'work' },
  { id: 4, label: 'Швидкість работы', end: 99, suffix: '%', color: 'text-yellow-500', type: 'speed' }
];

// Используем именованный экспорт для надежности
export const CounterUp = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10">
      {stats.map((item) => (
        <div key={item.id} className="flex flex-col items-center bg-white rounded-lg shadow p-6 border border-gray-100">
          <div className="text-4xl font-bold mb-2 flex items-center gap-2 text-black">
            {item.type === 'money' && <FaSackDollar className={item.color} size={32} />}
            {item.type === 'users' && <FaUserAstronaut className={item.color} size={32} />}
            {item.type === 'work' && <FaBriefcase className={item.color} size={32} />}
            {item.type === 'speed' && <TbBrandZapier className={item.color} size={32} />}

            <CountUp
              start={0}
              end={item.end}
              prefix={item.prefix || ''}
              suffix={item.suffix || ''}
              decimals={item.end % 1 !== 0 ? 2 : 0}
              duration={2}
            />
          </div>
          <p className="text-gray-600 font-medium">{item.label}</p>
        </div>
      ))}
    </div>
  );
};
