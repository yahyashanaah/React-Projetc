import { useContext } from "react";
import FormContext from "./FormContext";

function AddressForm({ onNext, onBack }) {
  const { formData, updateFormData } = useContext(FormContext);

  return (
    <div>
      <h2>Address Info</h2>
      <input
        type="text"
        placeholder="Address"
        value={formData.address}
        onChange={(e) => updateFormData({ address: e.target.value })}
      />
      <br />
      <input
        type="text"
        placeholder="City"
        value={formData.city}
        onChange={(e) => updateFormData({ city: e.target.value })}
      />
      <br />
      <button onClick={onBack}>Back</button>
      <button onClick={onNext}>Next</button>
    </div>
  );
}

export default AddressForm;
