import "../Styling/skillcard.css";
function SkillCard(props){
    return (
        <div className="card">
            <img alt="Skill logo" src={props.img}></img>
            <h1>{props.title}</h1>
            <p>{props.des}</p>
        </div>
    );
}

export default SkillCard;
