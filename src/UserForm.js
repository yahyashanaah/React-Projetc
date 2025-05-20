// UserForm.js
import { useContext } from "react";
import FormContext from "./FormContext";

function UserForm({ onNext }) {
  const { formData, updateFormData } = useContext(FormContext);

  return (
    <div>
      <h2>User Info</h2>
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => updateFormData({ name: e.target.value })}
      />
      <br />
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => updateFormData({ email: e.target.value })}
      />
      <br />
      <button onClick={onNext}>Next</button>
    </div>
  );
}

export default UserForm;
