import React from 'react'

export default function United_States() {
     let united = [
            { name: " (i)Centralia ", link: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Graffiti_Highway_-_Centralia%2C_Pennsylvania_%282019%29_b.jpg/250px-Graffiti_Highway_-_Centralia%2C_Pennsylvania_%282019%29_b.jpg" , para:`Centralia, Pennsylvania, is a near-ghost town known for its persistent underground coal mine fire that has been burning since 1962. The fire, originating in a landfill and spreading to the coal seams, has led to the evacuation and demolition of most of the town, leaving behind a landscape of abandoned streets and homes.`},
            { name: " (ii)Hashima Island  ", link: "https://i.insider.com/59a9b31952c08026008b4a92?width=800&format=jpeg&auto=webp", para: "Hashima Island, also known as Battleship Island, is located off the coast of Nagasaki, Japan, not the U.S. North Brother Island, in New York City's East River, is often compared to Hashima Island due to its history as an abandoned island with remnants of past infrastructure." },
            { name: " (iii)The City Hall Subway Station  ", link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1LT9828xOsLCR4BTIgatvdQ1Zvrr-5NuJPLS8MDNy1eZos00g&s", para: " The City Hall Subway Station in New York City, once the southern terminal of the city's first subway line, is a historic and architecturally significant landmark. Though no longer in regular passenger service, the station is still used as a turnaround loop for the 6 train." },
            { name: " (iv)Eastern State Penitentiary  ", link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoH4kFpraDnk1Og1yWt5rKYGaC3BlhTfeCrQ&s", para: "Eastern State Penitentiary, located in Philadelphia, Pennsylvania, is a historic landmark that was once the most famous and expensive prison in the world. It was the first true 'penitentiary', designed to inspire penitence in its inmates through solitary confinement and strict discipline." },
            { name: " (v)Detroit’s Packard Automotive Plant  ", link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs5-sNa2_cw6I06Ew5lrap_S_ikb3fLCooxQ&s", para: "The Packard Automotive Plant in Detroit, Michigan, is a historic manufacturing site that once produced luxury vehicles. Opened in 1903, it was a key part of Detroit's automotive industry and a notable example of early reinforced concrete construction." },
        ]
  return (
      <div
            className="py-10"
            style={{
                backgroundImage:
                    'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsW9CtB-P_GT--m2MhGfqoXZ2ZU3appJUHKw&s)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPositionX: 'center',
                backgroundPositionY: '60%',
            }}
        >
            <div className="text-6xl font-extrabold text-center">2) UNITED STATES</div>

            <div className="py-20  gap-10 items-center text-4xl px-10">
                {
                    united.map((item, key) => (
                        <div
                            key={key}
                            className={`md:flex items-center  py-10 ${key % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                                }`}
                        >                  
                                  <div className=' text-center font-bold'>{item.name}</div>

                            <div className="flex flex-col items-center text-center max-w-md">
                                <img
                                    className="h-60 w-80 object-cover rounded-md"
                                    src={item.link}
                                    alt={item.name}
                                />
                                <p className="text-xl mt-4 font-semibold">
                                    {item.para}
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
  )
}
