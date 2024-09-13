import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

import FrenchFlag from "../../../public/img/france.png";
import UKFlag from "../../../public/img/gb.png";

const FrenchFlagIcon = () => (
  <Image src={FrenchFlag} alt="french flag" width={15} className="h-[10px]" />
);
const UKFlagIcon = () => (
  <Image
    src={UKFlag}
    alt="united kingdom flag"
    width={15}
    className="h-[10px]"
  />
);

export default function LanguageSwitch() {
  const router = useRouter();
  const pathname = usePathname();

  const toggleLang = () => {
    router.replace(pathname === "/fr" ? "/en" : "/fr");
  };

  return (
    <div className="flex items-center space-x-2">
      <div
        onClick={toggleLang}
        className={`relative inline-block w-[55px] h-[29px] bg-gray-300 rounded-full cursor-pointer transition duration-300`}
      >
        <span className="flex justify-around items-center h-full">
          <FrenchFlagIcon />
          <UKFlagIcon />
        </span>
        <div
          className={`flex justify-center items-center absolute top-0.5 left-0.5 w-[25px] h-[25px] bg-white rounded-full shadow-md transform transition-transform duration-300 ${
            pathname === "/fr" ? "translate-x-0" : "translate-x-[1.6rem]"
          }`}
        >
          {pathname === "/fr" ? <FrenchFlagIcon /> : <UKFlagIcon />}
        </div>
      </div>
    </div>
  );
}
