import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resetForm } from './store';

function Summary({ onBack }) {
  const form = useSelector((state) => state.form);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    alert("Form submitted:\n" + JSON.stringify(form, null, 2));
    dispatch(resetForm());
  };

  return (
    <div>
      <h2>Summary</h2>
      <p><strong>Name:</strong> {form.name}</p>
      <p><strong>Email:</strong> {form.email}</p>
      <p><strong>Address:</strong> {form.address}</p>
      <p><strong>City:</strong> {form.city}</p>
      <button onClick={onBack}>Back</button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Summary;
