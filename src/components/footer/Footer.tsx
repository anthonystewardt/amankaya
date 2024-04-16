import Image from "next/image";
import amankaya from "../../../public/amankaya_name.png"
import Link from "next/link";
import { FaInstagram, FaSquareFacebook, FaTiktok } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="mt-10 text-white bg-zinc-900/90 rounded-lg lg:p-12 p-4 lg:py-6 lg:px-10">
      <div className="grid grid-cols-10 lg:gap-20 gap-4 ">
        <div className="md:col-span-3 col-span-full">
          {/* <Image
          src={amankaya}
          alt="Picture of the restaurant"
          width={400}
          height={450}
          className="object-cover h-[100px] md:h-full rounded-lg"
        /> */}
          <h1 className="font-bold text-2xl text-white/60">AMANKAYA</h1>
        </div>
        <div className=" md:col-span-4 col-span-full">
          <p className=" text-1xl font-semibold text-white/80 ">Dirección:</p>
          <p className="text-xs inline">
            Av. 28 de Julio 562, Miraflores. Dentro de LA QUINTA BUSTOS, Casa G
          </p>
        </div>
        <div className=" md:col-span-3 col-span-full  w-full">
           <ul className="flex  lg:justify-end lg:gap-5 gap-3 items-center ">
            <Link href="https://www.facebook.com/amankayalima" target="_blank">
              <FaSquareFacebook className="lg:w-6 lg:h-6 w-4 h-4 text-white/60" />
            </Link>
            <Link
              href="https://www.instagram.com/amankayaperu/"
              target="_blank"
            >
              <FaInstagram className="lg:w-6 lg:h-6 w-4 h-4 text-white/60" />
            </Link>
            <Link href="https://www.tiktok.com/@amankayaper" target="_blank">
              <FaTiktok className="lg:w-6 lg:h-6 w-4 h-4 text-white/60" />
            </Link>
          </ul>
        </div>
      </div>
      <div className="mt-10">
        <p className="text-xs text-white/50 text-center">
          Restaurant Amankaya | Comida Fusión {new Date().getFullYear()}. Todos
          los derechos reservados{" "}
        </p>
        <p className="text-xs text-white/50 text-center">
          Desarrollado por{" "}
          <Link href="https://contactamericas.com" className="font-bold hover:text-slate-200/90 transition ease">Contact Americas</Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
