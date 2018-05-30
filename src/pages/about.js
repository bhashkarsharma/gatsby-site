import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import React from 'react'

const About = (props) => (
    <div>
        <Helmet>
            <title>About</title>
            <meta name="description" content="About Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>About</h1>
                    </header>
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