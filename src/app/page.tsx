import Image from "next/image";
import logoLocal from "../../public/local.png"
import chef from "../../public/CHEF.png"
import amankaya from "../../public/amankaya_name.png"
import { ButtonEffect, CardQoute } from "@/components";
import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Big_Shoulders_Inline_Display } from "next/font/google"
import Local from "@/components/map/Local";
import Footer from "@/components/footer/Footer";

const font = Big_Shoulders_Inline_Display({ subsets: ["latin"]});
// AIzaSyCU3UjQABVbTkwPcl6CUNZZpe7v4uRiGt8
export const metadata: Metadata = {
 title: 'Amankaya',
 description: 'Restaurant Amankaya',
};
export default function Home() {
  return (
    <main className=" min-h-screen  md:px-24 px-6 py-6 md:py-12 transition-all ease">
      <Navbar />
      <section className="flex justify-center  items-center">
        <Image
          src={logoLocal}
          alt="Picture of the author"
          width={500}
          height={500}
        />
      </section>
      <div className="flex gap-4 flex-col md:flex-row justify-center ">
        <div className="flex flex-col items-center mt-5">
          <h1 className={`text-5xl mb-2 font-semibold ${font.className}`}>
            RESERVAS:
          </h1>
          <ButtonEffect
            color="green"
            path="https://api.whatsapp.com/send?phone=51936354615&text=%C2%A1Hola+Amankaya!"
            title="WhatsApp"
          />
        </div>
        <div className="flex flex-col items-center mt-5">
          <h1 className={`text-5xl mb-2 font-semibold ${font.className}`}>
            DELIVERY:
          </h1>
          <ButtonEffect
            color=".blue"
            path="https://api.whatsapp.com/send?phone=51936354615&text=%C2%A1Hola!+Quisiera+realizar+un+pedido"
            title="Realizar Pedido"
          />
        </div>
      </div>
      <div className=" ">
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
                  author="Gabriel"
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
      <div className="mt-5 lg:mt-10">
        {/* <h1 className="text-4xl font-semibold text-center mb-4">¿Cómo Llegar?</h1> */}
        <Local />
      </div>
      <section>
        <Footer />
      </section>
    </main>
  );
}
