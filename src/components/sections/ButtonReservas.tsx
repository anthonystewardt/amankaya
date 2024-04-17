"use client";
import React from 'react';
import { Button } from "@nextui-org/react";
import { Big_Shoulders_Inline_Display } from "next/font/google";
import Link from 'next/link';


const font = Big_Shoulders_Inline_Display({ subsets: ["latin"] });
const ButtonReservas = () => {
  return (
    <div className="flex gap-4 lg:gap-10 flex-col md:flex-row justify-center ">
      <div className="flex flex-col items-center mt-5">
        <Link
          href="https://api.whatsapp.com/send?phone=51936354615&text=%C2%A1Hola!+Quisiera+hacer+una+reserva"
          target="_blank"
        >
          <Button
            className="text-zinc-900 bg-slate-100 font-bold rounded-md text-2xl  "
            fullWidth
            size="lg"
          >
            RESERVAS
          </Button>
        </Link>

        {/* <ButtonEffect
            color="green"
            path="https://api.whatsapp.com/send?phone=51936354615&text=%C2%A1Hola+Amankaya!"
            title="WhatsApp"
          /> */}
      </div>
      <div className="flex flex-col items-center mt-5">
        <Link
          href="https://api.whatsapp.com/send?phone=51936354615&text=%C2%A1Hola!+Quisiera+realizar+un+pedido"
          target="_blank"
        >
          <Button
            size="lg"
            className="text-zinc-900 bg-slate-100  font-bold rounded-md text-2xl  "
            fullWidth
          >
            DELIVERY
          </Button>
        </Link>
        {/* <ButtonEffect
          color=".blue"
          path="https://api.whatsapp.com/send?phone=51936354615&text=%C2%A1Hola!+Quisiera+realizar+un+pedido"
          title="Realizar Pedido"
        /> */}
      </div>
    </div>
  );
}

export default ButtonReservas;
