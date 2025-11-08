import React, { useState, useEffect } from "react"; // Import useMemo
import type { Picture } from "../types";
import { useTranslation } from "react-i18next";
import Section from "./common/Section";
import Loading from "./common/Loading";
import { getPictures } from "../api/picturesApi";
import SectionTitle from "./common/SectionTitle";
import { t } from "i18next";
import { AppLink } from "../AppLink";
import LazyImage from "./common/LazyImage";
import { getLocalizedText } from "../utility/getLocalizedText";
import { IoMdImage } from "react-icons/io";

const Pictures: React.FC = () => {
  const [pictures, setPictures] = useState<Picture[]>([]);
  const [loading, setLoading] = useState(true);
  const { i18n } = useTranslation();

  useEffect(() => {
    getPictures()
      .then((data) => {
        setPictures(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch awards:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <Section id="awards">
      <div className="container">
        <SectionTitle titleKey={t("sections.pictures")} />
        {/*awards*/}
        <div className="grid grid-cols-2 gap-4 p-2 md:grid-cols-4 md:gap-6 auto-rows-fr">
          {/* We slice the array to only show the first 4 pictures */}
          {pictures.slice(0, 4).map((pic, index) => (
            <div
              key={index}
              className="relative group flex flex-col overflow-hidden rounded-lg transition-all duration-300 h-full">
              {/* The Image */}
              <div className="relative grow overflow-hidden shadow-md hover:shadow-xl aspect-square">
                <LazyImage
                  src={`${AppLink.images}/${pic.picture}`}
                  alt={getLocalizedText(
                    pic.ar_name,
                    pic.en_name,
                    i18n.language
                  )}
                  className="w-full h-full rounded-box object-cover transition-transform duration-300 group-hover:scale-110"
                  placeholder={<IoMdImage className="w-8 h-8 text-gray-500" />}
                />
              </div>
              <div className="p-2 ">
                <p className="text-sm font-medium truncate">
                  {/* Assuming your picture object has a 'name' or 'title' property */}
                  {getLocalizedText(pic.ar_name, pic.en_name, i18n.language) ||
                    `Picture ${index + 1}`}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Optional: A button to view the full gallery */}
        <div className="text-center mt-8">
          <a href="/full-gallery" className="btn btn-neutral">
            View All Pictures
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Pictures;
