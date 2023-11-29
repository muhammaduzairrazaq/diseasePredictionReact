import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,  faDownload,   } from '@fortawesome/free-solid-svg-icons'


import "../App.css"

export const Footer = () => {
    return (
        <section className="section-footer">
            <div>
                <h3>Find us on</h3>
                <FontAwesomeIcon icon={faEnvelope} />
                <FontAwesomeIcon icon={ faDownload } />
                
            </div>

        </section>
    );
};