import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      delay: 0,
      duration: 1000,
      easing: 'ease-in-out',
    });
  }, []); // Chỉ gọi một lần khi component mount

  useEffect(() => {
    AOS.refresh();
    console.log('ok');
  });

  return (
    <div>
      <h1 data-aos="fade-up">Hello, world!</h1>
      <p data-aos="fade-left">This is an animated paragraph.</p>
      {/* Thêm các phần tử khác với data-aos */}
    </div>
  );
};

export default App;
