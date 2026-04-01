
import CounterUp from './components/CountUp'; // Убрали /index для корректной работы Vite
import './index.css';
import MyDatePicker from './components/DatePicker'; // Убрали /index для корректной работы Vite

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        My Hooks Showcase
      </h1>
 <div>
      <MyDatePicker />
    </div>

      <div className="max-w-6xl mx-auto">
        <CounterUp />
      </div>
    </div>
  );
}

export default App;