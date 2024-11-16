import SkillCard from "./SkillCard";
import "../Styling/skills.css"
import pic1 from "../assets/react_logo.png"
import pic2 from "../assets/html_logo.png"
import pic3 from "../assets/css_logo.png"
import pic4 from "../assets/js_logo.png"
import pic5 from "../assets/c_logo.png"
import pic6 from "../assets/c++_logo.png"
import pic7 from "../assets/python_logo.png"
import pic8 from "../assets/aws_logo.png"
import pic9 from "../assets/java_logo.png"
import pic10 from "../assets/mongo_logo.png"


function Skills(){
    const pro = {
        justifyContent: "Center",
        color: "white",
        marginLeft :"45%"
    };
    return (
        <div className="skills_whole">
            <h1 style={pro} id="skills_heading">Skills known</h1>
            <div className="skills">
                <SkillCard img={pic1} name="React"/>
                <SkillCard img={pic2} name="HTML"/>
                <SkillCard img={pic3} name="CSS"/>
                <SkillCard img={pic4} name="JavaScript"/>
                <SkillCard img={pic5} name="C Language"/>
                <SkillCard img={pic6} name="c++ Language"/>
                <SkillCard img={pic7} name="Python"/>
                <SkillCard img={pic8} name="AWS tools"/>
                <SkillCard img={pic9} name="Java"/>
                <SkillCard img={pic10} name="MongoDB"/>
            </div>
        </div>
        
    );
}

export default Skills;