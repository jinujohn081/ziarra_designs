import React from 'react';

const CartContents = () => {
  const cartProducts = [
    {
      productId: 1,
      name: 'T-shirt',
      size: 'M',
      color: 'Red',
      quantity: 1,
      price: 15,
      image: 'https://picsum.photos/200?random=1',
    },
    {
      productId: 2,
      name: 'Jeans',
      size: 'L',
      color: 'Orange',
      quantity: 2,
      price: 50,
      image: 'https://picsum.photos/200?random=2',
    },
    {
      productId: 3,
      name: 'Frock',
      size: 'M',
      color: 'Green',
      quantity: 2,
      price: 100,
      image: 'https://picsum.photos/200?random=3',
    },
    {
      productId: 4,
      name: 'Skirt',
      size: 'S',
      color: 'Blue',
      quantity: 10,
      price: 100,
      image: 'https://picsum.photos/200?random=4',
    },
    {
      productId: 5,
      name: 'T-shirt',
      size: 'S',
      color: 'Blue',
      quantity: 1,
      price: 100,
      image: 'https://picsum.photos/200?random=2',
    },
  ];
  return (
    <div>
      {cartProducts.map((product, index) => (
        <div key={index} className='flex p-4 border-b'>
          <div className='flex items-start mr-6 flex-col'>
            <img
              src={product.image}
              alt={product.name}
              className='w-20 h-24 object-cover rounded'
            />
          </div>
          <div>
            <h3>{product.name}</h3>
            <p>
              size : {product.size}|color :{product.color}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartContents;
