import { useCallback } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

const UserPlayground = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  // Получение значений
  const name = searchParams.get('name') || '';
  const age = searchParams.get('age') || '';

  // Обновление параметров
  const updateParams = useCallback((key: string, value: string) => {
    setSearchParams((prev: URLSearchParams) => {
      const newParams = new URLSearchParams(prev);
      
      if (value) {
        newParams.set(key, value);
      } else {
        newParams.delete(key);
      }

      return newParams;
    });
  }, [setSearchParams]);

  // Очистка параметров
  const clearParams = useCallback(() => {
    setSearchParams({});
  }, [setSearchParams]);

  // Навигация
  const goToHome = useCallback(() => {
    navigate('/');
  }, [navigate]);

  return (
    <div>
      <h2>User Playground</h2>

      <div>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => updateParams('name', e.target.value)}
        />
      </div>

      <div>
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => updateParams('age', e.target.value)}
        />
      </div>

      <div style={{ marginTop: '10px' }}>
        <button onClick={clearParams}>Clear Params</button>
        <button onClick={goToHome}>Go Home</button>
      </div>

      <div style={{ marginTop: '20px' }}>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Age:</strong> {age}</p>
      </div>
    </div>
  );
};

export default UserPlayground;
