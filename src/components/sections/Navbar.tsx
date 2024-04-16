"use client";
import React, { useState } from 'react';
import { ButtonPrimary } from '../buttons/ButtonPrimary';
import { FaInstagram, FaSquareFacebook, FaTiktok } from 'react-icons/fa6';
import PrimaryModal from '../modals/PrimaryModal';
import { Button } from "@nextui-org/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import Link from 'next/link';
import HorarioModal from '../modals/HorarioModal';


export const Navbar = () => {
  const [showCarta, setShowCarta] = useState(false);
  const [showHorario, setShowHorario] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();


  const showModal = () => {
    setShowCarta(true)
  }

  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} className='pb-5'>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col items-center gap-1">
                Carta
              </ModalHeader>
              <ModalBody>
                <Link
                  href="https://drive.google.com/file/d/1H1xx9vOR71ETiEbUpFixjBt_BZJIqWqH/view"
                  target="_blank"
                >
                  <Button
                    color="default"
                    className="bg-slate-950 text-white font-semibold"
                    onPress={onOpen}
                    fullWidth
                  >
                    Bar
                  </Button>
                </Link>
                <Link
                  href="https://drive.google.com/file/d/1BLta4_lOtZXMQcdZzCSYxZy_fDKHhkid/view"
                  target="_blank"
                >
                  <Button
                    color="default"
                    className="bg-slate-950 text-white font-semibold"
                    onPress={onOpen}
                    fullWidth
                  >
                    Almuerzos
                  </Button>
                </Link>
                <Link
                  href="https://drive.google.com/file/d/1OkXhOKLjHa1e2dZG4Rtjm3jN6KoqgbRD/view"
                  target="_blank"
                >
                  <Button
                    color="default"
                    className="bg-slate-950 text-white font-semibold"
                    onPress={onOpen}
                    fullWidth
                  >
                    Cena
                  </Button>
                </Link>
              </ModalBody>
             
            </>
          )}
        </ModalContent>
      </Modal>

      <div className="flex justify-between  bg-white items-center ">
        <div className="flex items-center gap-3">
          {/* <ButtonPrimary action={showModal} title="CARTA" link="https://www.google.com" /> */}
          <Button
            color="default"
            className="bg-slate-950 text-white font-semibold"
            onPress={onOpen}
          >
            CARTA
          </Button>

          <HorarioModal />
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
            <Link href="https://www.tiktok.com/@amankayaper" target="_blank">
              <FaTiktok className="w-6 h-6" />
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}
