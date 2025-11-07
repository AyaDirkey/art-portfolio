import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Awards from '../components/Awards';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-base-100">
      <Header />
      <main>
        <Awards />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;