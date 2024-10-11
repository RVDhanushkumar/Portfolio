import WorksSub from "./WorkSub";
import "../Styling/works.css"

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
    };
    const pp = {
        marginBottom :"200px",
    }

    return (
        <div className="Works_main" style={workMain}>
            <h1 style={{fontSize : "1rem"}}> -- Scoll Down To know more --</h1>
            <h1 className="work" style={heading}>Works</h1>
            <p className="work" style={pp}>Let's check out some of my projects</p>
            <WorksSub name="Women Safety App" link="https://github.com/RVDhanushkumar/WomenSafetyApp-Evasafe.git" />
            <WorksSub name="Student Registration Webpage" link="https://github.com/RVDhanushkumar/Student-Registration-Application.git" />
            <WorksSub name="To-Do List Webpage" link="https://github.com/RVDhanushkumar/To-do-List.git" />
            <WorksSub name="Car Rental Landing page" link="https://github.com/RVDhanushkumar/Landing-Page.git" />
            <a href="https://github.com/RVDhanushkumar?tab=repositories"><div className="button"> See more </div></a>
        </div>
    );
}

export default Works;
