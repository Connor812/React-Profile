import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import Profolio from './pages/Profolio';
import Contact from './pages/Contact';
// import Footer from './Footer'

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Profolio') {
      return <Profolio />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      {/* <Footer /> */}
    </div>
  );
}