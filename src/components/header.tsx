import RsLogo from "../../public/img/test-img.png";
import Image from "next/image";
import { montserrat } from "@/app/layout";
import { Menu, Phone } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";
import HeaderContent from "./header-content";

export default function Header() {
  return (
    <div className="flex gap-2 justify-between fixed  px-8 p-2 w-full bg-[#e1e1e1] text-white">
      <div className="flex justify-center items-center">
        <Image src={RsLogo} alt="rs serrurie" className="w-12 md:w-24" />
      </div>
      <div className="gap-4 justify-center items-center hidden md:flex">
        <HeaderContent orientation="vertical" />
      </div>
      <div className="flex gap-2 justify-center items-center hidden md:flex">
        <Phone color="#B91F25" />
        <a
          className={`text-lg cursor-pointer font-medium hover:underline underline-offset-4 hover:decoration-[#B91F25] text-[#020202] ${montserrat.className} text-base lg:text-lg`}
          href="tel:+33666150874"
        >
          06.66.15.08.74
        </a>
      </div>
      <Sheet>
        <SheetTrigger className="md:hidden">
          <Menu color="#020202" />
        </SheetTrigger>
        <SheetContent side={"right"} className="bg-[#e1e1e1]">
          <SheetDescription className="gap-4 flex flex-col">
            <HeaderContent orientation="horizontal" />
          </SheetDescription>
        </SheetContent>
      </Sheet>
    </div>
  );
}
