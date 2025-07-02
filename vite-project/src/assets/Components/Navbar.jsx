import React from 'react';

export default function Navbar() {
  let countries = [
    { name: "India", code: "in" },
    { name: "United States", code: "us" },
    { name: "United Kingdom", code: "uk" },
    { name: "Canada", code: "ca" },
    { name: "Australia", code: "au" }
  ];

  return (
    <div
      className="p-10 text-5xl text-blue-600 font-extrabold items-center flex justify-center gap-10"
      style={{
        backgroundImage:
          'url(https://www.thepixelclub.com/wp-content/uploads/2021/03/thepixelclub-dunaterasz-budapest-09497-SLIDER.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPositionX: 'center',
        backgroundPositionY: '60%',
      }}
    >
      <div className="  italic drop-shadow-[2px_2px_4px_rgba(900,0,0,0.9)]">
        <h1>CHOOSE COUNTRY →</h1>
      </div>
      <div className='  drop-shadow-[2px_2px_4px_rgba(900,0,0,0.8)]'>
        <select className="border p-5  text-3xl ">
          <option value="">Select a country</option>
          {countries.map((item, key) => (
            <option key={key} value={item.code}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
