import React from 'react';

const Categorias: React.FC = () => (
  <section className="max-w-screen-xl mx-auto px-4 mt-20 mb-10">
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
            UNA GRAN VARIEDAD DE CATEGORÍAS
          </p>
        </div>
      </div>
      <div className="flex items-start justify-between space-x-6 max-w-1160 -mx-2 mt-10">
        <div className="flex flex-col items-center">
          <a href="#">
            <img
              src="https://previews.123rf.com/images/sararoom/sararoom1303/sararoom130300036/18344736-vector-illustration-of-cartoon-dog.jpg"
              alt="Categoría 1"
              className="w-40 h-40 object-contain"
            />
          </a>
          <p
            style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '16' }}
            className="mt-5"
          >
            Perros
          </p>
        </div>
        <div className="flex flex-col items-center">
          <a href="#">
            <img
              src="https://www.creativefabrica.com/wp-content/uploads/2021/10/18/Comic-Cartoon-Cat-Sticker-17-Graphics-18955507-1-1-580x387.jpg"
              alt="Categoría 2"
              className="w-40 h-40 object-contain"
            />
          </a>
          <p
            style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '16' }}
            className="mt-5"
          >
            Gatos
          </p>
        </div>
        <div className="flex flex-col items-center">
          <a href="#">
            <img
              src="https://cdn.pixabay.com/photo/2022/12/27/18/47/fish-7681579_1280.png"
              alt="Categoría 3"
              className="w-40 h-40 object-contain"
            />
          </a>
          <p
            style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '16' }}
            className="mt-5"
          >
            Peces
          </p>
        </div>
        <div className="flex flex-col items-center">
          <a href="#">
            <img
              src="https://st.depositphotos.com/1967477/2538/v/950/depositphotos_25387027-stock-illustration-squirrel-cartoon-with-nut.jpg"
              alt="Categoría 4"
              className="w-40 h-40 object-contain"
            />
          </a>
          <p
            style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '16' }}
            className="mt-5"
          >
            Roedores
          </p>
        </div>
        <div className="flex flex-col items-center">
          <a href="#">
            <img
              src="https://as1.ftcdn.net/v2/jpg/01/29/66/86/1000_F_129668648_MuSFfIZZW2WXTgCx0euNOBMCgoe9l2hx.jpg"
              alt="Categoría 5"
              className="w-40 h-40 object-contain"
            />
          </a>
          <p
            style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '16' }}
            className="mt-5"
          >
            Reptiles
          </p>
        </div>
        <div className="flex flex-col items-center">
          <a href="#">
            <img
              src="https://as1.ftcdn.net/v2/jpg/02/78/40/40/1000_F_278404007_tPceNA7A6sxNfagiBcZEQKZY8UU7B3Vv.jpg"
              alt="Categoría 6"
              className="w-40 h-40 object-contain"
            />
          </a>
          <p
            style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '16' }}
            className="mt-5"
          >
            Hámsters
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Categorias;
