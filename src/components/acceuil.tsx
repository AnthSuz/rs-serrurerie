import { useState } from "react";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

export default function Acceuil() {
  const pictures: string[] = [
    "https://travaux.obat.fr/guides/wp-content/uploads/2024/02/prix-serrurier.png",
    "https://www.mesdepanneurs.fr/sites/mesdepanneurs.fr/files/field/image/tarif-serrurier-professionnel.jpeg",
    "https://www.guedo-outillage.fr/blog/wp-content/uploads/elementor/thumbs/Loutillage-indispensable-du-serrurier-q9oo7nrzoinj548y0wmiinrupzwv838dx0kjy4061s.jpg",
  ];
  const [indexPicture, setIndexPicture] = useState<number>(0);
  return (
    <section
      id="accueil"
      style={{ backgroundImage: `url(${pictures[indexPicture]})` }}
      className="bg-white w-full h-[500px] bg-cover bg-center px-5 py-10 md:px-10"
    >
      <ArrowBigLeft
        height={"30px"}
        width={"30px"}
        color="white"
        className="bg-[#BF1E1D] opacity-70 absolute rounded-full bottom-[50%] left-[10px] md:bottom-[250px] cursor-pointer"
        onClick={() => {
          if (indexPicture === 0) {
            setIndexPicture(2);
          } else {
            setIndexPicture(indexPicture - 1);
          }
        }}
      />
      <div className="flex flex-col justify-center items-center h-full w-full gap-5 bg-white/70">
        {indexPicture === 0 ? (
          <>
            <h1 className="text-2xl md:text-4xl text-center px-4 md:px-8 font-bold">
              Problème de porte vérouiller sur Paris et en Ile de France
            </h1>
            <p className="text-xl md:text-2xl text-center px-6 md:px-6">
              Intervention à Paris et dans toute l&apos;Île-de-France, 7j/7, 24h/24,
              pour tout problème de porte claquée ou verrouillée, changement de
              serrure ou de cylindre.
            </p>
          </>
        ) : indexPicture === 1 ? (
          <>
            <h1 className="text-2xl md:text-4xl text-center px-4 md:px-8 font-bold">
              Raphaël Serrurerie
            </h1>
            <p className="text-xl md:text-2xl text-center px-6 md:px-6">
              Dépannage 24H/24 & 7J/7
              <br />
              <br />
              Devis Gratuit
              <br />
              <br />
              Particuliers - Syndics - Commerces
            </p>
          </>
        ) : (
          indexPicture === 2 && (
            <>
              <h1 className="text-2xl md:text-4xl text-center px-4 md:px-8 font-bold">
                Ouverture de porte garantie
              </h1>
              <p className="text-xl md:text-2xl text-center px-6 md:px-6">
                Parce que rien n&pos;est plus important pour nous que votre
                entière satisfaction, nous réalisons des prestations de qualité.
                Chez Raphael Serrurerie, vous avez l&pos;assurance de prix
                honnêtes et sans surcoûts.
              </p>
            </>
          )
        )}
      </div>

      <ArrowBigRight
        className="bg-[#BF1E1D] opacity-70 absolute rounded-full bottom-[50%] right-[10px] md:bottom-[250px] cursor-pointer"
        height={"30px"}
        width={"30px"}
        color="white"
        onClick={() => {
          if (indexPicture === 2) {
            setIndexPicture(0);
          } else {
            setIndexPicture(indexPicture + 1);
          }
        }}
      />
    </section>
  );
}
