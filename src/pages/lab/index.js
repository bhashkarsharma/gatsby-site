import './index.scss'

import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import React from 'react'

const Lab = (props) => (
    <div>
        <Helmet>
            <title>Playground</title>
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Playground</h1>
                    </header>
                    <div className="links">
                        <div><Link to="/lab/voronoi">Voronoi</Link></div>
                        <div><Link to="/lab/particles">Particles</Link></div>
                        <div><Link to="/lab/helvetica">Helvetica</Link></div>
                        <div><Link to="/lab/digilog">Digilog</Link></div>
                        <div><Link to="/lab/segment">Segment</Link></div>
                        <div><Link to="/lab/set">Set</Link></div>
                    </div>
                </div>
            </section>
        </div>

    </div>
)

export default Lab