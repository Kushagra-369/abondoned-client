import React from 'react';
import image1 from '../images/Kanda Kharak.jpg';
import { Link, Element } from "react-scroll";
import { motion } from 'framer-motion';

export default function India() {

    const india = [
        {
            name: " (i) Kanda Kharak",
            link: image1,
            para: `Kanda Khark, located in Pauri Garhwal, Uttarakhand, is a part of the historical Garhwal region. While Kanda Khark itself may not have extensive historical records readily available, the broader Garhwal region boasts a rich history, particularly under the Katyuri and Garhwal kingdoms.`
        },
        {
            name: " (ii) Kuldhara",
            link: "https://images.moneycontrol.com/static-mcnews/2025/01/20250117040151_1.jpg",
            para: "Kuldhara is an abandoned village in the Jaisalmer district of Rajasthan, India. Established around the 13th century, it was once a prosperous village inhabited by Paliwal Brahmins."
        },
        {
            name: " (iii) Khobri",
            link: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/bb/12/88/beautiful-nature-camp.jpg?w=400&h=300&s=1",
            para: "Khobri is a village located in the Sohna region of Gurugram (formerly Gurgaon) district in Haryana, India. It falls under the jurisdiction of the Harchandpur Gram Panchayat and the Sohna Block Panchayat."
        },
        {
            name: " (iv) Dhanushkodi",
            link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1T8KVV4hT6n1_AzkbMnZ9tD4u9oE7K9tdYA&s",
            para: "Dhanushkodi is an abandoned town at the south-eastern tip of Pamban Island of the state of Tamil Nadu in India. It is south-east of Pamban and is about 24 kilometres (15 mi) west of Talaimannar in Sri Lanka."
        },
        {
            name: " (v) Ross Island",
            link: "https://www.go2andaman.com/wp-content/uploads/2021/01/Copy-of-Copy-of-Copy-of-1R6A1099-scaled-e1735714885168.jpg",
            para: "Ross Island, officially renamed Netaji Subhas Chandra Bose Island in 2018, is located approximately 3 km east of Port Blair in the Andaman and Nicobar Islands."
        },
    ];

    const fadeInLeft = {
        hidden: { opacity: 0, x: -40 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
    };

    const fadeInRight = {
        hidden: { opacity: 0, x: 40 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
    };

    return (
        <Element name='india'>
            <div
                className="py-10"
                style={{
                    backgroundImage: 'url(https://png.pngtree.com/background/20211215/original/pngtree-watercolor-texture-indian-flag-background-picture-image_1454806.jpg)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <h1 className="text-6xl font-extrabold text-center text-black drop-shadow-md">1) INDIA</h1>

                <div className="py-20 space-y-20 px-6 md:px-10">
                    {india.map((item, key) => (
                        <motion.div
                            key={key}
                            variants={key % 2 === 0 ? fadeInLeft : fadeInRight}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.2 }}
                            className={`md:flex items-center gap-10 py-10 ${key % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                        >
                            <div className="text-2xl md:text-3xl text-center md:text-left font-bold text-black w-full md:w-1/3">
                                {item.name}
                            </div>

                            <div className="flex flex-col items-center text-center max-w-md mx-auto bg-yellow-300 bg-opacity-90 rounded-xl shadow-xl p-6 transition duration-500 hover:scale-105 hover:shadow-2xl w-full md:w-2/3">
                                <img
                                    className="h-60 w-80 object-cover rounded-md mb-4 transition-transform duration-300 hover:rotate-1 hover:scale-105"
                                    src={item.link}
                                    alt={item.name}
                                />
                                <p className="text-lg font-medium text-gray-700">
                                    {item.para}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Element>
    );
}
