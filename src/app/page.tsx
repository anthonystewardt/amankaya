import Image from "next/image";
import logoLocal from "../../public/local.png"
import chef from "../../public/CHEF.png"
import amankaya from "../../public/amankaya_name.png"
import { ButtonEffect, CardQoute } from "@/components";
import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Big_Shoulders_Inline_Display } from "next/font/google"

const font = Big_Shoulders_Inline_Display({ subsets: ["latin"]});

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
      <div className="flex flex-col items-center mt-5">
        <h1 className={`text-5xl mb-2 font-semibold ${font.className}`}>RESERVAS:</h1>
        <ButtonEffect />
      </div>
      <div className=" ">
        <div className="md:mt-44 mt-20 mx-auto flex justify-center ">
          <div className="flex md:justify-center flex-col md:flex-row md:gap-10 gap-3 ">
            <div className="md:h-[550px] ">
              <Image
                src={chef}
                alt="Picture of the author"
                width={400}
                height={450}
                className="object-cover h-[380px] md:h-full"
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
    </main>
  );
}
