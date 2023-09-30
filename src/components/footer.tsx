import { faDev, faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Footer: React.FC = () => {

    return(
        <div className="footer">
            <div className="f-row-one">
                <div className="breif-info">
                    <div className="myName"><p className="name-text">Anthony Gavidia-Vasquez</p></div>
                    <div className="footer-about">
                        <p>A Web Developer & Artist catering to your web development needs
                            through creation of captivating online experiences with boundless creativity.</p>
                    </div>
                </div>
                <div className="social-section">
                    <div><h3 className="social-heading">My Social Media</h3></div>
                    <div className="icons-section">
                        <a target="_blank" rel="noreferrer" href="https://github.com/Gavisito"> <FontAwesomeIcon className="icons" icon={faGithub} color="white"/></a>
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/agavivasq/"> <FontAwesomeIcon className="icons" icon={faLinkedin} color="white"/></a>
                        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/gavisito/"> <FontAwesomeIcon className="icons" icon={faDev} color="white"/></a>
                        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/gavisito/"> <FontAwesomeIcon className="icons" icon={faInstagram} color="white"/></a>
                    </div>
                </div>
            </div>
            <div className="f-row-two">
                <p>Copyright © 2023 <a className="cr-link" href="#" target="_self" >Agavivasq</a></p>
            </div>
        </div>

    );
};

export default Footer;