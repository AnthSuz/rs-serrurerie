"use client";
import Acceuil from "@/components/acceuil";
import Contact from "@/components/contact";
import Header from "@/components/header";
import Services from "@/components/services";
import Image from "next/image";
import WhatsappLogo from "../../public/img/whatsapp.256x256.png";
import { useEffect, useState } from "react";
import Footer from "@/components/footer";
import Tarif from "@/components/tarif";

export default function Home() {
  const [displayContactMe, setDisplayContactMe] = useState<Boolean>(true);

  useEffect(() => {
    setTimeout(() => setDisplayContactMe(false), 5000);
  }, []);
  return (
    <>
      <Header />
      <Acceuil />
      <Services />
      <Tarif />
      <Contact />
      <Footer />
      <div className="fixed right-2 bottom-2 ">
        <p
          className={`${
            displayContactMe
              ? "border border-black rounded bg-white mb-1 text-[10px] uppercase p-0.5"
              : "hidden"
          } duration-200`}
        >
          Contact moi 🙂
        </p>
        <a
          href="https://wa.me/666150874"
          className="hover:scale-110 duration-200"
        >
          <Image
            src={WhatsappLogo}
            width={60}
            alt="contact via whatsapp"
            className="cursor-pointer hover:scale-110 duration-200 mx-auto"
          />
        </a>
      </div>
    </>
  );
}
