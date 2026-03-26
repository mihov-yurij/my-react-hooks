import { useMemo } from 'react';
import {
  Link,
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from 'react-router-dom';

export default function UserDetails() {
  const { userId } = useParams(); // /users/:userId
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const from = searchParams.get('from') ?? 'direct';
  const hash = location.hash;

  const fakeUser = useMemo(() => {
    return { id: userId, name: `User #${userId}` };
  }, [userId]);

  return (
    <div>
      <h2>User details</h2>

      <section
        style={{
          padding: 12,
          border: '1px solid #ddd',
          borderRadius: 12,
          marginBottom: 16,
        }}
      >
        <p>
          <b>useParams:</b> userId = {userId}
        </p>
        <p>
          <b>useSearchParams:</b> from = {from}
        </p>
        <p>
          <b>useLocation:</b> hash = {hash || '(empty)'}
        </p>
        <p>
          <b>Derived user:</b> {fakeUser.name}
        </p>

        <div
          style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 8 }}
        >
          <button onClick={() => navigate('/router')}>
            Go to router playground
          </button>
          <button onClick={() => navigate(-1)}>Back</button>
        </div>
      </section>

      <p>Quick links:</p>
      <ul>
        <li>
          <Link to="/users/10?from=details">/users/10?from=details</Link>
        </li>
        <li>
          <Link to="/users/10?from=details#bio">
            /users/10?from=details#bio
          </Link>
        </li>
      </ul>
    </div>
  );
}