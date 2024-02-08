import React from "react";
import ServiceCard from "./ServiceCard";

import Robust from "../assets/Robust.svg";
import Reliable from "../assets/Reliable.svg";
import Scalable from "../assets/Scalable.svg";
import Innovative from "../assets/Innovative.svg";
import Accessible from "../assets/Accessible.svg";
import Fast from "../assets/Fast.svg";
import Navigational from "../assets/Navigational.svg";
import Soothing from "../assets/Soothing.svg";
import Functional from "../assets/Functional.svg";
import Secure from "../assets/Secure.svg";
import Customized from "../assets/Customized.svg";
import UserFriendly from "../assets/Userfriendly.svg";
import Affordable from "../assets/Affordable.svg";
import Optimization from "../assets/Optimization.svg";
import Productive from "../assets/Productive.svg";
import Analytics from "../assets/Analytics.svg";

function Service() {
  const services = [
    {
      title: "Product Development",
      description:
        "Product design goes beyond app aesthetics. A seamless user experience is achieved through business analysis, visual identity, UI/UX design principles, and thorough development.",
      svgImages: [
        {
          src: Robust,
          alt: "Robust Logo",
          className: "svg-img",
          label: "Robust",
          labelClass: "robust",
        },
        {
          src: Reliable,
          alt: "Reliable logo",
          className: "reliable-img",
          label: "Reliable",
          labelClass: "reliable",
        },
        {
          src: Scalable,
          alt: "Scalable logo",
          className: "scalable-img",
          label: "Scalable",
          labelClass: "scalable",
        },
      ],
    },
    {
      title: "DevOps Service",
      description:
        "Qualtech offers professional cloud development services to assist our clients in accelerating their digital transformation and fully utilizing cloud environments.",
      svgImages: [
        {
          src: Innovative,
          alt: "Innovative Logo",
          className: "innovative-img",
          label: "Innovative",
          labelClass: "innovative",
        },
        {
          src: Accessible,
          alt: "Accessible logo",
          className: "accessible-img",
          label: "Accessible",
          labelClass: "accessible",
        },
        {
          src: Fast,
          alt: "Fast logo",
          className: "fast-img",
          label: "Fast",
          labelClass: "fast",
        },
      ],
    },
    {
      title: "UI/UX Design",
      description:
        "Web design services include the process of designing the user interface (UI) and user experience (UX) of any web-based solution. In all of its web design projects, Qualtech strikes a great balance between technology, visual appeal, and business goals.",
      svgImages: [
        {
          src: Innovative,
          alt: "Innovative Logo",
          className: "innovatives-img",
          label: "Innovative",
          labelClass: "innovatives",
        },
        {
          src: Navigational,
          alt: "Navigational logo",
          className: "navigational-img",
          label: "Navigational",
          labelClass: "navigational",
        },
        {
          src: Soothing,
          alt: "Soothing logo",
          className: "soothing-img",
          label: "Soothing",
          labelClass: "soothing",
        },
      ],
    },
    {
      title: "Mobile App Development",
      description:
        "Mobile technologies enable businesses of all sizes to increase revenue, gain new competitive advantages. Qualtech offers high-quality cross-platform apps, native apps, and enterprise mobility solutions with enriched UI and UX.",
      svgImages: [
        {
          src: Functional,
          alt: "Functional Logo",
          className: "functional-img",
          label: "Functional",
          labelClass: "functional",
        },
        {
          src: Secure,
          alt: "Secure logo",
          className: "secure-img",
          label: "Secure",
          labelClass: "secure",
        },
        {
          src: Customized,
          alt: "Customized logo",
          className: "customized-img",
          label: "Customized",
          labelClass: "customized",
        },
      ],
    },
    {
      title: "Website Development",
      description:
        "Qualtech can assist you in getting your project up and running quickly. We offer website development services from scratch, including requirements gathering, design, implementation, maintenance, and support.",
      svgImages: [
        {
          src: UserFriendly,
          alt: "Userfriendly logo",
          className: "user-friendly-img",
          label: "User-friendly",
          labelClass: "userfriendly",
        },
        {
          src: Affordable,
          alt: "Affordable logo",
          className: "affordable-img",
          label: "Affordable",
          labelClass: "affordable",
        },
        {
          src: Innovative,
          alt: "Innovative Logo",
          className: "innovation-img",
          label: "Innovative",
          labelClass: "innovation",
        },
      ],
    },
    {
      title: "Digital Marketing",
      description:
        "Our main aim is to assist our customers in innovating, designing, and building solutions that promote their brand. We discuss digital marketing strategies, techniques, and tactics for achieving business objectives.",
      svgImages: [
        {
          src: Optimization,
          alt: "Optimization Logo",
          className: "optimization-img",
          label: "Optimization",
          labelClass: "optimization",
        },
        {
          src: Productive,
          alt: "Productive logo",
          className: "productive-img",
          label: "Productive",
          labelClass: "productive",
        },
        {
          src: Analytics,
          alt: "Analytics logo",
          className: "analytics-img",
          label: "Analytics",
          labelClass: "analytics",
        },
      ],
    },
  ];

  return (
    <div>
      <section>
        <div className="container">
          <h1>Our Services</h1>
          <h6>
            QualTech offers a wide range of digital transformation services,
            such as building web and mobile apps and giving advice on cloud
            computing
          </h6>
          <div className="cards">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Service;
