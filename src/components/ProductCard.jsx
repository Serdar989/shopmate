import './ProductCard.css';
import { useCart } from '../context/CartContext';
import { useEffect, useState } from 'react';

export const ProductCard = ({ product }) => {
  const { addToCart, cartList, removeFromCart } = useCart();
  const [isInCart, setIsInCart] = useState(false);
  const { price, image, name, id } = product;
  console.log('cart list je ' + JSON.stringify(cartList));

  useEffect(() => {
    const productIsInCart = cartList.find((cartItem) => cartItem.id === id);
    console.log('jel u korpi ' + JSON.stringify(productIsInCart));
    if (productIsInCart) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [cartList, id]);

  return (
    <div className='productCard'>
      <img src={image} alt={name} />
      <p className='name'>{name}</p>
      <div className='action'>
        <p>${price}</p>
        {isInCart ? (
          <button className='remove' onClick={() => removeFromCart(product)}>
            Remove
          </button>
        ) : (
          <button onClick={() => addToCart(product)}>Add to cart</button>
        )}
      </div>
    </div>
  );
};
