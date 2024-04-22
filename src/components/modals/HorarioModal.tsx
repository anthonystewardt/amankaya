"use client";
import React, { useState } from "react";
import { ButtonPrimary } from "../buttons/ButtonPrimary";
import { FaInstagram, FaSquareFacebook, FaTiktok } from "react-icons/fa6";
import PrimaryModal from "../modals/PrimaryModal";
// import { Button } from "@nextui-org/react";
// import {
//   Modal,
//   ModalContent,
//   ModalHeader,
//   ModalBody,
//   ModalFooter,
//   useDisclosure,
// } from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";
import horario from "../../../public/HORARIOS.jpg"

const HorarioModal = () => {
  // const [showCarta, setShowCarta] = useState(false);
  // const [showHorario, setShowHorario] = useState(false);
  // const { isOpen, onOpen, onOpenChange } = useDisclosure();

  // const showModal = () => {
  //   setShowCarta(true);
  // };

  return (
    <>
      {/* <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col items-center gap-1">
                Horario
              </ModalHeader>
              <ModalBody>
                <Image
                  alt="Imagen de los horarios de Amankaya"
                  src={horario}
                  height={500}
                  width={500}
                  className="w-full min-h-[500px] object-cover rounded-lg h-full"
                />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal> */}

      <button>HORARIO</button>

      {/* <Button
        color="primary"
        variant="bordered"
        className="border-2 border-slate-950 text-zinc-900 font-semibold"
        onPress={onOpen}
      >
        HORARIO
      </Button> */}
    </>
  );
};

export default HorarioModal;
