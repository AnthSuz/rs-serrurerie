'use client'

import { useEffect } from "react";
import { Star } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Rating() {
  const t = useTranslations("Rating");

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="rating" className="p-20 text-center">
      <div className="flex justify-center items-baseline">
        <h2 className="text-4xl font-bold mb-8 mr-2">{t("title")}</h2>
        <Star height="30px" width="30px" color="#B91F25" />
      </div>
      <div
        className="elfsight-app-923520d7-9698-4206-8aea-8131b53d955f"
        data-elfsight-app-lazy
      />
    </section>
  );
}
