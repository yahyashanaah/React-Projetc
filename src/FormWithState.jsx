import React, { useReducer } from 'react';

// Step 1: Define the reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      return state;
  }
};

// Step 2: Initial state
const initialState = { count: 0 };

function Counter() {
  // Step 3: useReducer hook
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Count: {state.count}</h2>
      <button onClick={() => dispatch({ type: 'increment' })}>➕ Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>➖ Decrement</button>
      <button onClick={() => dispatch({ type: 'reset' })}>🔄 Reset</button>
    </div>
  );
}

export default Counter;
