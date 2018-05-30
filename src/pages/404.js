import Helmet from 'react-helmet'
import React from 'react'

const NotFound = (props) => (
    <div>
        <Helmet>
            <title>Not Found</title>
            <meta name="description" content="Blog Posts" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Not Found</h1>
                    </header>
                    <div>What you seek is not here.</div>
                </div>
            </section>
        </div>

    </div>
)

export default NotFound