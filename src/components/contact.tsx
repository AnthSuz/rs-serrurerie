import { Phone, LandPlot, MessageSquareMore, Coins } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import WhatsappLogo from "../../public/img/whatsapp.256x256.png";
import PhoneLogo from "../../public/img/phone.256x256.png";
import MailLogo from "../../public/img/mail.256x256.png";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-[#e1e1e1] text-center">
      <div className="container mx-auto">
        <div className="flex justify-center items-baseline">
          <h2 className="text-4xl font-bold mb-4 mr-2">Contactez-nous</h2>
          <Phone height="30px" width="30px" color="#B91F25" />
        </div>
        <p className="text-lg mb-8"></p>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <MessageSquareMore
                className="mx-auto mb-2"
                width="30px"
                height="30px"
                color="#B91F25"
              />
              <p className="mb-3 font-semibold">Etape 1 - Contact</p>
              <p>Contactez-nous sur WhatsApp, par e-mail ou par téléphone</p>
            </div>
            <div>
              <Coins
                className="mx-auto mb-2"
                width="30px"
                height="30px"
                color="#B91F25"
              />
              <p className="mb-3 font-semibold">Etape 2 - Estimation</p>
              <p></p>
              <p>
                Vous nous envoyez la photo permettant d’estimer{" "}
                <span className="underline decoration-[#B91F25] underline-offset-4 font-medium">
                  un prix fix et clair convenu à l&apos;avance
                </span>{" "}
                pour votre problème qui ne changera pas lors de
                l&apos;intervention.
              </p>
            </div>
            <div>
              <LandPlot
                className="mx-auto mb-2"
                width="30px"
                height="30px"
                color="#B91F25"
              />
              <p className="mb-3 font-semibold">Etape 3 - Rendez-vous</p>
              <p>
                J&apos;arrive pour vous depannez ou nous convenons d&apos;un
                rendez-vous ensemble selon le service.
              </p>
            </div>
          </div>
          <Separator className="my-8" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a
              href="https://wa.me/666150874"
              className="flex flex-col items-center hover:scale-110 duration-200 hover:shadow rounded p-2 cursor-pointer"
            >
              <Image src={WhatsappLogo} alt="whatsapp" width={60} />
              <p className="mt-4 font-medium">via Whatsapp</p>
            </a>
            <a
              href="tel:+33666150874"
              className="flex flex-col items-center hover:scale-110 duration-200 hover:shadow rounded p-2"
            >
              <Image src={PhoneLogo} alt="phone" width={60} />
              <p className="mt-4 font-medium">06 66 15 08 74</p>
            </a>
            <a
              href="mailto:raphaelserrurerie@gmail.com"
              className="flex flex-col items-center hover:scale-110 duration-200 hover:shadow rounded p-2"
            >
              <Image src={MailLogo} alt="phone" width={60} />
              <p className="mt-4 font-medium">raphaelserrurerie@gmail.com</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
