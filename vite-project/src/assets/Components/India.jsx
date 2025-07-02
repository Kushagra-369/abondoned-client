import React from 'react';
import image1 from '../images/Kanda Kharak.jpg'

export default function India() {

    let india = [
        { name: " (i) Kanda Kharak", link: image1 , para:`Kanda Khark, located in Pauri Garhwal, Uttarakhand, is a part of the historical Garhwal region. While Kanda Khark itself may not have extensive historical records readily available, the broader Garhwal region boasts a rich history, particularly under the Katyuri and Garhwal kingdoms`},
        { name: " (ii) Kuldhara ", link: "https://images.moneycontrol.com/static-mcnews/2025/01/20250117040151_1.jpg", para: "Kuldhara is an abandoned village in the Jaisalmer district of Rajasthan, India. Established around the 13th century, it was once a prosperous village inhabited by Paliwal Brahmins." },
        { name: " (iii) Khobri ", link: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/bb/12/88/beautiful-nature-camp.jpg?w=400&h=300&s=1", para: "Khobri is a village located in the Sohna region of Gurugram (formerly Gurgaon) district in Haryana, India. It falls under the jurisdiction of the Harchandpur Gram Panchayat and the Sohna Block Panchayat." },
        { name: " (iv) Dhanushkodi ", link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1T8KVV4hT6n1_AzkbMnZ9tD4u9oE7K9tdYA&s", para: "Dhanushkodi is an abandoned town at the south-eastern tip of Pamban Island of the state of Tamil Nadu in India.[1] It is south-east of Pamban and is about 24 kilometres (15 mi) west of Talaimannar in Sri Lanka." },
        { name: " (v) Ross Island ", link: "https://www.go2andaman.com/wp-content/uploads/2021/01/Copy-of-Copy-of-Copy-of-1R6A1099-scaled-e1735714885168.jpg", para: " Ross Island, officially renamed Netaji Subhas Chandra Bose Island in 2018, is located approximately 3 km east of Port Blair in the Andaman and Nicobar Islands." },
    ]
    return (
        <div
            className="py-10"
            style={{
                backgroundImage:
                    'url(https://png.pngtree.com/background/20211215/original/pngtree-watercolor-texture-indian-flag-background-picture-image_1454806.jpg)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPositionX: 'center',
                backgroundPositionY: '60%',
            }}
        >
            <div className="text-6xl font-extrabold text-center">1) INDIA</div>

            <div className="py-20  gap-10 items-center text-4xl px-10">
                {
                    india.map((item, key) => (
                        <div
                            key={key}
                            className={`flex items-center  py-10 ${key % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                                }`}
                        >                  
                                  <div className=' font-bold'>{item.name}</div>

                            <div className="flex flex-col items-center text-center max-w-md">
                                <img
                                    className="h-60 w-80 object-cover rounded-md"
                                    src={item.link}
                                    alt={item.name}
                                />
                                <p className="text-xl font-semibold mt-4">
                                    {item.para}
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
