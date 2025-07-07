import React from "react";
import { scroller } from "react-scroll";

export default function Home() {
  let countries = [
    { name: "India", code: "in", href: "india" },
    { name: "United States", code: "us", href: "united_states" },
    { name: "United Kingdom", code: "uk", href: "united_kingdom" },
    { name: "Japan", code: "jp", href: "japan" },
    { name: "Australia", code: "au", href: "australia" },
  ];

  const handleSelectChange = (e) => {
    const selectedHref = e.target.value;
    if (selectedHref) {
      scroller.scrollTo(selectedHref, {
        duration: 500,
        smooth: true,
        offset: -50, 
      });
    }
  };

  return (
    <div
      className="bg-black text-red-500 py-10 text-center text-3xl md:text-5xl font-black italic tracking-wider"
      style={{
        backgroundImage:
          "url(https://www.thepixelclub.com/wp-content/uploads/2021/03/thepixelclub-dunaterasz-budapest-09497-SLIDER.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPositionY: "10%",
        backgroundPositionX: "center",
      }}
    >
      <div
        className="border-b-2 md:p-3"
        style={{
          wordSpacing: "1rem",
          textShadow: "2px 2px 8px rgba(0, 123, 255, 0.8)",
        }}
      >
        ABANDONED PLACES ALL OVER THE WORLD
      </div>

      <div className="p-10 text-2xl md:text-5xl text-blue-600 font-extrabold items-center flex justify-center gap-4 md:gap-10">
        <div className="italic drop-shadow-[2px_2px_4px_rgba(900,0,0,0.9)]">
          <h1>CHOOSE COUNTRY →</h1>
        </div>
        <div className="drop-shadow-[2px_2px_4px_rgba(900,0,0,0.8)]">
          <select
            className="border p-3 md:text-3xl"
            onChange={handleSelectChange}
            defaultValue=""
          >
            <option value="">Select a country</option>
            {countries.map((item, key) => (
              <option key={key} value={item.href}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
      </div>

  
    </div>
  );
}
