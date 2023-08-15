import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDog, faBone } from '@fortawesome/free-solid-svg-icons';

const Footer: React.FC = () => (
  <footer>
    <div className=" flex justify-between bg-white ml-20 mr-20 mb-0">
      <div className="p-2">
        <FontAwesomeIcon
          icon={faDog}
          color="red"
          size="3x"
          className="text-red-600"
        />
      </div>
      <div className="p-2">
        <FontAwesomeIcon
          icon={faBone}
          color="red"
          size="3x"
          className="text-red-600"
        />
      </div>
    </div>
    <div
      className="flex justify-center items-center h-full bg-red-600 text-white mt-0"
      style={{ fontFamily: "'Calibri', sans-serif", fontSize: '14px' }}
    >
      Copyright © 2023 Maxi Pet. Todos los Derechos Reservados. Desarrollado por
      Julio Mijares.
    </div>
  </footer>
);

export default Footer;
