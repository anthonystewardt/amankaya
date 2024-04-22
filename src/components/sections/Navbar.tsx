"use client";
import React, { useState } from 'react';
import { ButtonPrimary } from '../buttons/ButtonPrimary';
import { FaInstagram, FaSquareFacebook, FaTiktok } from 'react-icons/fa6';
import PrimaryModal from '../modals/PrimaryModal';
import { Button } from "flowbite-react";
// import { Button } from "@nextui-org/react";
// import {
//   Modal,
//   ModalContent,
//   ModalHeader,
//   ModalBody,
//   ModalFooter,
//   useDisclosure,
// } from "@nextui-org/react";
import Link from 'next/link';
import HorarioModal from '../modals/HorarioModal';
import SimpleModal from '../modals/SimpleModal';
import Image from "next/image";
import horarioImage from "../../../public/HORARIOS.jpg"


export const Navbar = () => {
  const [showCarta, setShowCarta] = useState(false);
  const [showHorario, setShowHorario] = useState(false);
  // const { isOpen, onOpen, onOpenChange } = useDisclosure();


  const showModal = () => {
    setShowCarta(true)
  }

  return (
    <>
      {showCarta && (
        <SimpleModal>
          <div className="flex justify-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6  cursor-pointer hover:text-slate-950"
              onClick={() => setShowCarta(false)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </div>

          <div className="w-full flex flex-col items-center">
            <h1 className="text-2xl font-bold">Carta</h1>
            <div className="w-full mt-4 ">
              <Link
                href="https://drive.google.com/file/d/1H1xx9vOR71ETiEbUpFixjBt_BZJIqWqH/view"
                target="_blank"
                className="w-full block text-center px-3 py-2 rounded-lg bg-slate-950 font-semibold text-white"
              >
                Bar
              </Link>
            </div>
            <div className="w-full mt-2 ">
              <Link
                href="https://drive.google.com/file/d/1BLta4_lOtZXMQcdZzCSYxZy_fDKHhkid/view"
                target="_blank"
                className="w-full block text-center px-3 py-2 rounded-lg bg-slate-950 font-semibold text-white"
              >
                Almuerzo
              </Link>
            </div>
            <div className="w-full mt-2">
              <Link
                href="https://drive.google.com/file/d/1OkXhOKLjHa1e2dZG4Rtjm3jN6KoqgbRD/view"
                target="_blank"
                className="w-full block text-center px-3 py-2 rounded-lg bg-slate-950 font-semibold text-white"
              >
                Cena
              </Link>
            </div>
          </div>
        </SimpleModal>
      )}

      {showHorario && (
        <SimpleModal>
          <div className="flex justify-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6  cursor-pointer hover:text-slate-950"
              onClick={() => setShowHorario(false)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </div>

          <div className="w-full flex flex-col items-center">
            <Image
              alt="Imagen de los horarios de Amankaya"
              src={horarioImage}
              height={500}
              width={500}
              className="w-full h-[85vh] object-cover rounded-lg"
            />
          </div>
        </SimpleModal>
      )}

     

      <div className="flex justify-between lg:py-20 py-6 lg:px-24 px-6 bg-white items-center ">
        <div className="flex items-center gap-3">
          <Button
            className="bg-slate-950 hover:bg-slate-950/75 transition ease text-white font-semibold px-3"
            onClick={() => setShowCarta(true)}
          >
            CARTA
          </Button>
          <Button
            className="border-2 border-slate-950 text-slate-950 hover:bg-slate-950/75 transition ease hover:text-white font-semibold px-3"
            onClick={() => setShowHorario(true)}
          >
            CARTA
          </Button>
        </div>
        <div className="">
          <ul className="flex lg:gap-5 gap-3 items-center ">
            <Link href="https://www.facebook.com/amankayalima" target="_blank">
              <FaSquareFacebook className="w-6 h-6" />
            </Link>
            <Link
              href="https://www.instagram.com/amankayaperu/"
              target="_blank"
            >
              <FaInstagram className="w-6 h-6" />
            </Link>
            <Link href="https://www.tiktok.com/@amankayaperu" target="_blank">
              <FaTiktok className="w-6 h-6" />
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}
