"use client";
import React from 'react';


interface Props {
  children: React.ReactNode;
}

const SimpleModal = ({children}: Props) => {
  return (
    <div className="w-screen z-50 h-screen fixed bg-slate-500/25  flex justify-center items-center">
      <div className="px-5 py-10 bg-white rounded-lg border-3  min-w-[400px] border-blue-500 ">
        {children}
      </div>
    </div>
  );
}

export default SimpleModal;
