import { useState } from "react";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

export default function Acceuil() {
  const pictures: string[] = [
    "/img/carrousel-first.jpg",
    "/img/carrousel-second.jpeg",
    "/img/carrousel-third.png",
  ];
  const [indexPicture, setIndexPicture] = useState<number>(0);
  const [animating, setAnimating] = useState(false);
  const [directionSlide, setDirectionSlide] = useState<{
    transform: string;
    opacity: number;
    transition: string;
  }>({
    transform: "",
    opacity: 0,
    transition: "",
  });

  const slideStyles = {
    entered: {
      transform: "translateX(0)",
      opacity: 1,
      transition: "transform 0.5s ease, opacity 0.5s ease",
    },
    left: {
      transform: "translateX(-100%)",
      opacity: 0,
      transition: "transform 0.5s ease, opacity 0.5s ease",
    },
    right: {
      transform: "translateX(100%)",
      opacity: 0,
      transition: "transform 0.5s ease, opacity 0.5s ease",
    },
  };
  const handleNext = () => {
    setAnimating(true);
    setDirectionSlide(slideStyles.right);
    setTimeout(() => {
      setIndexPicture((prevIndex) =>
        prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
      );
      setAnimating(false);
    }, 200);
  };

  const handlePrev = () => {
    setAnimating(true);
    setDirectionSlide(slideStyles.left);
    setTimeout(() => {
      setIndexPicture((prevIndex) =>
        prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
      );
      setAnimating(false);
    }, 200);
  };
  return (
    <section
      id="accueil"
      style={{
        backgroundImage: `url(${pictures[indexPicture]})`,
        transition: "all 0.5s ease-in-out",
      }}
      className="bg-white w-full h-[500px] bg-cover bg-center px-5 py-10 md:px-10 relative"
    >
      <ArrowBigLeft
        height={"30px"}
        width={"30px"}
        color="white"
        className="bg-[#BF1E1D] opacity-70 absolute rounded-full bottom-[50%] left-[10px] md:bottom-[250px] cursor-pointer"
        onClick={handlePrev}
      />
      <div className="flex flex-col justify-center items-center h-full w-full gap-5 bg-white/70 rounded">
        <div style={animating ? directionSlide : slideStyles.entered}>
          {indexPicture === 0 ? (
            <>
              <h1 className="text-2xl md:text-4xl text-center px-4 md:px-8 font-bold pb-7">
                Problème de porte vérrouillée
              </h1>
              <p className="text-xl md:text-2xl text-center px-6 md:px-6">
                Intervention à Paris et dans toute l&apos;Île-de-France, 7j/7,
                24h/24, pour tous problèmes de portes claquées ou verrouillées,
                changement de serrures ou de cylindres.
              </p>
            </>
          ) : indexPicture === 1 ? (
            <>
              <h1 className="text-2xl md:text-4xl text-center px-4 md:px-8 font-bold pb-7">
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
                <h1 className="text-2xl md:text-4xl text-center px-4 md:px-8 font-bold pb-7">
                  Ouverture de porte garantie
                </h1>
                <p className="text-xl md:text-2xl text-center px-6 md:px-6">
                  Parce que rien n&apos;est plus important pour nous que votre
                  entière satisfaction, nous réalisons des prestations de
                  qualité. Chez Raphael Serrurerie, vous avez l&apos;assurance
                  de prix honnêtes et sans surcoûts.
                </p>
              </>
            )
          )}
        </div>
      </div>

      <ArrowBigRight
        className="bg-[#BF1E1D] opacity-70 absolute rounded-full bottom-[50%] right-[10px] md:bottom-[250px] cursor-pointer"
        height={"30px"}
        width={"30px"}
        color="white"
        onClick={handleNext}
      />
    </section>
  );
}
