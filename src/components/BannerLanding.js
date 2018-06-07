import React from 'react'

const BannerLanding = (props) => (
    <section id="banner" className={props.accent} style={{ backgroundImage: props.background && `url(${props.background}` }}>
        <div className="inner">
            <header className="major">
                <h1>{props.heading ? props.heading : 'Landing'}</h1>
            </header>
            <div className="content">
                <p>{props.byline ? props.byline : 'Lorem ipsum dolor sit amet.'}</p>
            </div>
        </div>
    </section>
)

BannerLanding.propTypes = {
    accent: React.PropTypes.string,
    background: React.PropTypes.string,
    heading: React.PropTypes.string,
    byline: React.PropTypes.string
}

export default BannerLanding
