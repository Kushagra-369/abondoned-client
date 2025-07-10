import React from 'react';
import image1 from '../images/Kanda Kharak.jpg';
import { Link, Element } from "react-scroll";
import { motion } from 'framer-motion';
import { Link as ScrollLink } from "react-scroll";
import Home2 from './Home2';
export default function India2() {

    const india = [
        {
            name: "Bhangarh Fort",
            link: "https://lakshmisharath.com/wp-content/uploads/2019/10/Bhangarh-Fort-15.jpg",
            para: `Bhangarh Fort, located in Rajasthan, India, is a 17th-century fort . Bhangarh Fort's stories revolve around a curse, with two main legends contributing to its reputation as a haunted place.`
        },
        {
            name: " Malcha Mahal",
            link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWY9yqBPUWWwPgBbPgBe-NGtnpTiua3j7Fxg&s",
            para: `Malcha Mahal, a 14th-century hunting lodge, is a historic ruin located in the Chanakyapuri area of Delhi, India. It's known for its connection to the Tughlaq dynasty and for its association with the self-proclaimed Begum Wilayat Mahal and her descendants. `
        },
        {
            name: "Aarey Colony ",
            link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAjzQntvziVJETnkUOhUoNxfz_7BAU8brBpg&s",
            para: `Aarey Milk Colony in Mumbai is rumored to be haunted. It's known for stories of paranormal activity, particularly along the roads that wind through the forest area`
        },
        {
            name: "Begunkodar railway station ",
            link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNjZGmSH-35CG5H3snaguQc1aUiCO924-Fxg&s",
            para: `Begunkodar railway station, located in West Bengal, India, is infamously known as a haunted railway station. It gained this reputation due to stories of a ghostly woman in white who allegedly haunts the platforms and tracks.`
        },
        {
            name: "Sanjay Van ",
            link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8C1KlVJl7GBgBgUSBBOSm6LkJVsBc68C9BA&s",
            para: `Sanjay Van is a large urban forest located in Delhi , it is a large urban forest located in Delhi`
        },
        {
            name: "The Lambi Dehar Mines",
            link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwwFmUWchQaPo-dv0sgjzIS1SIPiWYWELCrAiuofdDPKmY541a&s",
            para: `The Lambi Dehar Mines, near Mussoorie, are infamous for their tragic history and alleged haunting. In the 1990s, the mines were the site of a major disaster where over 50,000 workers are said to have died due to poor working conditions and respiratory illnesses caused by inhaling limestone dust`
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
        <Element name='india2'>
            <div
                className="py-10"
                style={{
                    backgroundImage: 'url(https://i.pinimg.com/736x/19/59/c8/1959c87b951caabd8805cc7566723e96.jpg)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <h1 className="text-6xl font-extrabold text-center text-white drop-shadow-md">1) INDIA</h1>

                <div className="py-20 space-y-20 px-6 md:px-10">
                    {india.map((item, key) => (
                        <motion.div
                            key={key}
                            variants={key % 2 === 0 ? fadeInLeft : fadeInRight}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.5 }}
                            className={`md:flex items-center gap-10 py-10 ${key % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                        >
                            <div className="text-2xl md:text-4xl text-center md:text-left font-bold text-white w-full md:w-1/3">
                                {item.name}
                            </div>

                            <div className="flex flex-col items-center text-center max-w-md mx-auto bg-red-600  bg-opacity-90 rounded-xl shadow-xl p-6 transition duration-500 hover:scale-105 hover:shadow-2xl w-full md:w-500">
                                <img
                                    className="h-60 w-80 object-cover  rounded-md mb-4 transition-transform duration-300 hover:rotate-1 hover:scale-105"
                                    src={item.link}
                                    alt={item.name}
                                />
                                <p className="text-lg font-bold text-cyan-400">
                                    {item.para}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <ScrollLink
                    to="home2"
                    smooth={true}
                    duration={500}
                    offset={-50}
                >
                    <div className="text-center text-2xl hover:text-red-500 cursor-pointer">
                        Back to top
                    </div>
                </ScrollLink>
            </div>
        </Element>
    );
}
