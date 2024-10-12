import pic from "../accets/me1.jpg"; 
import "../Styling/first_page.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
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
                <a href="https://www.instagram.com/dhanush_awesome7"><FontAwesomeIcon icon={faInstagram} className="icon"/></a>
                <a href="https://www.linkedin.com/in/dhanush-awesome"><FontAwesomeIcon icon={faLinkedin} className="icon"/></a>
                <a href="https://github.com/RVDhanushkumar"><FontAwesomeIcon icon={faGithub} className="icon"/></a>
            </div>
        </div>
    );
}

export default FirstPage;
