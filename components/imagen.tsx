import React from 'react';

const Imagen: React.FC = () => (
  <div
    style={{
      maxWidth: '1248px',
      width: '100%',
      margin: '0 auto',
    }}
  >
    <img
      src="https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      alt="Imagen Simple"
      style={{
        width: '1248px',
        height: '293px',
        objectFit: 'cover',
      }}
    />
  </div>
);

export default Imagen;
