import React, { useReducer } from 'react';

// 1️⃣ Reducer Function
const formReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return {
        ...state,
        [action.field]: action.value
      };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};

// 2️⃣ Initial State
const initialState = {
  name: '',
  email: '',
  age: ''
};

function UserForm() {
  // 3️⃣ useReducer Hook
  const [formState, dispatch] = useReducer(formReducer, initialState);

  // 4️⃣ Handler for input change
  const handleChange = (e) => {
    dispatch({
      type: 'UPDATE_FIELD',
      field: e.target.name,
      value: e.target.value
    });
  };

  // 5️⃣ Submit Handler
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formState);

    // Reset the form
    dispatch({ type: 'RESET' });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>User Form (useReducer)</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label><br />
          <input
            name="name"
            value={formState.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Email: </label><br />
          <input
            name="email"
            type="email"
            value={formState.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Age: </label><br />
          <input
            name="age"
            type="number"
            value={formState.age}
            onChange={handleChange}
          />
        </div>

        <button type="submit" style={{ marginTop: '10px' }}>Submit</button>
      </form>
    </div>
  );
}

export default UserForm;
