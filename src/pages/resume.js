import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import React from 'react'

const Resume = (props) => (
    <div>
        <Helmet>
            <title>Resume</title>
            <meta name="description" content="Resume" />
        </Helmet>

        <div>
            <h1 className="main">Bhashkar Sharma</h1>
            <div>
                <div className="left">
                    <div className="area summary">
                        <h2>Product-focused generalist software engineer with an eye for detail.</h2>
                        <div>
                            I am passionate about great products and a company culture that
                            fosters growth and helps people explore and learn. I have worked
                            as the second employee in a fast-moving startup; and also in the
                            team responsible for the user dashboard in a company with ~300
                            employees and millions in revenue. I have experience working both
                            as an individual contributor and with wonderful teams, driving
                            products from inception to launch – working closely with company
                            founders, tech teams, and product managers. Have built web apps,
                            mobile apps, REST APIs, and SDKs used by thousands of users
                            scaling to millions of requests/day – working on both frontend and
                            backend. Have experience handling customer support, hiring,
                            interviewing and mentoring people. Have been involved with product
                            decisions. Deployed products successfully at client locations,
                            providing them with the support they needed. I strive for using
                            clean patterns in code and a sane User Experience. Had the
                            opportunity to give talks at tech conferences – JSFoo and
                            Droidcon.
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="area contact">
                        <h3>Contact</h3>
                        <div className="section">
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.bhashkar.me"
                            >
                                <span className="icon">
                                    <i className="fa fa-address-book" />
                                </span>
                                <span className="info">http://bhashkar.me</span>
                            </a>
                        </div>
                        <div className="section">
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="mailto:info@bhashkar.me"
                            >
                                <span className="icon">
                                    <i className="fa fa-envelope" />
                                </span>
                                <span className="info">info@bhashkar.me</span>
                            </a>
                        </div>
                        <div className="section">
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://linkedin.com/in/bhashkarsharma"
                            >
                                <span className="icon">
                                    <i className="fa fa-linkedin" />
                                </span>
                                <span className="info">@bhashkarsharma</span>
                            </a>
                        </div>
                        <div className="section">
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://github.com/bhashkarsharma"
                            >
                                <span className="icon">
                                    <i className="fa fa-github" />
                                </span>
                                <span className="info">@bhashkarsharma</span>
                            </a>
                        </div>
                        <div className="section">
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://twitter.com/bhashkarsharma"
                            >
                                <span className="icon">
                                    <i className="fa fa-twitter" />
                                </span>
                                <span className="info">@bhashkarsharma</span>
                            </a>
                        </div>
                        <div className="section">
                            <span className="icon">
                                <i className="fa fa-location-arrow" />
                            </span>
                            <span className="info">Hamburg, Germany</span>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="right">
                    <div className="area skills">
                        <h3>Skills</h3>
                        <div className="section">
                            <div>Angular</div>
                            <div>HTML5</div>
                            <div>CSS3</div>
                            <div>Javascript/Typescript</div>
                            <div>NodeJS</div>
                            <div>AWS</div>
                            <div>Python</div>
                            <div>Django</div>
                            <div>CI/CD</div>
                            <div>Shell Script</div>
                            <div>Web Development</div>
                            <div>User Experience</div>
                            <div>Agile Methodologies</div>
                            <div>Mobile Web Applications</div>
                        </div>
                    </div>
                    <div className="area patents">
                        <h3>Patents</h3>
                        <div className="section">
                            <div className="title">Method and system for continuous rendering of web content</div>
                            <div className="meta">
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=7&p=1&f=G&l=50&d=PG01&S1=bhashkar&OS=bhashkar&RS=bhashkar"
                                >
                                    <span className="num">us 14/148696</span>
                                </a>
                            </div>
                            <div className="description">
                                In embodiments, the present invention provides a method and a
                                system for displaying web content on a mobile device. The method
                                and system includes receiving the web content by the mobile
                                device. The web content is received on a user requesting for the
                                web content. Further, the method and system includes processing
                                the web content. The step of processing the web content includes
                                dividing the received web content into sections. Furthermore,
                                the method and system includes rendering a section of the web
                                content. In addition, the method and system includes displaying
                                the rendered section of the web content on the mobile device of
                                a user.
                            </div>
                        </div>
                        <div className="section">
                            <div className="title">System and method for customization of web content</div>
                            <div className="meta">
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=/netahtml/PTO/srchnum.html&r=1&f=G&l=50&s1=20140101284.PGNR."
                                >
                                    <span className="num">us 61695480</span>
                                </a>
                            </div>
                            <div className="description">
                                The present invention provides a method and system for
                                customizing web content for a mobile computing device associated
                                with a user over a network. The method and system include
                                receiving a request for web content from the mobile computing
                                device associated with the user and parsing acquired web content
                                into separate one or more component parts based on the received
                                request. The acquired web content is collected from a publisher
                                of one or more publishers. Further, the method and system
                                include storing the separated one or more component parts
                                individually for the publisher of the one or more publishers,
                                determining display capability of a browsing entity residing on
                                the mobile computing device and enabling customization of the
                                separated one or more component parts of the web content based
                                on the determined display capability. Accordingly, the user
                                views the customized web content.
                            </div>
                        </div>
                    </div>
                    <div className="area languages">
                        <h3>Languages</h3>
                        <div>English - Full</div>
                        <div>German - Basic</div>
                        <div>Hindi - Native</div>
                    </div>
                    <div className="area education">
                        <h3>Education</h3>
                        <div className="section">
                            <div className="college">College of Engineering Roorkee</div>
                            <div className="course">B. Tech. in Information Technology<span className="duration">2005-2009</span></div>
                            <div className="description">
                                Created websites. Gave web development lectures. Conceptualized
                                and implemented the Yearbook. Promoted Linux and Open-Source.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="left">
                    <div className="area experience">
                        <h3>Experience</h3>
                        <div className="section">
                            <div className="position">Frontend Engineer<span className="duration">Jun 2016-Present</span></div>
                            <div className="company">Smaato<span className="location">Hamburg, DE</span></div>
                            <div className="projects">
                                <div className="section">
                                    <div className="title">SPX</div>
                                    <div className="description">
                                        The SPX Dashboard allows publishers to configure ad slots on
                                        their sites and apps, integrate Smaato with their
                                        properties; and track ad revenue from a central location.
                                    </div>
                                    <div className="responsibility">
                                        Creating the publisher Dashboard in Angular 5. Ownership of
                                        the build tooling and styling infrastructure of the product.
                                        Helped build test tooling for web and native SDKs.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section">
                            <div className="position">Lead Engineer<span className="duration">Aug 2015-Mar 2016</span></div>
                            <div className="company">MobStac<span className="location">Bengaluru, IN</span></div>
                            <div className="projects">
                                <div className="section">
                                    <div className="title">Beaconstac</div>
                                    <div className="description">
                                        Beaconstac platform brings BLE-based messaging, analytics
                                        and navigation capabilities to mobile devices.
                                    </div>
                                    <div className="responsibility">
                                        Architected and implemented the backend APIs, user
                                        interface, Android SDK and App for the platform.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section">
                            <div className="position">Senior Engineer<span className="duration">Oct 2013-Jul 2015</span></div>
                            <div className="company">MobStac<span className="location">Bengaluru, IN</span></div>
                            <div className="projects">
                                <div className="section">
                                    <div className="title">CMXstac</div>
                                    <div className="description">
                                        Platform on top of Cisco CMX to allow indoor navigation and
                                        messaging.
                                    </div>
                                    <div className="responsibility">
                                        Studied Cisco's CMX indoor location system; designed and
                                        built the backend, APIs and UI for management of rules,
                                        messaging and analytics.
                                    </div>
                                </div>
                                <div className="section">
                                    <div className="title">MobStac for Developers</div>
                                    <div className="description">
                                        Tools for developers to build HTML5 and native apps on the
                                        MobStac platform.
                                    </div>
                                    <div className="responsibility">
                                        Created the framework, APIs and Javascript SDKs. Interacted
                                        with developers from development agencies and helped them
                                        get on board.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section">
                            <div className="position">Core Platform Engineer<span className="duration">Feb 2010-Sep 2013</span></div>
                            <div className="company">MobStac<span className="location">Bengaluru, IN</span></div>
                            <div className="projects">
                                <div className="section">
                                    <div className="title">Touchsite</div>
                                    <div className="description">
                                        An app-like experience for websites on touch devices when
                                        the devices still were evolving and had lesser capabilities
                                        and processing power. Launched at TechCrunch Disrupt in San
                                        Francisco.
                                    </div>
                                    <div className="responsibility">
                                        Primary engineer and researcher for building a touch
                                        experience for websites. Researched a lot of cutting-edge
                                        technologies and implemented a solution that was later
                                        adopted by some of the big names in the Industry.
                                    </div>
                                </div>
                                <div className="section">
                                    <div className="title">MobStac Publisher Platform</div>
                                    <div className="description">
                                        An MBaaS, device sensitive digital content platform that
                                        takes the non-formalized data from existing sources
                                        (DBs/Websites/Documents), scrape, scrub and formalize it.
                                        This data then adapted and served on any device (OS) &
                                        application combination (android/iOS/windows+browser/native
                                        apps) keeping in mind the capabilities of device like
                                        display dimensions, multimedia support, script support,
                                        network quality support etc. At peak the platform used to
                                        handle 20 million requests a day. Some of India's biggest
                                        news sites used this platform.
                                    </div>
                                    <div className="responsibility">
                                        The first product we built at MobStac. I was involved in all
                                        aspects of design, architecting, building, integrating with
                                        external services and deploying the solution to be able to
                                        scale to millions of requests per day. Interacted with
                                        customers to understand their requirements. Handled customer
                                        support for a couple of years. Received the Responsiveness
                                        award multiple times. Was involved in interviewing, training
                                        and mentoring interns and new employees.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Resume