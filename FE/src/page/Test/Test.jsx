import React, { useState, useEffect } from 'react';
import './Test.css'; 

const Test = () => {
  const [sticky, setSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 101) {
        console.log(window.scrollY);
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={sticky ? 'header sticky' : ''}>
      <h1>My Header</h1>
    </header>
  );
};

export default Test;
