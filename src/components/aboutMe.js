import "../Styling/aboutme.css";
import pic from "../assets/me2.jpg";
import pic3 from "../assets/me6.jpg";
import pic4 from "../assets/me4.jpg";
import pic5 from "../assets/me5.jpg";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

function Number({ n, startAnimation }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: startAnimation ? n : 0, // Animation starts when startAnimation is true
    delay: 500,
    config: { mass: 1, tension: 20, friction: 10 }
  });

  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}

function AboutMe() {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (inView) {
      setAnimate(true);
    } else {
      setAnimate(false);
    }
  }, [inView]);

  return (
    <div className="aboutme" ref={ref}>
      <h1>--About Me--</h1>
      <div className="whole">
        <div className="left">
          <p>
            Hi, I'm <span className="highlight">R V Dhanush Kumar</span>, a tech enthusiast and 3rd-year Information Technology student at ANITS. I have a deep passion for full stack development and Generative AI, with a strong grasp of programming languages like Java, Python, and JavaScript, as well as frameworks like React, Node.js, and Django. I enjoy building end-to-end solutions that not only deliver seamless user experiences but also push the boundaries of innovation. Recently, I've been exploring the fascinating world of Generative AI, developing applications that leverage AI models to create intelligent and creative outputs. My projects range from dynamic web applications to machine learning-driven systems that solve real-world problems. My journey includes internships in Python development, participation in hackathons, and a focus on utilizing cutting-edge technologies to create impactful solutions. I’m driven by the desire to learn, grow, and collaborate on projects that merge full stack development with the limitless potential of AI. Let’s create the future, one line of code at a time!
          </p>
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
      <div className="num_info">
        <div className="insta count">
          <h1><Number n={574} startAnimation={animate} /></h1>
          <p>Instagram Followers</p>
        </div>
        <div className="linkedin count">
          <h1><Number n={500} startAnimation={animate} />+</h1>
          <p>LinkedIn Connections</p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
