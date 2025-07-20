import React, { useState } from "react";
import { scroller, Element } from "react-scroll";
import image1 from '../images/horror1.jpg';
import { Link } from "react-router-dom";
import './Home2.css'; // <- You’ll add CSS here

export default function Home2() {
  const [hovered, setHovered] = useState(false);

  const countries = [
    { name: "India", code: "in", href: "india2" },
    { name: "United States", code: "us", href: "united_states2" },
    { name: "United Kingdom", code: "uk", href: "united_kingdom2" },
    { name: "Japan", code: "jp", href: "japan2" },
    { name: "Australia", code: "au", href: "australia2" },
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
    <Element name="home2">
      <div className="relative horror-container">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${image1})`,
            opacity: 0.85,
            zIndex: 0,
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-60 z-0" />

        {/* Content */}
        <div className="relative z-10 text-red-500 py-10 text-center text-3xl md:text-5xl font-black tracking-wider horror-text">
          <div className="border-b-2 border-red-800 p-3 glowing-text">
            HORROR PLACES ALL OVER THE WORLD
          </div>

          <div className="p-10 text-2xl md:text-5xl text-green-600 font-extrabold items-center flex justify-center gap-4 md:gap-10 creepy-select">
            <h1 className="flicker">CHOOSE COUNTRY →</h1>
            <select
              className="border border-red-700 bg-black text-white p-3 md:text-3xl cursor-pointer"
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

          <Link to="/">
            <div className="flex justify-center">
              <div
                className={`scary-button group relative overflow-hidden px-8 py-4 text-white font-bold bg-black ${hovered ? "hover" : "unhover"
                  }`}
                onClick={() => alert("Nice decision... 😈")}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                GO BACK

                {/* Left Border */}
                <span className={`absolute bottom-0 left-0 w-1 bg-blue-700 transition-all duration-300 ${hovered ? "h-full delay-[0ms]" : "h-0 delay-[400ms]"
                  } rounded-bl-lg rounded-tl-lg`}></span>

                {/* Top Border */}
                <span className={`absolute top-0 left-0 h-1 bg-blue-700 transition-all duration-300 ${hovered ? "w-full delay-[100ms]" : "w-0 delay-[300ms]"
                  } rounded-tl-lg rounded-tr-lg`}></span>

                {/* Right Border */}
                <span className={`absolute top-0 right-0 w-1 bg-blue-700 transition-all duration-300 ${hovered ? "h-full delay-[200ms]" : "h-0 delay-[200ms]"
                  } rounded-tr-lg rounded-br-lg`}></span>

                {/* Bottom Border */}
                <span className={`absolute bottom-0 right-0 h-1 bg-blue-700 transition-all duration-300 ${hovered ? "w-full delay-[300ms]" : "w-0 delay-[100ms]"
                  } rounded-bl-lg rounded-br-lg`}></span>
              </div>
            </div>

          </Link>
        </div>
      </div>
    </Element>
  );
}
