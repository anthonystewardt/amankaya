import Image from "next/image";
import logoLocal from "../../public/local.png"
import chef from "../../public/CHEF.png"
import amankaya from "../../public/amankaya_name.png"
import { ButtonEffect, CardQoute } from "@/components";
import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";

import Local from "@/components/map/Local";
import Footer from "@/components/footer/Footer";
import ButtonReservas from "@/components/sections/ButtonReservas";


// AIzaSyCU3UjQABVbTkwPcl6CUNZZpe7v4uRiGt8
export const metadata: Metadata = {
  title: "Amankaya | Restaurante de comida peruana en el centro de Miraflores",
  description:
    "Restaurante de comida peruana ubicado en la Quinta Bustos, en el centro de Miraflores, Lima. Nuestra carta fue elaborada por el Chef Gabriel Osorio teniendo en cuenta el manejo de insumos sostenibles y de temporada, con el alma de nuestra cocina ancestral y creatividad transgresora.",
};
export default function Home() {
  return (
    <main className=" min-h-screen  relative transition-all ease">
      <div className="">
        <Navbar />
        <section className="flex justify-center mt-5 lg:mt-2 items-center">
          <Image
            src={logoLocal}
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </section>
        <div className="">
          <ButtonReservas />
        </div>

        <div className="mt-10 lg:mt-0 ">
          <div className="md:mt-44 mt-20 mx-auto flex justify-center ">
            <div className="flex md:justify-center flex-col md:flex-row md:gap-10 gap-3 ">
              <div className="h-[550px] lg:mb-10 ">
                <Image
                  src={chef}
                  alt="Picture of the author"
                  width={400}
                  height={450}
                  className="object-cover md:w-full rounded-lg h-full  md:h-full"
                />
              </div>
              <div className="flex flex-col md:w-1/2 ">
                <div className="flex-grow">
                  <CardQoute
                    author="Gabriel Osorio"
                    isBlack
                    quote="“En Amankaya, nuestra pasión es llevar a cada plato el alma vibrante de la cocina peruana, uniendo tradición e innovación en cada bocado.”"
                  />
                </div>
                <div className="flex-grow rounded-lg  flex justify-center">
                  <Image
                    src={amankaya}
                    alt="Picture of the restaurant"
                    width={400}
                    height={450}
                    className="object-cover h-[100px] md:h-full rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 lg:mt-32">
          {/* <h1 className="text-4xl font-semibold text-center mb-4">¿Cómo Llegar?</h1> */}
          <Local />
        </div>
        <section className="px-5 md:px-10 lg:px-20">
          <Footer />
        </section>
      </div>
    </main>
  );
}
