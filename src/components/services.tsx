import { montserrat } from "@/app/layout";
import { KeyRound } from "lucide-react";
import Check from "../../public/img/white-heavy-check-mark.svg";
import Image from "next/image";

export default function Services() {
  return (
    <section id="services" className="py-20 bg-[#e1e1e1] text-center">
      <div className="container mx-auto">
        <div className="flex justify-center items-baseline">
          <h2 className="text-4xl font-bold mb-4 mr-2">Nos Services</h2>
          <KeyRound height="30px" width="30px" color="#B91F25" />
        </div>
        <p className="text-lg mb-8">
          Nous proposons une large gamme de services pour répondre à tous vos
          besoins en matière de serrurerie.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col">
            <div className="flex flex-col p-4 bg-white rounded shadow flex-1">
              <h3 className="text-2xl font-bold mb-2">
                <span className="underline decoration-[#B91F25] underline-offset-4">
                  Installation
                </span>{" "}
                de serrures
              </h3>
              <ul
                className={`${montserrat.className} p-4 h-full font-semibold`}
              >
                <li className="mb-4">
                  • Installation de serrures <i>(3,5,7 points)</i> toutes
                  marques
                </li>
                <li className="mb-4">
                  • Installation cylindres et verrous de sécurité toutes marques
                </li>
                <li className="mb-4">• Réparation tout type de serrure</li>
              </ul>
            </div>
            <span className="flex items-start justify-center mt-4 px-2">
              <Image src={Check} alt="check" className="mr-2 w-[24px]" />
              <p className={`${montserrat.className} font-medium`}>
                Intervention en moins de 30 minutes
              </p>
            </span>
          </div>

          <div className="flex flex-col">
            <div className="flex flex-col p-4 bg-white rounded shadow flex-1">
              <h3 className="text-2xl font-bold mb-2">
                Dépannage{" "}
                <span className="underline decoration-[#B91F25] underline-offset-4">
                  d&apos;urgence
                </span>
              </h3>
              <ul
                className={`${montserrat.className} p-4 h-full font-semibold`}
              >
                <li className="mb-4">• Ouverture de porte claquée</li>
                <li className="mb-4">• Ouverture de porte fermée à clés</li>
                <li className="mb-4">• Ouverture de porte blindée</li>
              </ul>
            </div>
            <span className="flex items-start justify-center mt-4 px-2">
              <Image src={Check} alt="check" className="mr-2 w-[24px]" />
              <p className={`${montserrat.className} font-medium`}>
                Prix juste et fixe connu à l&apos;avance
              </p>
            </span>
          </div>

          <div className="flex flex-col">
            <div className="flex flex-col p-4 bg-white rounded shadow flex-1">
              <h3 className="text-2xl font-bold mb-2">
                Conseil en{" "}
                <span className="underline decoration-[#B91F25] underline-offset-4">
                  sécurité
                </span>
              </h3>
              <ul
                className={`${montserrat.className} p-4 h-full font-semibold`}
              >
                <li className="mb-4">• Renforcement et blindage de porte</li>
                <li className="mb-4">• Changement bloc de porte</li>
              </ul>
            </div>
            <span className="flex items-start justify-center mt-4 px-2">
              <Image src={Check} alt="check" className="mr-2 w-[24px]" />
              <p className={`${montserrat.className} font-medium`}>
                Tout nos prix sont agréer assurances
              </p>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
