import React, { useEffect, useState } from 'react';
import styles from './Checkout.module.css';
import { LoadingIcon } from './Icons';
import { getProducts } from './dataService'; // Asegúrate de descomentar esta línea

const Product = ({ id, name, availableCount, price, orderedQuantity, onAdd, onRemove, total }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{availableCount}</td>
      <td>${price.toFixed(2)}</td>
      <td>{orderedQuantity}</td>
      <td>${total.toFixed(2)}</td>
      <td>
        <button 
          className={styles.actionButton} 
          onClick={onAdd} 
          disabled={orderedQuantity >= availableCount}
        >
          +
        </button>
        <button 
          className={styles.actionButton} 
          onClick={onRemove} 
          disabled={orderedQuantity <= 0}
        >
          -
        </button>
      </td>
    </tr>
  );
};

const Checkout = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    const loadProducts = async () => {
      const productsData = await getProducts();
      setProducts(productsData.map(product => ({
        ...product,
        orderedQuantity: 0,
        total: 0
      })));
      setLoading(false);
    };
    
    loadProducts();
  }, []);

  const handleAdd = (index) => {
    setProducts(products => {
      const newProducts = [...products];
      if (newProducts[index].orderedQuantity < newProducts[index].availableCount) {
        newProducts[index].orderedQuantity++;
        newProducts[index].total = newProducts[index].orderedQuantity * newProducts[index].price;
      }
      return newProducts;
    });
  };

  const handleRemove = (index) => {
    setProducts(products => {
      const newProducts = [...products];
      if (newProducts[index].orderedQuantity > 0) {
        newProducts[index].orderedQuantity--;
        newProducts[index].total = newProducts[index].orderedQuantity * newProducts[index].price;
      }
      return newProducts;
    });
  };

  const orderTotal = products.reduce((acc, product) => acc + product.total, 0);
  const discountAmount = orderTotal > 1000 ? orderTotal * 0.1 : 0;
  const finalTotal = orderTotal - discountAmount;

  return (
    <div>
      <header className={styles.header}>        
        <h1>Electro World</h1>        
      </header>
      <main>
        {loading ? <LoadingIcon /> : (
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Product ID</th>
                <th>Product Name</th>
                <th># Available</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <Product
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  availableCount={product.availableCount}
                  price={product.price}
                  orderedQuantity={product.orderedQuantity}
                  total={product.total}
                  onAdd={() => handleAdd(index)}
                  onRemove={() => handleRemove(index)}
                />
              ))}
            </tbody>
          </table>
        )}
        <h2>Order summary</h2>
        {discountAmount > 0 && <p>Discount: ${discountAmount.toFixed(2)}</p>}
        <p>Total: ${finalTotal.toFixed(2)}</p>       
      </main>
    </div>
  );
};

export default Checkout;
