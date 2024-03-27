import Link from 'next/link';
import React from 'react';

interface Prop {
  title: string;
  link?: string;
  action: () => void;
}

export const ButtonPrimary = ({title, link, action}: Prop) => {
  return (
    <button className='bg-slate-950 font-semibold text-white px-3 py-2 rounded-md hover:bg-white hover:text-slate-950 hover:border-2 hover:border-slate-950 transition-all ease' onClick={() => action()}>
      {title}
    </button>
  );
}
