"use client";
import React from 'react';

const Local = () => {
   const latitud = -12.127374189586968;
   const longitud = -77.02833684203696;
  return (
    <div className='w-full flex justify-center'>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.774532530903!2d-77.03115852592141!3d-12.127573488115559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c6ff5307060d%3A0x202dd461fed7d93f!2sAmankaya%20-%20Peruvian%20Food!5e0!3m2!1ses-419!2spe!4v1713226391311!5m2!1ses-419!2spe"
        width="600"
        height="450"
        style={{ border: '0' }}
        className='w-full rounded-xl'
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Local;
