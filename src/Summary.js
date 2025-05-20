import { useContext } from "react";
import FormContext from "./FormContext";

function Summary({ onBack }) {
  const { formData } = useContext(FormContext);

  return (
    <div>
      <h2>Summary</h2>
      <p><strong>Name:</strong> {formData.name}</p>
      <p><strong>Email:</strong> {formData.email}</p>
      <p><strong>Address:</strong> {formData.address}</p>
      <p><strong>City:</strong> {formData.city}</p>
      <button onClick={onBack}>Back</button>
      <button onClick={() => alert("Form Submitted!")}>Submit</button>
    </div>
  );
}

export default Summary;
