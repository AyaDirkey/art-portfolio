import React, { useState, useEffect, useMemo } from "react"; // Import useMemo
import { getAwards } from "../api/awardsApi";
import SectionTitle from "./common/SectionTitle";
import { FaAward, FaSearch, FaTimes } from "react-icons/fa";
import type { Award } from "../types";
import { useTranslation } from "react-i18next";
import { AppLink } from "../AppLink";
import { t } from "i18next";

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
    return (
      <div className="flex justify-center items-center h-64">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <section id="awards" className="bg-base-100">
      <div className="container mx-auto px-4">
        {/* <div className="flex flex-row mb-10 justify-between">
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
                  setSearchTerm(''); 
                }
                setIsSearchVisible(!isSearchVisible);
              }}
              className="btn btn-ghost btn-circle btn-sm"
            >
              {isSearchVisible ? (
                <FaTimes className="size-4 text-gray-500" />
              ) : (
                <FaSearch className="size-4 text-gray-500" />
              )}
            </button>
          </div>
        </div> */}

        {/*awards*/}
        {filteredAwards.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 p-4">
            {filteredAwards.map((award, index) => (
              <div
                key={index}
                className="bg-base-100 rounded-box p-4 flex flex-col items-center"
              >
                {/* Fixed-size container for the image/icon */}
                <div className="w-32 h-32 flex items-center justify-center mb-4">
                  {award.photo ? (
                    <img
                      className="w-full h-full rounded-box object-cover"
                      src={`${AppLink.images}/${award.photo}`}
                      alt={
                        i18n.language === "ar" ? award.ar_title : award.en_title
                      }
                    />
                  ) : (
                    <FaAward className="w-20 h-20 text-gray-500" />
                  )}
                </div>
                <div className="text-center">
                  <h6 className="font-bold text-sm">
                    {i18n.language === "ar" ? award.ar_title : award.en_title}
                  </h6>
                </div>
              </div>
            ))}
          </div>
        ) : (
          searchTerm && (
            <div className="mt-8">
              <p className="text-lg">
                No awards found matching "{searchTerm}".
              </p>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Awards;
