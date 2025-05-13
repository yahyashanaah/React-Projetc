import React, { useState } from 'react';

function ShowHideDetails() {
  const [show, setShow] = useState(false);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Product Info</h2>
      <button onClick={() => setShow(!show)}>
        {show ? 'Hide' : 'Show'} Details
      </button>

      {show && (
        <div style={{ marginTop: '10px' }}>
          <p><strong>Product:</strong> React T-shirt</p>
          <p><strong>Price:</strong> $19.99</p>
        </div>
      )}
    </div>
  );
}

export default ShowHideDetails;
