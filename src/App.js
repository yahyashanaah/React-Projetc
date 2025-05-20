import React, { useState } from 'react';
import UserForm from './UserForm';
import AddressForm from './AddressForm';
import Summary from './Summary';

function App() {
  const [step, setStep] = useState(1);

  return (
    <div style={{ padding: '20px' }}>
      {step === 1 && <UserForm onNext={() => setStep(2)} />}
      {step === 2 && <AddressForm onNext={() => setStep(3)} onBack={() => setStep(1)} />}
      {step === 3 && <Summary onBack={() => setStep(2)} />}
    </div>
  );
}

export default App;
