import {
  Link,
  useLocation,
  useMatch,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';

export default function RouterPlayground() {
  const navigate = useNavigate();
  const location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();
  const tab = searchParams.get('tab') ?? 'overview';
  const q = searchParams.get('q') ?? '';

  const matchUsers = useMatch('/users/:userId');

  const goToUser = (id: string) =>
    navigate(`/users/${id}?from=router`, { replace: false });

  const setTab = (nextTab: string) => {
    setSearchParams((prev) => {
      const sp = new URLSearchParams(prev);
      sp.set('tab', nextTab);
      return sp;
    });
  };

  const setQuery = (nextQ: string) => {
    setSearchParams((prev) => {
      const sp = new URLSearchParams(prev);
      if (nextQ) sp.set('q', nextQ);
      else sp.delete('q');
      return sp;
    });
  };

  return (
    <div>
      <h2>Router hooks playground</h2>

      <section
        style={{
          padding: 12,
          border: '1px solid #ddd',
          borderRadius: 12,
          marginBottom: 16,
        }}
      >
        <h3>useLocation</h3>
        <p>
          <b>pathname:</b> {location.pathname}
        </p>
        <p>
          <b>search:</b> {location.search || '(empty)'}
        </p>
        <p>
          <b>hash:</b> {location.hash || '(empty)'}
        </p>
      </section>

      <section
        style={{
          padding: 12,
          border: '1px solid #ddd',
          borderRadius: 12,
          marginBottom: 16,
        }}
      >
        <h3>useSearchParams</h3>
        <div
          style={{
            display: 'flex',
            gap: 8,
            flexWrap: 'wrap',
            alignItems: 'center',
          }}
        >
          <button onClick={() => setTab('overview')}>tab=overview</button>
          <button onClick={() => setTab('stats')}>tab=stats</button>
          <button onClick={() => setTab('settings')}>tab=settings</button>

          <label style={{ marginLeft: 8 }}>
            q:
            <input
              value={q}
              onChange={(e) => setQuery(e.target.value)}
              style={{ marginLeft: 8 }}
            />
          </label>
        </div>

        <p>
          Current tab: <b>{tab}</b>
        </p>
        <p>
          Current q: <b>{q || '—'}</b>
        </p>
      </section>

      <section
        style={{
          padding: 12,
          border: '1px solid #ddd',
          borderRadius: 12,
          marginBottom: 16,
        }}
      >
        <h3>useNavigate</h3>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <button onClick={() => navigate('/')}>Go Home</button>
          <button onClick={() => navigate(-1)}>Back</button>
          <button onClick={() => navigate(+1)}>Forward</button>
          <button onClick={() => goToUser('42')}>Go to /users/42</button>
        </div>

        <p style={{ color: '#555' }}>
          <code>navigate(-1)</code> — назад по історії, як кнопка Back у
          браузері.
        </p>
      </section>

      <section
        style={{ padding: 12, border: '1px solid #ddd', borderRadius: 12 }}
      >
        <h3>useMatch</h3>
        <p>
          useMatch('/users/:userId') на цій сторінці:{' '}
          <b>{matchUsers ? 'MATCH' : 'NO MATCH'}</b>
        </p>

        <p>Links:</p>
        <ul>
          <li>
            <Link to="/users/1">/users/1</Link>
          </li>
          <li>
            <Link to="/users/2?from=router#bio">/users/2?from=router#bio</Link>
          </li>
        </ul>
      </section>
    </div>
  );
}