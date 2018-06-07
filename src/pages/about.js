import BannerLanding from '../components/BannerLanding'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import React from 'react'
import about from '../assets/images/about.jpg'

const About = (props) => (
    <div>
        <Helmet>
            <title>About</title>
            <meta name="description" content="About Page" />
        </Helmet>

        <BannerLanding accent="style4" heading="About" byline="What I do" background={about} />

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <div>I am a web developer with 8+ years of experience.</div>
                    <div>Originally from India, presently working in Germany.</div>
                    <div>I am passionate about the open web and great user experiences.</div>
                    <div>I spend a lot of time behind the keyboard. Sometimes writing for humans, mostly for computers.</div>
                    <div>The excitement of learning new things is the reason I get out of bed in the morning.</div>
                    <div>You can find my <a target="_blank" rel="noopener noreferrer" href="http://static.bhashkar.me/resume.pdf">resume</a> here.</div>
                </div>
            </section>
        </div>

    </div>
)

export default About