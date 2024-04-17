import React from 'react';

interface Prop  {
  quote: string;
  author: string;
  isBlack?: boolean;
}


export const CardQoute = ({quote, author, isBlack}: Prop) => {
  return (
    <div
      className={`p-3 lg:px-6 lg:py-8  h-full rounded-lg ${
        isBlack ? "bg-slate-950 text-white py-5" : "bg-white"
      }`}
    >
      <h2
        className={` text-center  md:text-4xl text-3xl font-bold ${
          isBlack ? "text-white/85" : "text-slate-950"
        }`}
      >
        Chef {author}
      </h2>
      {/* <span className='text-xs font-semibold text-slate-200/70 pl-2'>Chef Gabriel Osorio</span> */}
      <p
        className={` md:text-2xl text-1xl mt-3 text-center block ${
          isBlack
            ? "text-white text-opacity-65   "
            : "text-black text-opacity-95 "
        }`}
      >
        La carta de Amankaya fue elaborada por Gabriel Osorio teniendo en cuenta
        el manejo de insumos sostenibles y de temporada, con el alma de nuestra
        cocina ancestral y creatividad transgresora.
      </p>
      <p className="block mt-5 md:text-2xl text-center text-white text-opacity-65">
        La fiesta de Amankaya se celebra el 24 de junio pero, ¡aquí la podemos
        vivir todos los días!
      </p>
    </div>
  );
}
