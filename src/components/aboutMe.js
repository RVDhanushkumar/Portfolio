import "../Styling/aboutme.css";
import pic from "../assets/me2.jpg"
import pic3 from "../assets/me6.jpg"
import pic4 from "../assets/me4.jpg"
import pic5 from "../assets/me5.jpg"


function AboutMe(){
    return(
        <div className="aboutme">
            <h1>--About Me--</h1>
            <div className="whole">
                <div className="left">
                    <p>Hi, I'm <span className="highlight">R V Dhanush Kumar</span>, a tech enthusiast and 3rd-year Information Technology student at ANITS. I have a deep passion for full stack development and Generative AI, with a strong grasp of programming languages like Java, Python, and JavaScript, as well as frameworks like React, Node.js, and Django. I enjoy building end-to-end solutions that not only deliver seamless user experiences but also push the boundaries of innovation. Recently, I've been exploring the fascinating world of Generative AI, developing applications that leverage AI models to create intelligent and creative outputs. My projects range from dynamic web applications to machine learning-driven systems that solve real-world problems. My journey includes internships in Python development, participation in hackathons, and a focus on utilizing cutting-edge technologies to create impactful solutions. I’m driven by the desire to learn, grow, and collaborate on projects that merge full stack development with the limitless potential of AI. Let’s create the future, one line of code at a time!</p>
                </div>
                <div className="right">
                    <div className="im im1">
                    <img className="pic2" alt="Me" src={pic}></img>
                    </div>
                    <div className="im im2">
                    <img className="pic2" alt="Me" src={pic3}></img>
                    </div>
                    <div className="im im3">
                    <img className="pic2" alt="Me" src={pic5}></img>
                    </div>
                    <div className="im im4">
                    <img className="pic2" alt="Me" src={pic4}></img>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;