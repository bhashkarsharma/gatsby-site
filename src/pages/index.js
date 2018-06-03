import Banner from '../components/Banner'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import React from 'react'
import about from '../assets/images/about.jpg'
import blog from '../assets/images/blog.jpg'
import camera from '../assets/images/camera.jpg'
import lab from '../assets/images/lab.jpg'

class HomeIndex extends React.Component {
    render() {
        const siteTitle = this.props.data.site.siteMetadata.title
        const siteDescription = this.props.data.site.siteMetadata.description

        return (
            <div>
                <Helmet>
                    <title>{siteTitle}</title>
                    <meta name="description" content={siteDescription} />
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{ backgroundImage: `url(${blog})` }}>
                            <header className="major">
                                <h3>Posts</h3>
                                <p>Stuff I write</p>
                            </header>
                            <Link to="/blog" className="link primary"></Link>
                        </article>
                        <article style={{ backgroundImage: `url(${camera})` }}>
                            <header className="major">
                                <h3>Clicks</h3>
                                <p>Photos I click</p>
                            </header>
                            <Link to="/clicks" className="link primary"></Link>
                        </article>
                        <article style={{ backgroundImage: `url(${lab})` }}>
                            <header className="major">
                                <h3>Playground</h3>
                                <p>Fun with code</p>
                            </header>
                            <Link to="/lab" className="link primary"></Link>
                        </article>
                        <article style={{ backgroundImage: `url(${about})` }}>
                            <header className="major">
                                <h3>About</h3>
                                <p>What I do</p>
                            </header>
                            <Link to="/about" className="link primary"></Link>
                        </article>
                    </section>
                </div>
            </div>
        )
    }
}

export default HomeIndex

export const pageQuery = graphql`
    query PageQuery {
        site {
            siteMetadata {
                title
                description
            }
        }
    }
`