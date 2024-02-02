import React, { useState } from "react";

function Cards(){
    const [cards] = useState([
        {
            title:"Product Development",
            text:`Product design goes beyond app aesthetics.
            A seamless user experience is achieved
            through business analysis, visual identity,
            UI/UX design principles, and thorough
            development.`
        },
        {
            title:"DevOps Service",
            text:`Qualtech offers professional cloud
            development services to assist our clients
            in accelerating their digital transformation
            and fully utilizing cloud environments.`
        },
        {
            title:"UI/UX Design",
            text:`Web design services include the process of
            designing the user interface (UI) and
            user experience (UX) of any web-based
            solution. In all of its web design projects,
            Qualtech strikes a great balance between
            technology, visual appeal, and business
            goals.`
        },
        {
            title:"Mobile App Development",
            text:`Mobile technologies enable businesses of
            all sizes to increase revenue, gain new
            competitive advantages. Qualtech offers
            high-quality cross-platform apps, native
            apps, and enterprise mobility solutions
            with enriched UI and UX.`
        },
        {
            title:"Website Development",
            text:`Qualtech can assist you in getting your
            project up and running quickly. We offer
            website development services from scratch,
            including requirements gathering, design,
            implementation, maintenance, and support.`
        },
        {
            title:"Digital Marketing",
            text:`Our main aim is to assist our customers in
            innovating, designing, and building
            solutions that promote their brand.
            We discuss digital marketing strategies,
            techniques, and tactics for achieving
            business objectives.`
        },
    ])
    return(
       <div>
        <section>
            <div className="container">
                <h1>Our Services</h1>
                <div className="cards">
                    {
                        cards.map((card,i) => (

                    <div key={i} className="card">
                        <h3 className="title">{card.title}</h3>
                        <p className="text">{card.text}</p>
                        <button className="btn"><p>Explore</p></button>
                    </div>
                     ))
                        }
                </div>
            </div>
        </section>
       </div>
    )
}
export default Cards;