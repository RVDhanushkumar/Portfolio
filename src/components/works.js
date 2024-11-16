import WorksSub from "./WorkSub";
import "../Styling/works.css";
import pic from "../assets/WomenSadetyApp.png";
import pic2 from "../assets/SRA.png";
import pic4 from "../assets/LandingPage.png";
import pic3 from "../assets/ToDoList.png";

function Works() {
    const workMain = {
        marginTop: "50px",
        textAlign: "center",
        justifyContent: "center",
        color: "white",
    };
    const heading = {
        marginTop: "150px",
        fontSize: "2.5rem",
        marginLeft: "-10px",
    };
    const pp = {
        marginTop: "-20px",
        marginBottom: "100px",
    };

    return (
        <div className="Works_main" style={workMain}>
            <h1 style={{ fontSize: "1rem" }}> -- Scroll Down To Know More --</h1>
            <h1 className="work_head" style={heading}>Works</h1>
            <p className="work" style={pp}>Let's check out some of my Top Projects</p>
            <WorksSub name="Women Safety App" link="https://github.com/RVDhanushkumar/WomenSafetyApp-Evasafe.git" pic={pic} />
            <WorksSub name="Student Registration Management" link="https://github.com/RVDhanushkumar/Student-Registration-Application.git" pic={pic2} />
            <WorksSub name="To-Do List Webpage" link="https://github.com/RVDhanushkumar/To-do-List.git" pic={pic3} />
            <WorksSub name="Car Rental Landing Page" link="https://github.com/RVDhanushkumar/Landing-Page.git" pic={pic4} />
            <a href="https://github.com/RVDhanushkumar?tab=repositories">
                <div className="button"> See more </div>
            </a>
        </div>
    );
}

export default Works;
