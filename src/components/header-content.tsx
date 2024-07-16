import { Separator } from "@/components/ui/separator";
import { montserrat } from "@/app/layout";

interface headerContent {
    orientation: 'vertical' | 'horizontal'
}

export default function HeaderContent({ orientation }: headerContent) {
  return (
    <>
      <p
        className={`text-lg cursor-pointer hover:underline underline-offset-4 hover:decoration-[#B91F25] text-[#020202] ${montserrat.className} text-base lg:text-lg`}
      >
        ACCEUIL
      </p>
      <Separator orientation={orientation} decorative className="bg-white" />
      <p
        className={`text-lg cursor-pointer hover:underline underline-offset-4 hover:decoration-[#B91F25] text-[#020202] ${montserrat.className} text-base lg:text-lg`}
      >
        NOS SERVICES
      </p>
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
