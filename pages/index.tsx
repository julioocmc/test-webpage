import React from 'react';
import Header from '../components/Header';
import Categorias from '../components/Categorias';
import ProductosDestacados from '../components/ProductosDestacados';
import Imagenes from '../components/imagenes';
import ProductosPopulares from '../components/ProductosPopulares';
import Imagen from '../components/imagen';
import UltimosProductos from '../components/UltimosProductos';
import NuestrosServicios from '../components/NuestrosServicios';
import Marcas from '../components/Marcas';
import Contacto from '../components/Contacto';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Header />
      <Categorias />
      <ProductosDestacados />
      <Imagenes />
      <ProductosPopulares />
      <Imagen />
      <UltimosProductos />
      <NuestrosServicios />
      <Marcas />
      <Contacto />
      <Footer />
    </div>
  );
}

export default HomePage;
