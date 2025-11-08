import React, { useState, useEffect, useMemo } from "react"; // Import useMemo
import { getAwards } from "../api/awardsApi";
import SectionTitle from "./common/SectionTitle";
import { FaAward, FaSearch, FaTimes } from "react-icons/fa";
import type { Award } from "../types";
import { useTranslation } from "react-i18next";
import { AppLink } from "../AppLink";
import { t } from "i18next";
import Section from "./common/Section";
import LazyImage from "./common/LazyImage";
import Loading from "./common/Loading";
import { getLocalizedText } from "../utility/getLocalizedText";

const Awards: React.FC = () => {
  const [awards, setAwards] = useState<Award[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const { i18n } = useTranslation();

  useEffect(() => {
    getAwards()
      .then((data) => {
        setAwards(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch awards:", error);
        setLoading(false);
      });
  }, []);

  const filteredAwards = useMemo(() => {
    if (!searchTerm) {
      return awards; // If search is empty, return all awards
    }

    const lowercasedTerm = searchTerm.toLowerCase();
    return awards.filter(
      (award) =>
        award.en_title.toLowerCase().includes(lowercasedTerm) ||
        award.ar_title.toLowerCase().includes(lowercasedTerm)
    );
  }, [awards, searchTerm]); // This recalculates only when awards or searchTerm changes

  if (loading) {
    return <Loading />;
  }

  return (
    <Section id="awards">
      <div className="container">
        <div className="flex flex-row mb-10 gap-x-2">
          <SectionTitle titleKey="sections.awards" />
          <div className="flex items-center">
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                isSearchVisible ? "w-64 opacity-100" : "w-0 opacity-0"
              }`}
            >
              <input
                type="text"
                placeholder={t("content.search_award")}
                className="input input-bordered input-sm w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                autoFocus
              />
            </div>
            <button
              onClick={() => {
                if (isSearchVisible) {
                  setSearchTerm("");
                }
                setIsSearchVisible(!isSearchVisible);
              }}
              className="btn btn-ghost btn-circle btn-sm"
            >
              {isSearchVisible ? (
                <FaTimes className="size-4" />
              ) : (
                <FaSearch className="size-4" />
              )}
            </button>
          </div>
        </div>
        {/*awards*/}
        <div className="group relative">
          <div className="flex gap-4 p-2 overflow-x-auto custom-scrollbar">
            {filteredAwards.length > 0
              ? filteredAwards.map((award) => (
                  <div
                    key={award.id}
                    // 'snap-start' ensures each card snaps to the front
                    className="bg-base-200 rounded-box p-4 flex flex-col shadow-md items-center shrink-0 w-40 snap-start"
                  >
                    <div className="w-32 h-32 flex items-center justify-center mb-4">
                        <LazyImage
                          src={`${AppLink.images}/${award.photo}`}
                          alt={getLocalizedText(
                            award.ar_title,
                            award.en_title,
                            i18n.language
                          )}
                          className="w-full h-full rounded-box object-cover"
                          placeholder={
                            <FaAward className="w-16 h-16 text-gray-500" />
                          }
                        />
                    
                    </div>
                    <div className="text-center">
                      <h6 className="font-bold text-sm">
                        {i18n.language === "ar"
                          ? award.ar_title
                          : award.en_title}
                      </h6>
                    </div>
                  </div>
                ))
              : searchTerm && (
                  <div className="mt-8 w-full text-center">
                    <p className="text-lg">
                      No awards found matching "{searchTerm}".
                    </p>
                  </div>
                )}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Awards;
