import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faXTwitter,
  faFacebookF,
} from '@fortawesome/free-brands-svg-icons';

const Contacto: React.FC = () => (
  <section className="mx-auto px-4 mt-10 ml-20 mr-40">
    <div className="py-10 flex justify-between">
      <div style={{ flex: 1, marginRight: 20 }}>
        <p
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: '18px',
          }}
          className="text-red-600"
        >
          SOBRE NOSOTROS
        </p>
        <p
          className="text-gray-500 mt-3"
          style={{
            fontFamily: "'Calibri', sans-serif",
            fontSize: '14px',
            fontWeight: 'normal',
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus molestie
          rhoncus id nunc, porta leo tempus facilisi.
        </p>
      </div>
      <div style={{ flex: 1, marginRight: 20 }}>
        <p
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: '18px',
          }}
          className="text-red-600"
        >
          MI CUENTA
        </p>
        <ul
          style={{
            fontFamily: "'Calibri', sans-serif",
            fontSize: '16px',
            fontWeight: 'normal',
            listStyleType: 'none',
            paddingLeft: 0,
            marginLeft: 0,
            marginTop: '10px',
          }}
          className="ml-6 text-gray-500"
        >
          <li style={{ marginBottom: '5px' }}>Información Personal</li>
          <li style={{ marginBottom: '5px' }}>Direcciones</li>
          <li style={{ marginBottom: '5px' }}>Mascotas</li>
          <li style={{ marginBottom: '5px' }}>Órdenes</li>
          <li>Agenda</li>
        </ul>
      </div>
      <div style={{ flex: 1, marginRight: 20 }}>
        <p
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: '18px',
            marginBottom: '10px',
          }}
          className="text-red-600"
        >
          INFORMACIÓN
        </p>
        <ul
          style={{
            fontFamily: "'Calibri', sans-serif",
            fontSize: '16px',
            fontWeight: 'normal',
            listStyleType: 'none',
            paddingLeft: 0,
            marginLeft: 0,
            marginTop: '10px',
          }}
          className="ml-6 text-gray-500"
        >
          <li style={{ marginBottom: '5px' }}>Formulario de Contacto</li>
          <li style={{ marginBottom: '5px' }}>Preguntas Frecuentes</li>
          <li style={{ marginBottom: '5px' }}>Términos y Condiciones</li>
          <li>Política de Privacidad</li>
        </ul>
      </div>
      <div style={{ flex: 1 }}>
        <p
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: '18px',
            marginBottom: '10px',
          }}
          className="text-red-600"
        >
          ATENCIÓN AL CLIENTE
        </p>
        <ul
          style={{
            fontFamily: "'Calibri', sans-serif",
            fontSize: '16px',
            fontWeight: 'normal',
            listStyleType: 'none',
            paddingLeft: 0,
            marginLeft: 0,
            marginTop: '10px',
          }}
          className="ml-6 text-gray-500"
        >
          <li style={{ marginBottom: '5px' }}>
            Bello Monte Calle XXXX Local 1
          </li>
          <li style={{ marginBottom: '5px' }}>(0212) 575 54 12</li>
          <li style={{ marginBottom: '5px' }}>soporte@maxipet.com</li>
          <li style={{ marginBottom: '5px ' }}>Lunes a Viernes</li>
          <li>9:00 a.m. - 5:00 p.m.</li>
          <div className="flex mt-2">
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-gray-400 mr-3"
            />
            <FontAwesomeIcon icon={faXTwitter} className="text-gray-400 mr-3" />
            <FontAwesomeIcon icon={faFacebookF} className="text-gray-400" />
          </div>
        </ul>
      </div>
    </div>
  </section>
);

export default Contacto;
