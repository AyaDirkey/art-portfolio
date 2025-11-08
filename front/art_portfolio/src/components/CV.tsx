import React, { useState, useEffect } from "react";
import { getCV } from "../api/cvApi";
import type { CV } from "../types";
import { AppLink } from "../AppLink";
import { useTranslation } from "react-i18next";
import Section from "./common/Section";
import { getLocalizedText } from "../utility/getLocalizedText";

const CVComponent: React.FC = () => {
  const [cv, setCV] = useState<CV | null>(null);
  const [loading, setLoading] = useState(true);
  const { i18n } = useTranslation();

  useEffect(() => {
    getCV()
      .then((data) => {
        setCV(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch CV:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  console.log(cv);
  return (
    <Section id="cv">
      <div className="container">
        {cv ? (
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10">
            <img
              className="rounded-box w-full max-w-md h-auto"
              src={`${AppLink.images}/${cv.photo}`}
              alt="CV Photo"
            />
            <div
              className={`text-center ${
                i18n.language === "ar" ? "md:text-right" : "md:text-left"
              }`}
            >
              <h3 className="font-semibold mb-3">
                {getLocalizedText(cv.ar_headline, cv.en_headline, i18n.language)}
              </h3>
              <p>
                {getLocalizedText(cv.ar_body, cv.en_body, i18n.language)}
              </p>
            </div>
          </div>
        ) : (
          <p>CV is not available at the moment.</p>
        )}
      </div>
    </Section>
  );
};

export default CVComponent;
