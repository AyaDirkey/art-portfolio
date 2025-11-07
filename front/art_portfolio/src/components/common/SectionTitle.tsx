import { t } from 'i18next';
import React from 'react';

interface SectionTitleProps {
  titleKey: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ titleKey }) => {
  return (
    <div className="mb-8">
      <h2 className="text-3xl font-bold">{t(titleKey)}</h2>
    </div>
  );
};

export default SectionTitle;