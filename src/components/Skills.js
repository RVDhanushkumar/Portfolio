import SkillCard from "./SkillCard";

function Skills(){
    const pro = {
        justifyContent: "Center",
        color: "white",
        marginLeft :"45%"
    };
    return (
        <div className="skills_whole">
            <h1 style={pro}>--Skills known--</h1>
            <SkillCard img="" title="JAVA" des="" />
        </div>
        
    );
}

export default Skills;