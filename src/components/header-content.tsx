import { Separator } from "@/components/ui/separator";

interface headerContent {
  orientation: "vertical" | "horizontal";
  closeSheet: () => void;
}

export default function HeaderContent({
  orientation,
  closeSheet,
}: headerContent) {
  return (
    <>
      <a
        href="#accueil"
        className="text-lg cursor-pointer hover:underline underline-offset-4 hover:decoration-[#E1E1E1] text-white text-base lg:text-lg"
        onClick={closeSheet}
      >
        ACCEUIL
      </a>
      <Separator orientation={orientation} decorative className="bg-white" />
      <a
        href="#services"
        className="text-lg cursor-pointer hover:underline underline-offset-4 hover:decoration-[#E1E1E1] text-white text-base lg:text-lg"
        onClick={closeSheet}
      >
        NOS SERVICES
      </a>
      <Separator orientation={orientation} decorative className="bg-white" />
      <a
        href="#tarifs"
        className="text-lg cursor-pointer hover:underline underline-offset-4 hover:decoration-[#E1E1E1] text-white text-base lg:text-lg"
        onClick={closeSheet}
      >
        TARIFS
      </a>
      <Separator orientation={orientation} decorative className="bg-white" />
      <a
        href="#contact"
        className="text-lg cursor-pointer hover:underline underline-offset-4 hover:decoration-[#E1E1E1] text-white text-base lg:text-lg"
        onClick={closeSheet}
      >
        CONTACT
      </a>
      <Separator orientation={orientation} decorative className="bg-white" />
      <p className="text-lg cursor-default text-slate-400 text-base lg:text-lg">
        DEVIS EN LIGNE (bientôt)
      </p>
    </>
  );
}
