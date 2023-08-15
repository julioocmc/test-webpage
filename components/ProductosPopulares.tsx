import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw, faCartShopping } from '@fortawesome/free-solid-svg-icons';

const ProductosPopulares: React.FC = () => (
  <section className="max-w-screen-xl mx-auto px-4 mt-10">
    <div className="py-10">
      <div className="grid grid-cols-2 gap-8">
        <div className="flex flex-col">
          <p
            style={{ fontFamily: "'Calibri', sans-serif", fontSize: '14pt' }}
            className="text-gray-500"
          >
            Lorem ipsum dolor sit amet.
          </p>
          <p
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '20pt',
              fontWeight: 'bold',
            }}
            className="text-red-600"
          >
            PRODUCTOS POPULARES
          </p>
        </div>
      </div>
      <div className="mt-6">
        <div className="grid grid-cols-5 gap-6">
          <a href="#">
            <div className="flex flex-col items-left">
              <img
                src="https://despensallena.com/mainsite/wp-content/uploads/2023/01/Perrarina-Pedigree-44lb.jpg"
                alt="Producto Destacado"
                className="object-cover"
                style={{ width: '200px', height: '247px' }}
              />
              <p
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '14',
                }}
                className="mt-2 text-gray-500"
              >
                Producto 1
              </p>
              <div className="flex mt-1 text-yellow-400">
                <FontAwesomeIcon icon={faPaw} opacity={1} />
                <FontAwesomeIcon icon={faPaw} opacity={1} />
                <FontAwesomeIcon icon={faPaw} opacity={1} />
                <FontAwesomeIcon icon={faPaw} opacity={0.3} />
                <FontAwesomeIcon icon={faPaw} opacity={0.3} />
              </div>
              <p
                style={{
                  fontFamily: "'Work Sans', sans-serif",
                  fontSize: '14',
                }}
                className="mt-2 text-gray-400"
              >
                $9,99
              </p>
              <button
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '12pt',
                }}
                className="mt-2 bg-red-700 text-white px-1  rounded"
              >
                <FontAwesomeIcon icon={faCartShopping} /> Agregar
              </button>
            </div>
          </a>
          <a href="#">
            <div className="flex flex-col items-left">
              <img
                src="https://despensallena.com/mainsite/wp-content/uploads/2023/01/Perrarina-Pedigree-44lb.jpg"
                alt="Producto Destacado"
                className="object-cover"
                style={{ width: '200px', height: '247px' }}
              />
              <p
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '14',
                }}
                className="mt-2 text-gray-500"
              >
                Producto 2
              </p>
              <div className="flex mt-1 text-yellow-400">
                <FontAwesomeIcon icon={faPaw} opacity={1} />
                <FontAwesomeIcon icon={faPaw} opacity={1} />
                <FontAwesomeIcon icon={faPaw} opacity={1} />
                <FontAwesomeIcon icon={faPaw} opacity={0.3} />
                <FontAwesomeIcon icon={faPaw} opacity={0.3} />
              </div>
              <p
                style={{
                  fontFamily: "'Work Sans', sans-serif",
                  fontSize: '14',
                }}
                className="mt-2 text-gray-400"
              >
                $9,99
              </p>
              <button
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '12pt',
                }}
                className="mt-2 bg-red-700 text-white px-1  rounded"
              >
                <FontAwesomeIcon icon={faCartShopping} /> Agregar
              </button>
            </div>
          </a>

          <a href="#">
            <div className="flex flex-col items-left">
              <img
                src="https://despensallena.com/mainsite/wp-content/uploads/2023/01/Perrarina-Pedigree-44lb.jpg"
                alt="Producto Destacado"
                className="object-cover"
                style={{ width: '200px', height: '247px' }}
              />
              <p
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '14',
                }}
                className="mt-2 text-gray-500"
              >
                Producto 3
              </p>
              <div className="flex mt-1 text-yellow-400">
                <FontAwesomeIcon icon={faPaw} opacity={1} />
                <FontAwesomeIcon icon={faPaw} opacity={1} />
                <FontAwesomeIcon icon={faPaw} opacity={1} />
                <FontAwesomeIcon icon={faPaw} opacity={0.3} />
                <FontAwesomeIcon icon={faPaw} opacity={0.3} />
              </div>
              <p
                style={{
                  fontFamily: "'Work Sans', sans-serif",
                  fontSize: '14',
                }}
                className="mt-2 text-gray-400"
              >
                $9,99
              </p>
              <button
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '12pt',
                }}
                className="mt-2 bg-red-700 text-white px-1  rounded"
              >
                <FontAwesomeIcon icon={faCartShopping} /> Agregar
              </button>
            </div>
          </a>

          <a href="#">
            <div className="flex flex-col items-left">
              <img
                src="https://despensallena.com/mainsite/wp-content/uploads/2023/01/Perrarina-Pedigree-44lb.jpg"
                alt="Producto Destacado"
                className="object-cover"
                style={{ width: '200px', height: '247px' }}
              />
              <p
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '14',
                }}
                className="mt-2 text-gray-500"
              >
                Producto 4
              </p>
              <div className="flex mt-1 text-yellow-400">
                <FontAwesomeIcon icon={faPaw} opacity={1} />
                <FontAwesomeIcon icon={faPaw} opacity={1} />
                <FontAwesomeIcon icon={faPaw} opacity={1} />
                <FontAwesomeIcon icon={faPaw} opacity={0.3} />
                <FontAwesomeIcon icon={faPaw} opacity={0.3} />
              </div>
              <p
                style={{
                  fontFamily: "'Work Sans', sans-serif",
                  fontSize: '14',
                }}
                className="mt-2 text-gray-400"
              >
                $9,99
              </p>
              <button
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '12pt',
                }}
                className="mt-2 bg-red-700 text-white px-1  rounded"
              >
                <FontAwesomeIcon icon={faCartShopping} /> Agregar
              </button>
            </div>
          </a>
          <a href="#">
            <div className="flex flex-col items-left">
              <img
                src="https://despensallena.com/mainsite/wp-content/uploads/2023/01/Perrarina-Pedigree-44lb.jpg"
                alt="Producto Destacado"
                className="object-cover"
                style={{ width: '200px', height: '247px' }}
              />
              <p
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '14',
                }}
                className="mt-2 text-gray-500"
              >
                Producto 5
              </p>
              <div className="flex mt-1 text-yellow-400">
                <FontAwesomeIcon icon={faPaw} opacity={1} />
                <FontAwesomeIcon icon={faPaw} opacity={1} />
                <FontAwesomeIcon icon={faPaw} opacity={1} />
                <FontAwesomeIcon icon={faPaw} opacity={0.3} />
                <FontAwesomeIcon icon={faPaw} opacity={0.3} />
              </div>
              <p
                style={{
                  fontFamily: "'Work Sans', sans-serif",
                  fontSize: '14',
                }}
                className="mt-2 text-gray-400"
              >
                $9,99
              </p>
              <button
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '12pt',
                }}
                className="mt-2 bg-red-700 text-white px-1  rounded"
              >
                <FontAwesomeIcon icon={faCartShopping} /> Agregar
              </button>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default ProductosPopulares;
