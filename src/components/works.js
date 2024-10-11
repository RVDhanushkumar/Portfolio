import WorksSub from "./WorkSub";
import "../Styling/works.css";
import pic from "../accets/WomenSadetyApp.png"
import pic4 from "../accets/LandingPage.png"
import pic3 from "../accets/ToDoList.png"

function Works() {
    const workMain = {
        marginTop : "100px",
        textAlign : "center",
        justifyContent : "center",
        color : "white",
    };
    const heading = {
        marginTop : "150px",
        fontSize : "2.5rem",
        marginLeft:"80px"
    };
    const pp = {
        marginTop : "-20px",
        marginBottom :"100px",
    }

    return (
        <div className="Works_main" style={workMain}>
            <h1 style={{fontSize : "1rem"}}> -- Scoll Down To know more --</h1>
            <h1 className="work" style={heading}>Works</h1>
            <p className = "work" style={pp}>Lets check out some of my Top Projects</p>
            <WorksSub name="Women Safety App" link="https://github.com/RVDhanushkumar/WomenSafetyApp-Evasafe.git" pic={pic} />
            <WorksSub name="Student Registration Webpage" link="https://github.com/RVDhanushkumar/Student-Registration-Application.git" pic={pic} />
            <WorksSub name="To-Do List Webpage" link="https://github.com/RVDhanushkumar/To-do-List.git" pic={pic3} />
            <WorksSub name="Car Rental Landing page" link="https://github.com/RVDhanushkumar/Landing-Page.git" pic={pic4} />
            <a href="https://github.com/RVDhanushkumar?tab=repositories"><div className="button"> See more </div></a>
        </div>
    );
}

export default Works;
