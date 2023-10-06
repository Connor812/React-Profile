import React, { useState, useEffect, useRef } from 'react';
import '../../styles/fade-in-section.css';

function FadeInSection(props) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // Check if the element is intersecting or has previously intersected.
        if (entry.isIntersecting || entry.intersectionRatio > 0) {
          setVisible(true);
          observer.unobserve(domRef.current); // Stop observing once it's visible.
        }
      });
    });

    observer.observe(domRef.current);
    
    return () => {
      if (domRef.current) {
        observer.unobserve(domRef.current);
      }
    };
  }, []);

  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''} ${props.className || ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

export default FadeInSection;