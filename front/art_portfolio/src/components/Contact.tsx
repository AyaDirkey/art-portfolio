import React, { useState, useEffect } from "react";
import { FaEnvelope, FaFacebook } from "react-icons/fa";
import type { ContactInfo } from "../types";
import { getContactInfo } from "../api/contactsApi";
import { getFacebookProfileName, getFacebookUrl } from "../utility/helpers";
import { t } from "i18next";

const Contact: React.FC = () => {
  const [contact, setContact] = useState<ContactInfo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getContactInfo()
      .then((data) => {
        setContact(data);
        setLoading(false);
      })
      .catch((error: unknown) => {
        console.error("Failed to fetch contact info:", error);
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
  return (
    <nav>
      <h3 className="footer-title">{t("sections.contact")}</h3>
      {contact ? (
        <div className="grid grid-flow-col gap-4">
          <div className="flex flex-row items-center gap-x-1 w-full">
            <FaEnvelope className="size-5" />
            <a href={`mailto:${contact.gmail}`} className="link link-hover">
              {contact.gmail}
            </a>
          </div>
          <div className="flex flex-row items-center gap-x-1 w-full">
            <FaFacebook className="size-5" />
            <a
              href={getFacebookUrl(contact.facebook)}
              target="_blank"
              rel="noopener noreferrer"
              className="link link-hover"
            >
               {getFacebookProfileName(contact.facebook)}
            </a>
          </div>
        </div>
      ) : (
        <p className="text-center">
          Contact information is not available at the moment.
        </p>
      )}
    </nav>
    // <section id="contact" className="py-16 bg-base-200">
    //   <div className="container mx-auto px-4">
    //     <SectionTitle title="Get In Touch" />
    //     {contact ? (
    //       <div className="card w-full max-w-2xl mx-auto bg-base-100 shadow-xl">
    //         <div className="card-body">
    //           <h2 className="card-title justify-center text-2xl">
    //             Contact Information
    //           </h2>
    //           <div className="flex items-center my-2">
    //             <FaEnvelope className="mr-4 text-primary" />
    //             <a href={`mailto:${contact.gmail}`} className="link link-hover">
    //               {contact.gmail}
    //             </a>
    //           </div>
    //           <div className="flex items-center my-2">
    //             <FaPhone className="mr-4 text-primary" />
    //             <a href={`tel:${contact.facebook}`} className="link link-hover">
    //               {contact.facebook}
    //             </a>
    //           </div>
    //         </div>
    //       </div>
    //     ) : (
    //       <p className="text-center">
    //         Contact information is not available at the moment.
    //       </p>
    //     )}
    //   </div>
    // </section>
  );
};

export default Contact;
