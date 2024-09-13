"use client";
import { useEffect, useState } from "react";

import Image from "next/image";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";

import HeaderContent from "./header-content";
import LanguageSwitch from "./ui/language-switch";

import RsLogo from "../../public/img/logo-rs.png";
import RsLogoMobile from "../../public/img/logo-rs-mobile.png";

export default function Header() {
  const [openSheet, setOpenSheet] = useState<boolean>(false);
  const [topPosition, setTopPosition] = useState<number>(0);

  const closeSheet = () => {
    setOpenSheet(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      let scroll = window.scrollY;
      setTopPosition(scroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="bg-[#BF1E1D] flex fixed items-center w-full justify-between p-2 md:p-0 md:block scroll-smooth block z-50">
        <div
          className={`flex justify-center hidden ${
            topPosition > 50 ? "hidden" : "md:flex"
          }`}
        >
          <Image
            src={RsLogo}
            alt="rs serrurie"
            style={{ width: "200px", transition: "ease-out" }}
            className="pt-3"
          />
        </div>
        <div className="flex justify-center block md:hidden">
          <Image
            src={RsLogoMobile}
            alt="rs serrurie"
            style={{ width: "250px" }}
            className="p-4"
          />
        </div>
        <div className="md:hidden">
          <LanguageSwitch />
        </div>

        <div className="relative flex justify-center items-center hidden md:flex py-3">
          <div className="gap-6 flex justify-center items-center">
            <HeaderContent orientation="vertical" closeSheet={closeSheet} />
          </div>
          <div className="absolute right-4">
            <LanguageSwitch />
          </div>
        </div>
        <Sheet open={openSheet} onOpenChange={() => setOpenSheet(!openSheet)}>
          <SheetTrigger
            className="md:hidden"
            onClick={() => setOpenSheet(true)}
          >
            <Menu color="white" />
          </SheetTrigger>
          <SheetContent side={"right"} className="bg-[#BF1E1D]">
            <SheetDescription className="gap-4 flex flex-col">
              <HeaderContent orientation="horizontal" closeSheet={closeSheet} />
            </SheetDescription>
          </SheetContent>
        </Sheet>
      </div>
      <div className={`bg-[#BF1E1D] h-[63.73px] w-full md:h-[173.05px]`}>.</div>
    </div>
  );
}
