import React, { useEffect, useState } from 'react';

const Slideshow = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex(prevIndex => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const slides = [
    { src: 'https://kultur.istanbul/gorsel/2022/03/kapak.png', alt: 'Resim 1', text: 'Heyy Book Lovers! Join us with books you read, sail to new worlds... ' },
    { src: 'https://www.viaportmarina.com/blog/wp-content/uploads/2023/01/istanbulun-en-iyi-10-kutuphanesi.jpg', alt: 'Resim 2', text: 'There is no friend as loyal as a book. "Ernest Hemingway"' },
    { src: 'https://cdn.wallpapersafari.com/31/76/wZq957.jpg', alt: 'Resim 3', text: 'Reading is a conversation. All books talk. But a good book listens as well. "Mark Haddon"' }
  ];

  return (
    <div className="slideshow-container">
      <div className="slides">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === slideIndex ? 'active' : ''}`}
          >
            <img src={slide.src} alt={slide.alt} />
            <div className="overlay">{slide.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
