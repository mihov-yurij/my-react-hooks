import { useReducer, type FormEvent } from 'react';

type FormState = {
  name: string;
  email: string;
  error: boolean;
  loading: boolean;
};

type FormAction =
  | { type: 'SET_NAME'; payload: string }
  | { type: 'SET_EMAIL'; payload: string }
  | { type: 'SET_ERROR'; payload: boolean }
  | { type: 'SET_LOADING'; payload: boolean };

const initialState: FormState = {
  name: '',
  email: '',
  error: false,
  loading: false,
};

const formReducer = (state: FormState, action: FormAction): FormState => {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, name: action.payload };
    case 'SET_EMAIL':
      return { ...state, email: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

export default function HomeWithReducer() {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // submit logic
    if (!state.name || !state.email) {
      dispatch({ type: 'SET_ERROR', payload: true });
      return;
    }

    dispatch({ type: 'SET_ERROR', payload: false });
    dispatch({ type: 'SET_LOADING', payload: true });

    setTimeout(() => {
      dispatch({ type: 'SET_LOADING', payload: false });
    }, 2000);

    console.log(state);
  };

  return (
    <div>
      {state.loading ? 'Submitting...' : 'User Form'}
      {state.error && (
        <div style={{ color: 'red' }}>Please fill in all fields.</div>
      )}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={state.name}
          onChange={(e) =>
            dispatch({ type: 'SET_NAME', payload: e.target.value })
          }
        />
        <input
          type="email"
          placeholder="Email"
          value={state.email}
          onChange={(e) =>
            dispatch({ type: 'SET_EMAIL', payload: e.target.value })
          }
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}