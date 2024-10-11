import WorksSub from "./WorkSub";


function Works() {
    const workMain = {
        textAlign : "center",
        color : "white",
        
    };
    const pp = {
        marginBottom :"200px",
    }

    return (
        <div className="Works_main" style={workMain}>
            <h1 style={workMain}>Works</h1>
            <p style={pp}>Let's check out some of my projects</p>
            <WorksSub name="Women" link="#" />
            <WorksSub name="Women" link="#" />
            <WorksSub name="Women" link="#" />
            <WorksSub name="Women" link="#" />
            
        </div>
    );
}

export default Works;
