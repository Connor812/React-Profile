import React, { useState, useRef, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Footer from './Footer';
import Layout from './helpers/layout';
import SideBar from './SideBar';

import spaceBackground from '../assets/images/background.jpg';

export default function PortfolioContainer() {

  const [sidebar, setSidebar] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  const showSideBar = () => setSidebar(!sidebar);


  document.addEventListener('DOMContentLoaded', function () {
    const backgroundImg = document.getElementById('background-img');
    console.log(backgroundImg);

    const backgroundImgToLoad = new Image();
    console.log(backgroundImgToLoad)

    backgroundImgToLoad.src = '/React-Profile/static/media/background.60a2be2b09e017245554.jpg';

    backgroundImgToLoad.onload = () => {
      console.log("loaded")
      backgroundImg.src = backgroundImgToLoad.src;
      backgroundImg.alt = "Loaded Img";
      setImgLoaded(true);
    }
  });

  return (
    <>
      <img id="background-img" className={imgLoaded ? "background-img loaded" : "background-img"} alt="Background"></img>
      <Router>
        <NavTabs showSideBar={showSideBar} />
        <SideBar sidebar={sidebar} showSideBar={showSideBar} />
        <Routes>
          <Route path="/React-Profile" element={<Layout><Home /></Layout>} index={true} />
          <Route path="/projects" element={<Layout><Projects /></Layout>} />
          <Route path="/resume" element={<Layout><Resume /></Layout>} />
          <Route path="/contact_me" element={<Layout><Contact /></Layout>} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}