import React from 'react'

const Footer = (props) => (
    <footer id="footer">
        <div className="inner">
            <ul className="icons">
                <li><a href="https://twitter.com/bhashkarsharma" className="icon alt fa-twitter"><span className="label">Twitter</span></a></li>
                <li><a href="https://linkedin.com/in/bhashkarsharma" className="icon alt fa-linkedin"><span className="label">LinkedIn</span></a></li>
                <li><a href="https://instagram.com/bhashkarsharma" className="icon alt fa-instagram"><span className="label">Instagram</span></a></li>
                <li><a href="https://github.com/bhashkarsharma" className="icon alt fa-github"><span className="label">GitHub</span></a></li>
                <li><a href="mailto:info@bhashkar.me" className="icon alt fa-envelope"><span className="label">Email</span></a></li>
            </ul>
            <ul className="copyright">
                <li>&copy; Bhashkar Sharma</li>
            </ul>
        </div>
    </footer>
)

export default Footer
