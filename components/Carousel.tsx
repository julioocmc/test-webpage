import React, { useState, useEffect } from 'react';

const Carousel: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = ['/car1.jpg', '/car2.jpg', '/car3.jpg', '/car4.jpg'];

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000); // Cambia de imagen cada 5 segundos

    return () => clearTimeout(timer);
  }, [currentImage]);

  return (
    <div className="relative overflow-hidden h-[580px]">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Imagen ${index + 1}`}
          className={`absolute top-0 left-0 transition-opacity duration-1000 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
        />
      ))}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-12 h-1 bg-gray-500 ${
              index === currentImage ? 'bg-red-500' : ''
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
