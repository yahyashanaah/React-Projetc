import { useSelector, useDispatch } from 'react-redux';
import { updateForm } from './store';

function UserForm({ onNext }) {
  const form = useSelector((state) => state.form);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>User Info</h2>
      <input
        type="text"
        placeholder="Name"
        value={form.name}
        onChange={(e) => dispatch(updateForm({ name: e.target.value }))}
      /><br />
      <input
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) => dispatch(updateForm({ email: e.target.value }))}
      /><br />
      <button onClick={onNext}>Next</button>
    </div>
  );
}

export default UserForm;
