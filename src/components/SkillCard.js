import "../Styling/skillcard.css";

function SkillCard(props){
    return (
        <div className="card">
            <a href=""><img alt="Skill logo" src={props.img}></img></a>
            <h1>{props.name}</h1>
        </div>
    );
}

export default SkillCard;
