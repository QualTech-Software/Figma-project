import React from "react";
import "./Sdata.css";
import Robust from './svg/Robust (1).svg';
import Reliable from './svg/Reliable.svg';
import Scalable from './svg/Scalable (1).svg';
import Innovative from './svg/Innovative.svg';
import Accessible from './svg/Accessible.svg';
import Fast from './svg/Fast.svg'
import Navigational from './svg/Navigational.svg';
import Soothing from './svg/Soothing.svg';
import Functional from './svg/Functional.svg';
import Secure from './svg/Secure.svg';
import Customized from './svg/Customized.svg';
import UserFriendly from './svg/Userfriendly.svg';
import Affordable from './svg/Affordable.svg';
import Optimization from './svg/Optimization.svg';
import Productive from './svg/Productive.svg';
import Analytics from './svg/Analytics.svg';

function Sdata() {
  return (
    <div>
      <section>
        <div className="container">
          <h1>Our Services</h1>
          <h6>QualTech offers a wide range of digital transformation services, such
              as building web and mobile apps and giving advice on cloud computing</h6>
          <div className="cards">
            {/* First row of cards */}
           
            <div className="card">
            <div className="svg-container">
                <img src={Robust} alt="Robust Logo" className="svg-img" />
                <p className="svg-label robust">Robust</p>
                <img src={Reliable} alt="Reliable logo" className="reliable-img"/>
                <p className="svg-label reliable">Reliable</p>
                <img src={Scalable} alt="Scalable logo" className="scalable-img"/>
                <p className="svg-label scalable">Scalable</p>
              </div>
              <div className="card-data">

                <div className="title">Product Development</div>
                <div className="text">
                  Product design goes beyond app aesthetics. A seamless user
                  experience is achieved through business analysis, visual
                  identity, UI/UX design principles, and thorough development.
                </div>
                <div className="btn">
                    <p>Explore</p>
                </div>
              </div>
            </div>

            <div className="card">
            <div className="svg-container">
                <img src={Innovative} alt="Innovative Logo" className="innovative-img" />
                <p className="svg-label innovative">Innovative</p>
                <img src={Accessible} alt="Accessible logo" className="accessible-img"/>
                <p className="svg-label accessible">Accessible</p>
                <img src={Fast} alt="Fast logo" className="fast-img"/>
                <p className="svg-label fast">Fast</p>
              </div>
              <div className="card-data">
                <div className="title">DevOps Service</div>
                <div className="text">
                  Qualtech offers professional cloud development services to
                  assist our clients in accelerating their digital
                  transformation and fully utilizing cloud environments.
                </div>
                <div className="btn">
                    <p>Explore</p>
                </div>
              </div>
            </div>

            <div className="card">
            <div className="svg-container">
                <img src={Innovative} alt="Innovative Logo" className="innovatives-img" />
                <p className="svg-label innovatives">Innovative</p>
                <img src={Navigational} alt="Navigational logo" className="navigational-img"/>
                <p className="svg-label navigational">Navigational</p>
                <img src={Soothing} alt="Soothing logo" className="soothing-img"/>
                <p className="svg-label soothing">Soothing</p>
              </div>
              <div className="card-data">
                <div className="title">UI/UX Design</div>
                <div className="text">
                  Web design services include the process of designing the user
                  interface (UI) and user experience (UX) of any web-based
                  solution. In all of its web design projects, Qualtech strikes
                  a great balance between technology, visual appeal, and
                  business goals.
                </div>
                <div className="btn">
                    <p>Explore</p>
                </div>
              </div>
            </div>

            {/* Second row of cards */}
            <div className="card">
            <div className="svg-container">
                <img src={Functional} alt="Functional Logo" className="functional-img" />
                <p className="svg-label functional">Functional</p>
                <img src={Secure} alt="Secure logo" className="secure-img"/>
                <p className="svg-label secure">Secure</p>
                <img src={Customized} alt="Customized logo" className="customized-img"/>
                <p className="svg-label customized">Customized</p>
              </div>
              <div className="card-data">
                <div className="title">Mobile App Development</div>
                <div className="text">
                  Mobile technologies enable businesses of all sizes to increase
                  revenue, gain new competitive advantages. Qualtech offers
                  high-quality cross-platform apps, native apps, and enterprise
                  mobility solutions with enriched UI and UX.
                </div>
                <div className="btn">
                    <p>Explore</p>
                </div>
              </div>
            </div>

            <div className="card">
            <div className="svg-container">
                <img src={UserFriendly} alt="Userfriendly logo" className="user-friendly-img"/>
                <p className="svg-label userfriendly">User-friendly</p>
                <img src={Affordable} alt="Affordable logo" className="affordable-img"/>
                <p className="svg-label affordable">Affordable</p>
                <img src={Innovative} alt="Innovative Logo" className="innovative-img" />
                <p className="svg-label innovative">Innovative</p>
              </div>
              <div className="card-data">
                <div className="title">Website Development</div>
                <div className="text">
                  Qualtech can assist you in getting your project up and running
                  quickly. We offer website development services from scratch,
                  including requirements gathering, design, implementation,
                  maintenance, and support.
                </div>
                <div className="btn">
                    <p>Explore</p>
                </div>
              </div>
            </div>

            <div className="card">
            <div className="svg-container">
                <img src={Optimization} alt="Optimization Logo" className="optimization-img" />
                <p className="svg-label optimization">Optimization</p>
                <img src={Productive} alt="Productive logo" className="productive-img"/>
                <p className="svg-label productive">Productive</p>
                <img src={Analytics} alt="Analytics logo" className="analytics-img"/>
                <p className="svg-label analytics">Analytics</p>
              </div>
              <div className="card-data">
                <div className="title">Digital Marketing</div>
                <div className="text">
                  Our main aim is to assist our customers in innovating,
                  designing, and building solutions that promote their brand.
                  We discuss digital marketing strategies, techniques, and
                  tactics for achieving business objectives.
                </div>
                <div className="btn">
                    <p>Explore</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
export default Sdata;
