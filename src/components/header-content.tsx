import { Separator } from "@/components/ui/separator";
import { montserrat } from "@/app/layout";

interface headerContent {
    orientation: 'vertical' | 'horizontal',
    closeSheet: () => void,
}

export default function HeaderContent({ orientation, closeSheet }: headerContent) {
  return (
    <>
      <p
        className={`text-lg cursor-pointer hover:underline underline-offset-4 hover:decoration-[#B91F25] text-[#020202] ${montserrat.className} text-base lg:text-lg`}
      >
        ACCEUIL
      </p>
      <Separator orientation={orientation} decorative className="bg-white" />
      <a href="#services"
        className={`text-lg cursor-pointer hover:underline underline-offset-4 hover:decoration-[#B91F25] text-[#020202] ${montserrat.className} text-base lg:text-lg`}
        onClick={closeSheet}
      >
        NOS SERVICES
      </a>
      <Separator orientation={orientation} decorative className="bg-white" />
      <p
        className={`text-lg cursor-pointer hover:underline underline-offset-4 hover:decoration-[#B91F25] text-[#020202] ${montserrat.className} text-base lg:text-lg`}
      >
        CONTACT
      </p>
      <Separator orientation={orientation} decorative className="bg-white" />
      <p
        className={`text-lg cursor-default text-slate-400 ${montserrat.className} text-base lg:text-lg`}
      >
        DEVIS EN LIGNE (bientôt)
      </p>
    </>
  );
}
