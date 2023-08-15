import React from 'react';

const Marcas: React.FC = () => (
  <section className="max-w-screen-xl mx-auto px-4 mt-10">
    <div className="py-10">
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
          TRABAJAMOS CON LAS MEJORES MARCAS
        </p>
        <br />
      </div>
      <div className="flex mt-6">
        <div className="w-200 h-40 p-2 tezt-gray-800">
          <p style={{ fontFamily: "'Calibri', sans-serif", fontSize: '16pt' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In velit ut
            viverra fames sed.
          </p>
        </div>
        <div className="flex space-x-2">
          <img
            src="https://www.1stchoice.ca/static/img/responsive/logo-header.44a6f6cf3853.png"
            alt="Marca"
            width="280"
            height="80"
          />
          <img
            src="https://www.1stchoice.ca/static/img/responsive/logo-header.44a6f6cf3853.png"
            alt="Marca"
            width="280"
            height="80"
          />
          <img
            src="https://www.1stchoice.ca/static/img/responsive/logo-header.44a6f6cf3853.png"
            alt="Marca"
            width="280"
            height="80"
          />
          <img
            src="https://www.1stchoice.ca/static/img/responsive/logo-header.44a6f6cf3853.png"
            alt="Marca"
            width="280"
            height="80"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Marcas;
