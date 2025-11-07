import React, { useState, useEffect, useMemo } from "react"; // Import useMemo
import { getAwards } from "../api/awardsApi";
import SectionTitle from "./common/SectionTitle";
import { FaAward } from "react-icons/fa";
import type { Award } from "../types";
import { useTranslation } from "react-i18next";

const Awards: React.FC = () => {
  const [awards, setAwards] = useState<Award[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
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
    return awards.filter((award) =>
      award.en_title.toLowerCase().includes(lowercasedTerm)
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
    <section id="awards" className="py-16 bg-base-100">
      <div className="container mx-auto px-4">
        <SectionTitle titleKey="sections.awards" />

        {/* --- ADD THE SEARCH INPUT --- */}
        <div className="form-control mb-8">
          <input
            type="text"
            placeholder="Search awards by title or description..."
            className="input input-bordered w-full max-w-md mx-auto block"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* --- MAP OVER THE FILTERED LIST --- */}
        {filteredAwards.length > 0 ? (
          <ul className="timeline timeline-vertical">
            {filteredAwards.map((award, index) => (
              <li key={award.id}>
                {index !== filteredAwards.length - 1 && <hr />}
                <div className="timeline-middle">
                  <FaAward className="text-primary text-3xl" />
                </div>
                <div
                  className={`timeline-${
                    index % 2 === 0 ? "start" : "end"
                  } timeline-box`}
                >
                  <h3 className="font-bold text-lg">{i18n.language === 'ar' ? award.ar_title : award.en_title}</h3>
                </div>
                {index !== filteredAwards.length - 1 && <hr />}
              </li>
            ))}
          </ul>
        ) : (
          // --- SHOW A "NO RESULTS" MESSAGE ---
          searchTerm && (
            <div className="text-center mt-8">
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
