import React, { useState, useRef, useEffect } from 'react';
import NavTabs from './NavTabs';
import Home from '../pages/Home';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';
import Resume from '../pages/Resume';
import Footer from './Footer';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');
  const canvasRef = useRef(null);

  useEffect(() => {
    const myCanvas = canvasRef.current;
    const ctx = myCanvas.getContext('2d');
    let angle = 0;
    let requestId;
    let timerInterval;
    const desiredAngle = 10; // Specify the desired angle threshold here

    function startTimer() {
      timerInterval = setInterval(function () {
        angle += 0.2;

        if (angle >= desiredAngle) {
          angle = desiredAngle;
          stopTimer();
        }
      }, 100);
    }

    function stopTimer() {
      clearInterval(timerInterval);
    }

    function animate() {
      ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
      draw(400, 600, 120, 0);
      requestId = requestAnimationFrame(animate);
    }

    function draw(startX, startY, len, parentAngle) {
      const angle1 = parentAngle - angle;
      const angle2 = parentAngle + angle;

      ctx.lineWidth = len / 20;

      ctx.beginPath();
      ctx.save();

      ctx.strokeStyle = 'grey';
      ctx.fillStyle = 'grey';

      ctx.translate(startX, startY);
      ctx.rotate((parentAngle * Math.PI) / 180);
      ctx.moveTo(0, 0);
      ctx.lineTo(0, -len);
      ctx.stroke();

      if (len < 10) {
        ctx.restore();
        return;
      }

      draw(0, -len, len * 0.8, angle1);
      draw(0, -len, len * 0.8, angle2);

      ctx.restore();
    }

    startTimer();
    requestId = requestAnimationFrame(animate);

    return () => {
      stopTimer();
      cancelAnimationFrame(requestId);
    };
  }, []);

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      <div className="canvas_container">
        <canvas
          ref={canvasRef}
          id="my_canvas"
          width="800"
          height="600"
        ></canvas>
        <div style={{ zIndex: 2 }}>{renderPage()}</div>
        <Footer />
      </div>
    </div>
  );
}