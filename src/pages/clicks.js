import BannerLanding from '../components/BannerLanding'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import React from 'react'
import camera from '../assets/images/camera.jpg'
import pic01 from '../assets/images/clicks/pic01.jpg'
import pic02 from '../assets/images/clicks/pic02.jpg'
import pic03 from '../assets/images/clicks/pic03.jpg'
import pic04 from '../assets/images/clicks/pic04.jpg'
import pic05 from '../assets/images/clicks/pic05.jpg'
import pic06 from '../assets/images/clicks/pic06.jpg'
import pic07 from '../assets/images/clicks/pic07.jpg'
import pic08 from '../assets/images/clicks/pic08.jpg'
import pic09 from '../assets/images/clicks/pic09.jpg'
import pic10 from '../assets/images/clicks/pic10.jpg'
import pic11 from '../assets/images/clicks/pic11.jpg'
import pic12 from '../assets/images/clicks/pic12.jpg'
import pic19 from '../assets/images/clicks/pic19.jpg'

const Clicks = (props) => (
    <div>
        <Helmet>
            <title>Clicks</title>
            <meta name="description" content="Photos I click" />
        </Helmet>

        <BannerLanding accent="style3" heading="Clicks" byline="Photos I click" background={camera} />

        <div id="main" className="alt">
            <section id="one">
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