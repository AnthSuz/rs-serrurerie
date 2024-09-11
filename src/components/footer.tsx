import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");
  return (
    <footer className="bg-[#BF1E1D] text-white grid grid-cols-1 md:grid-cols-3 gap-10 justify-center p-8">
      <div>
        <h6 className="text-lg uppercase font-semibold mb-3">
          Raphael Serrurerie
        </h6>
        <p>{t('description')}</p>
        <p className="text-[#BF1E1D]">{t('hidePhraseOne')}</p>
        <p className="text-[#BF1E1D]">{t('hidePhraseTwo')}</p>
        <p className="text-[#BF1E1D]">{t('hidePhraseThree')}</p>
        <p className="text-[#BF1E1D]">{t('hidePhraseFour')}</p>
      </div>
      <div>
        <h6 className="text-lg font-semibold mb-3">{t('localLocksmithTitle')}</h6>
        <p>{t('localLocksmithDescription')}</p>
      </div>
      <div>
        <h6 className="text-lg font-semibold mb-3">Contact</h6>
        <p>{t('openingDay')}</p>
        <p>Raphael Serrurerie </p>
        <a href="tel:+33666150874">
          <p>06 66 15 08 74</p>
        </a>
        <a href="mailto:raphaelserrurerie@gmail.com">
          raphaelserrurerie@gmail.com
        </a>
      </div>
    </footer>
  );
}
