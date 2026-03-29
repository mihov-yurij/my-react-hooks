import { CounterUp } from './components/CountUp/index'; // Добавили фигурные скобки
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8 text-center">
      <h1 className="text-3xl font-bold mb-8">My Hooks Showcase</h1>
      <CounterUp />
    </div>
  );
}

export default App;