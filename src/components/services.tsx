import { KeyRound } from "lucide-react";
import Check from "../../public/img/white-heavy-check-mark.svg";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Services() {
  const t = useTranslations("Services");
  return (
    <section id="services" className="py-20 bg-[#e1e1e1] text-center">
      <div className="container mx-auto">
        <div className="flex justify-center items-baseline">
          <h2 className="text-4xl font-bold mb-4 mr-2">{t("title")}</h2>
          <KeyRound height="30px" width="30px" color="#B91F25" />
        </div>
        <p className="text-lg mb-8">{t("description")}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col">
            <div className="flex flex-col p-4 bg-white rounded shadow flex-1">
              <h3 className="text-2xl font-bold mb-2">
                {t.rich("firstCard.title", {
                  underline: (chunks: any) => (
                    <span className="underline decoration-[#B91F25] underline-offset-4">
                      {chunks}
                    </span>
                  ),
                })}
              </h3>
              <ul className="p-4 h-full font-semibold">
                <li className="mb-4">
                  {t.rich("firstCard.firstPoint", {
                    italic: (chunks: any) => <i>{chunks}</i>,
                  })}
                </li>
                <li className="mb-4">{t("firstCard.secondPoint")}</li>
                <li className="mb-4">{t("firstCard.thirdPoint")}</li>
              </ul>
            </div>
            <span className="flex items-start justify-center mt-4 px-2">
              <Image src={Check} alt="check" className="mr-2 w-[24px]" />
              <p className="font-medium">{t("firstCard.subtitle")}</p>
            </span>
          </div>

          <div className="flex flex-col">
            <div className="flex flex-col p-4 bg-white rounded shadow flex-1">
              <h3 className="text-2xl font-bold mb-2">
                {t.rich("secondCard.title", {
                  underline: (chunks: any) => (
                    <span className="underline decoration-[#B91F25] underline-offset-4">
                      {chunks}
                    </span>
                  ),
                })}
              </h3>
              <ul className="p-4 h-full font-semibold">
                <li className="mb-4">{t("secondCard.firstPoint")}</li>
                <li className="mb-4">{t("secondCard.secondPoint")}</li>
                <li className="mb-4">{t("secondCard.thirdPoint")}</li>
              </ul>
            </div>
            <span className="flex items-start justify-center mt-4 px-2">
              <Image src={Check} alt="check" className="mr-2 w-[24px]" />
              <p className="font-medium">{t("secondCard.subtitle")}</p>
            </span>
          </div>

          <div className="flex flex-col">
            <div className="flex flex-col p-4 bg-white rounded shadow flex-1">
              <h3 className="text-2xl font-bold mb-2">
                {t.rich("thirdCard.title", {
                  underline: (chunks: any) => (
                    <span className="underline decoration-[#B91F25] underline-offset-4">
                      {chunks}
                    </span>
                  ),
                })}
              </h3>
              <ul className="p-4 h-full font-semibold">
                <li className="mb-4">{t("thirdCard.firstPoint")}</li>
                <li className="mb-4">{t("thirdCard.secondPoint")}</li>
              </ul>
            </div>
            <span className="flex items-start justify-center mt-4 px-2">
              <Image src={Check} alt="check" className="mr-2 w-[24px]" />
              <p className="font-medium">{t("thirdCard.subtitle")}</p>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
