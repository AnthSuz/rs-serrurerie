"use client";
import RsLogo from "../../public/img/logo-rs.png";
import RsLogoMobile from "../../public/img/logo-rs-mobile.png";

import Image from "next/image";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";
import HeaderContent from "./header-content";
import { useState } from "react";

export default function Header() {
  const [openSheet, setOpenSheet] = useState<boolean>(false);
  const [topPosition, setTopPosition] = useState<number>(0);

  const closeSheet = () => {
    setOpenSheet(false);
  };

  window.addEventListener("scroll", () => {
    let scroll = window.scrollY;
    setTopPosition(scroll);
  });

  return (
    <div>
      <div className="bg-[#BF1E1D] flex fixed w-full justify-between p-2 md:p-0 md:block scroll-smooth">
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
        <div className="gap-6 justify-center items-center hidden md:flex py-3">
          <HeaderContent orientation="vertical" closeSheet={closeSheet} />
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
