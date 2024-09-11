import { Separator } from "@/components/ui/separator";
import { BadgeEuro } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Tarif() {
  const t = useTranslations("Prices");
  const priceDetails = [
    {
      name: t('table.one'),
      amount: 75,
    },
    {
      name: t('table.two'),
      amount: 90,
    },
    {
      name: t('table.three'),
      amount: 109,
    },
    {
      name: t('table.four'),
      amount: 120,
    },
    {
      name: t('table.five'),
      amount: 150,
    },
    {
      name: t('table.six'),
      amount: 350,
    },
    {
      name: t('table.seven'),
      amount: 1500,
    },
    {
      name: t('table.eight'),
      amount: 299,
    },
    {
      name: t('table.nine'),
      amount: 199,
    },
    {
      name: t('table.ten'),
      amount: 120,
    },
  ];

  return (
    <section id="tarifs" className="py-20 bg-white text-center">
      <div className="container mx-auto">
        <div className="flex justify-center items-baseline">
          <h2 className="text-4xl font-bold mb-4 mr-2">{t("title")}</h2>
          <BadgeEuro height="30px" width="30px" color="#B91F25" />
        </div>

        <p className="text-2xl font-bold">
          {t.rich("freeShifting", {
            underline: (chunks) => (
              <span className="underline decoration-[#B91F25] underline-offset-4">
                {chunks}
              </span>
            ),
          })}
        </p>
        <p className="text-2xl font-bold">
        {t.rich("freeQuote", {
            underline: (chunks) => (
              <span className="underline decoration-[#B91F25] underline-offset-4">
                {chunks}
              </span>
            ),
          })}
        </p>
        <table style={{ margin: "24px auto" }}>
          <thead>
            <tr>
              <th
                scope="col"
                className="bg-[#BF1E1D] pb-[12px] pt-[12px] text-[#E1E1E1]"
              >
                {t('titleTable.services')}
              </th>
              <th
                scope="col"
                className="bg-[#BF1E1D] pb-[12px] pt-[12px] text-[#E1E1E1] pr-[24px]"
              >
                {t('titleTable.from')}
              </th>
            </tr>
          </thead>
          <tbody>
            {priceDetails.map((price, index) => {
              return (
                <tr key={index} className="border-b border-[#BF1E1D]">
                  <th
                    scope="row"
                    className="text-left font-normal pb-[12px] pt-[12px]"
                  >
                    {price.name}
                  </th>
                  <td className="pb-[12px] pt-[12px] font-medium">
                    {price.amount} €
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <p className="italic">
          {t.rich('firstSubtitle', {
            link: (chunks) => <a href="#contact" className="underline">{chunks}</a>
          })}
        </p>
        <Separator
          orientation="horizontal"
          style={{ margin: "16px auto" }}
          className="w-[50%]"
        />
        <p className="italic">
        {t.rich('secondSubtitle', {
            link: (chunks) => <a href="#contact" className="underline">{chunks}</a>
          })}
        </p>
      </div>
    </section>
  );
}
