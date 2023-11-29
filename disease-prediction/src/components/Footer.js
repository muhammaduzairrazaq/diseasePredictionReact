import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faSquareXTwitter, faSquareGithub } from '@fortawesome/free-brands-svg-icons'


import "../App.css"

export const Footer = () => {
    return (
        <section className="section-footer">
            <div>
                <h3>Find us on</h3>
                <a href="#likedin">
                <FontAwesomeIcon icon={faLinkedin} size='2xl'/>
                </a>
                <a href="#x">
                <FontAwesomeIcon icon={faSquareXTwitter} size='2xl' />
                </a>
                <a href="#github">
                <FontAwesomeIcon icon={faSquareGithub} size='2xl' />
                </a>
            </div>
            <p>&copy; 2023 Your Adax. All rights reserved.</p>

        </section>
    );
};