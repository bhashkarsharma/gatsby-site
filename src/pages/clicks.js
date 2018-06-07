import BannerLanding from '../components/BannerLanding'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import React from 'react'
import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'
import pic07 from '../assets/images/pic07.jpg'
import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'
import pic11 from '../assets/images/pic11.jpg'
import pic12 from '../assets/images/pic12.jpg'
import pic19 from '../assets/images/pic19.jpg'

const Clicks = (props) => (
    <div>
        <Helmet>
            <title>Clicks</title>
            <meta name="description" content="Photos I click" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Clicks</h1>
                    </header>
                </div>
            </section>
            <section id="two">
                <section>
                    <div className="box alt">
                        <div className="row 50% uniform">
                            <div className="4u 12u(medium)"><span className="image fit"><img src={pic01} alt="" /></span></div>
                            <div className="4u 12u(medium)"><span className="image fit"><img src={pic02} alt="" /></span></div>
                            <div className="4u 12u(medium)"><span className="image fit"><img src={pic03} alt="" /></span></div>
                            <div className="4u 12u(medium)"><span className="image fit"><img src={pic04} alt="" /></span></div>
                            <div className="4u 12u(medium)"><span className="image fit"><img src={pic05} alt="" /></span></div>
                            <div className="4u 12u(medium)"><span className="image fit"><img src={pic06} alt="" /></span></div>
                            <div className="4u 12u(medium)"><span className="image fit"><img src={pic08} alt="" /></span></div>
                            <div className="4u 12u(medium)"><span className="image fit"><img src={pic09} alt="" /></span></div>
                            <div className="4u 12u(medium)"><span className="image fit"><img src={pic10} alt="" /></span></div>
                            <div className="4u 12u(medium)"><span className="image fit"><img src={pic11} alt="" /></span></div>
                            <div className="4u 12u(medium)"><span className="image fit"><img src={pic12} alt="" /></span></div>
                            <div className="4u 12u(medium)"><span className="image fit"><img src={pic19} alt="" /></span></div>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    </div>
)

export default Clicks