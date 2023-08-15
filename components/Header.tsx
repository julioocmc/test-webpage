import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarkerAlt,
  faChevronDown,
  faSearch,
  faCartShopping,
  faCircleUser,
  faPaw,
} from '@fortawesome/free-solid-svg-icons';
import {
  faInstagram,
  faXTwitter,
  faFacebookF,
} from '@fortawesome/free-brands-svg-icons';
import Carousel from './Carousel';

const Header: React.FC = () => (
  <div>
    <header className="bg-red-600 h-6 flex items-center justify-between px-4 w-full">
      <div className="flex items-center space-x-4 ml-auto mr-10">
        <div className="flex items-center space-x-2">
          <FontAwesomeIcon
            icon={faMapMarkerAlt}
            className="text-white text-lg opacity-50"
          />
          <span
            style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '10pt' }}
            className="text-white"
          >
            Bello Monte
          </span>
          <FontAwesomeIcon icon={faChevronDown} className="text-white text-m" />
        </div>
        <div className="ml-4 space-x-2 flex items-center">
          <FontAwesomeIcon icon={faInstagram} className="text-white text-m" />
          <FontAwesomeIcon icon={faXTwitter} className="text-white text-m" />
          <FontAwesomeIcon icon={faFacebookF} className="text-white text-m" />
        </div>
      </div>
    </header>
    <div className="flex items-center justify-between px-4 py-2 bg-white">
      <div className="flex items-center ml-10">
        <img
          src="/maxiPetLogo.png"
          alt="Logo de la marca"
          className="w-50 h-20"
        />
      </div>
      <div className="flex items-center">
        <div className="relative w-60">
          <input
            style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '14' }}
            type="text"
            placeholder="Buscador"
            className="bg-transparent outline-none placeholder-gray-300 border rounded-md border-gray-300 px-2 py-1 pr-8 w-60"
          />
          <FontAwesomeIcon
            icon={faSearch}
            className="text-gray-300 absolute right-2 top-2"
          />
        </div>
      </div>
      <div className="flex items-center space-x-4 mr-20">
        <FontAwesomeIcon
          icon={faMapMarkerAlt}
          className="text-gray-500 text-lg"
        />
        <FontAwesomeIcon icon={faPaw} className="text-gray-500 text-lg" />{' '}
        <FontAwesomeIcon
          icon={faCircleUser}
          className="text-gray-500 text-lg"
        />
        <FontAwesomeIcon
          icon={faCartShopping}
          className="text-gray-500 text-lg"
        />
      </div>
    </div>
    <div className="flex items-center justify-between px-4 py-2 bg-white mt-0">
      <div className="flex items-center ml-20 w-full">
        <a
          href="#"
          style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '14pt' }}
          className="text-gray-500 flex-grow"
        >
          Inicio
        </a>
        <a
          href="#"
          style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '14pt' }}
          className="text-gray-500 flex-grow"
        >
          Comprar por Marca
        </a>
        <a
          href="#"
          style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '14pt' }}
          className="text-gray-500 flex-grow"
        >
          Comprar por Mascota
        </a>
        <a
          href="#"
          style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '14pt' }}
          className="text-gray-500 flex-grow"
        >
          Nuestros Servicios
        </a>
        <a
          href="#"
          style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '14pt' }}
          className="text-gray-500 flex-grow"
        >
          Promociones
        </a>
        <a
          href="#"
          style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '14pt' }}
          className="text-gray-500 flex-grow"
        >
          Nosotros
        </a>
      </div>
    </div>
    <Carousel />
  </div>
);

export default Header;
