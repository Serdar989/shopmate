import './CartCard.css';
export const CartCard = ({ product }) => {
  const { name, image, price } = product;

  return (
    <div className='cartCard'>
      <img src={image} alt={name} />
      <p className='productName'>{name}</p>
      <p className='productPrice'>${price}</p>
      <button>Remove</button>
    </div>
  );
};
