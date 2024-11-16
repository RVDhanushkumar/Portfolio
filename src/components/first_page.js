import pic from "../assets/me1.jpg"; 
import "../Styling/first_page.css";
import r1 from "../assets/resume.pdf";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function FirstPage() {
    return (
        <div className="first_page">
            <div className="pic1">
                <img alt="My Pic" src={pic} className="pic" />
            </div>
            <div className="des">
                <h1>I'm Dhanush Kumar</h1>
                <p className="role">FullStack Developer | App Developer |</p>
                <div className="social-icons">
                    <a href="https://www.instagram.com/dhanush_awesome7" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} className="icon"/>
                    </a>
                    <a href="https://www.linkedin.com/in/dhanush-awesome" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} className="icon"/>
                    </a>
                    <a href="https://github.com/RVDhanushkumar" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} className="icon"/>
                    </a>
                    <a href="mailto:rapetidhanushkumar13@example.com"><FontAwesomeIcon icon={faEnvelope} className="icon"/></a>
                </div>
                <a href={r1} download="RVDhanushKumar_Resume.pdf">
                    <button className="resume-button">Download Resume</button>
                </a>
            </div>
        </div>
    );
}

export default FirstPage;
