import { useSelector, useDispatch } from 'react-redux';
import { updateForm } from './store';

function AddressForm({ onNext, onBack }) {
  const form = useSelector((state) => state.form);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Address Info</h2>
      <input
        type="text"
        placeholder="Address"
        value={form.address}
        onChange={(e) => dispatch(updateForm({ address: e.target.value }))}
      /><br />
      <input
        type="text"
        placeholder="City"
        value={form.city}
        onChange={(e) => dispatch(updateForm({ city: e.target.value }))}
      /><br />
      <button onClick={onBack}>Back</button>
      <button onClick={onNext}>Next</button>
    </div>
  );
}

export default AddressForm;
