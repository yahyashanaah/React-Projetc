import React, { useState } from 'react';

function ProductForm() {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    category: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!product.name || !product.price || !product.category) {
      setError('All fields are required!');
      return;
    }

    if (isNaN(product.price)) {
      setError('Price must be a number!');
      return;
    }

    // If valid
    setError('');
    alert(`Product Added: ${product.name}, $${product.price}, ${product.category}`);
    setProduct({ name: '', price: '', category: '' }); // reset form
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={product.name}
          placeholder="Product Name"
          onChange={handleChange}
        />
        <br /><br />
        <input
          name="price"
          value={product.price}
          placeholder="Price"
          onChange={handleChange}
        />
        <br /><br />
        <input
          name="category"
          value={product.category}
          placeholder="Category"
          onChange={handleChange}
        />
        <br /><br />
        <button type="submit">Add Product</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default ProductForm;
