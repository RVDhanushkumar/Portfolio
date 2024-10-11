import { height } from "@fortawesome/free-brands-svg-icons/fa42Group";
import pic1 from "../accets/Project.png";
function WorksSub(props){
    const works_sub = {
        color : "white",
        display:"flex",
        justifyContent : "center"
    };
    const info={
        paddingTop: "200px",
        marginRight : "100px",
    };
    const line = {
        width: "2px",
        height: "600px",
        backgroundColor: "silver",
        marginRight : "100px",
        boxShadow : "0px 0px 20px white"
    }
    const btn = {
        color : "black",
        backgroundColor : "white",
        textDecoration: "none",
        borderRadius : "10px",
        padding : "10px",
    }
    const dot = {
        position : "fixed",
        top: "0%",
        left : "10%",
        backgroundColor: "aqua",
        height : "20px",
        width : "20px",
        borderRadius : "20px",
        boxShadow : "0px 0px 20px white"
    };
    const pic ={
        paddingTop :"100px",
        height :"400px"
    };
    return(
        <div className="works_sub" style={works_sub}>
            <div className="info" style={info} >
                <h1>{props.name}</h1>
                <a href={props.link}><h2 style={btn}>See this Project</h2></a>
            </div>
            <div class="vertical-line" style={line}></div>
            <div className="pro">
                <img src= {pic1} alt="project pic" style={pic}></img>
            </div>
        </div>
    );
}

export default WorksSub;