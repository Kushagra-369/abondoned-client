import React from 'react';

export default function Home() {
  return (
    <div
      className="bg-black text-red-500 py-10 text-center text-5xl font-black italic tracking-wider"
      style={{
        backgroundImage:
          'url(https://www.thepixelclub.com/wp-content/uploads/2021/03/thepixelclub-dunaterasz-budapest-09497-SLIDER.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPositionY: '10%',
        backgroundPositionX: 'center',
      }}
    >
      <div
        className="border-b-2 p-3"
        style={{
          wordSpacing: '1rem',
          textShadow: '2px 2px 8px rgba(0, 123, 255, 0.8)'
        }}
      >
        ABANDONED PLACES ALL OVER THE WORLD
      </div>
    </div>
  );
}
