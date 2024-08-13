import { Separator } from "@/components/ui/separator";
import { BadgeEuro } from "lucide-react";

export default function Tarif() {
  const priceDetails = [
    {
      name: "Ouverture de porte claquée",
      amount: 75,
    },
    {
      name: "Ouverture de porte fermée à clés",
      amount: 90,
    },
    {
      name: "Ouverture de porte blindée fermée",
      amount: 109,
    },
    {
      name: "Changement de cylindre",
      amount: 120,
    },
    {
      name: "Changement de verrou",
      amount: 150,
    },
    {
      name: "Changement de serrures 3,5,7 points de haute sureté",
      amount: 350,
    },
    {
      name: "Changement de bloc porte",
      amount: 1500,
    },
    {
      name: "Blindage de porte",
      amount: 299,
    },
    {
      name: "Deblocage rideau metallique",
      amount: 199,
    },
    {
      name: "Intervention d'urgence",
      amount: 120,
    },
  ];

  return (
    <section id="tarifs" className="py-20 bg-white text-center">
      <div className="container mx-auto">
        <div className="flex justify-center items-baseline">
          <h2 className="text-4xl font-bold mb-4 mr-2">Tarifs</h2>
          <BadgeEuro height="30px" width="30px" color="#B91F25" />
        </div>

        <p className="text-2xl font-bold">
          Déplacement{" "}
          <span className="underline decoration-[#B91F25] underline-offset-4">
            GRATUIT
          </span>
        </p>
        <p className="text-2xl font-bold">
          Devis{" "}
          <span className="underline decoration-[#B91F25] underline-offset-4">
            GRATUIT
          </span>
        </p>
        <table style={{ margin: "24px auto" }}>
          <thead>
            <tr>
              <th
                scope="col"
                className="bg-[#BF1E1D] pb-[12px] pt-[12px] text-[#E1E1E1]"
              >
                Service
              </th>
              <th
                scope="col"
                className="bg-[#BF1E1D] pb-[12px] pt-[12px] text-[#E1E1E1] pr-[24px]"
              >
                A partir de*
              </th>
            </tr>
          </thead>
          <tbody>
            {priceDetails.map((price, index) => {
              return (
                <>
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
                </>
              );
            })}
          </tbody>
        </table>
        <p className="italic">
          *Prix à partir de, n&apos;hésitez pas à{" "}
          <a href="#contact" className="underline">
            nous contacter via la section contact
          </a>{" "}
          pour une estimation plus précise et obtenir un prix fixe et connu à
          l&apos;avance.
        </p>
        <Separator
          orientation="horizontal"
          style={{ margin: "16px auto" }}
          className="w-[50%]"
        />
        <p className="italic">
          Pour tout autre services non présent sur la liste, n&apos;hésitez pas
          à{" "}
          <a href="#contact" className="underline">
            nous contacter via la section de contact
          </a>{" "}
          pour un devis personnalisé.
        </p>
      </div>
    </section>
  );
}
