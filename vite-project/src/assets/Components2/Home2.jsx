import React, { useState } from "react";
import { scroller } from "react-scroll";
import { Element } from "react-scroll";
import image1 from '../images/horror1.jpg'
import image2 from '../images/horror2.jpg'
import { Link } from "react-router-dom";
import App from "../../App";
export default function Home2() {
  const [isHovered, setIsHovered] = useState(false);

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

  const scaryButtonStyle = {
    cursor: "pointer",
    backgroundColor: isHovered ? "black" : "darkred",
    color: "white",
    padding: "12px 24px",
    textAlign: "center",
    fontWeight: "bold",
    borderRadius: "8px",
    boxShadow: isHovered ? "0 0 20px crimson" : "0 0 12px red",
    transition: "all 0.3s ease",
    fontFamily: "'Courier New', monospace",
    transform: isHovered ? "scale(1.05)" : "scale(1)",
  };

  return (
    <Element name="home2">
      <div className="relative">
        {/* Background Image Layer with Opacity */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${image1})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.9,
            zIndex: 0,
          }}

        ></div>

        {/* Content Layer */}
        <div className="relative z-10  text-red-500 py-10 text-center text-3xl md:text-5xl font-black italic tracking-wider">
          <div
            className="border-b-2 md:p-3"
            style={{
              wordSpacing: "1rem",
              textShadow: "2px 2px 8px rgba(0, 123, 255, 0.8)",
            }}
          >
            HORROR PLACES ALL OVER THE WORLD
          </div>

          <div className="p-10 text-2xl md:text-5xl text-blue-600 font-extrabold items-center flex justify-center gap-4 md:gap-10">
            <div className="italic drop-shadow-[2px_2px_4px_rgba(0,0,0,0.9)]">
              <h1>CHOOSE COUNTRY →</h1>
            </div>

            <div className="drop-shadow-[2px_2px_4px_rgba(0,0,0,0.8)]">
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
          {/* Scary Button */}
          <Link to="/">
            <div className="flex justify-center">
              <div
                style={scaryButtonStyle}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => alert("Nice decision... 😈")}
                className="h-20 w-40 text-xl"
              >
                GO BACK
              </div>
            </div>
          </Link>
        </div>
      </div>
    </Element>
  );
}
