import { Separator } from "@/components/ui/separator";
import { useTranslations } from "next-intl";
interface headerContent {
  orientation: "vertical" | "horizontal";
  closeSheet: () => void;
}

export default function HeaderContent({
  orientation,
  closeSheet,
}: headerContent) {
  const t = useTranslations("Header");
  return (
    <>
      <a
        href="#accueil"
        className="text-lg cursor-pointer hover:underline underline-offset-4 hover:decoration-[#E1E1E1] text-white text-base lg:text-lg"
        onClick={closeSheet}
      >
        {t('accueil')}
      </a>
      <Separator orientation={orientation} decorative className="bg-white" />
      <a
        href="#services"
        className="text-lg cursor-pointer hover:underline underline-offset-4 hover:decoration-[#E1E1E1] text-white text-base lg:text-lg"
        onClick={closeSheet}
      >
        {t('services')}
      </a>
      <Separator orientation={orientation} decorative className="bg-white" />
      <a
        href="#tarifs"
        className="text-lg cursor-pointer hover:underline underline-offset-4 hover:decoration-[#E1E1E1] text-white text-base lg:text-lg"
        onClick={closeSheet}
      >
        {t('prices')}
      </a>
      <Separator orientation={orientation} decorative className="bg-white" />
      <a
        href="#contact"
        className="text-lg cursor-pointer hover:underline underline-offset-4 hover:decoration-[#E1E1E1] text-white text-base lg:text-lg"
        onClick={closeSheet}
      >
        {t('contact')}
      </a>
      <Separator orientation={orientation} decorative className="bg-white" />
      <a
        href="#rating"
        className="text-lg cursor-pointer hover:underline underline-offset-4 hover:decoration-[#E1E1E1] text-white text-base lg:text-lg"
        onClick={closeSheet}
      >
        {t('rating')}
      </a>
    </>
  );
}
