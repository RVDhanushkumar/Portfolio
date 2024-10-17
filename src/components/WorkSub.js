import "../Styling/cardst.css";

function WorksSub(props) {
    const works_sub = {
        color: "white",
        display: "flex",
        justifyContent: "center",
    };
    const info = {
        paddingTop: "200px",
        marginRight: "100px",
        marginLeft: "-100px",
        textAlign: "start",
    };
    const line = {
        width: "2px",
        height: "600px",
        backgroundColor: "silver",
        marginRight: "100px",
        boxShadow: "0px 0px 20px white",
    };
    const btn = {
        color: "black",
        fontWeight: "300",
        backgroundColor: "white",
        borderRadius: "10px",
        padding: "10px",
    };
    const pic = {
        position: "absolute",
        paddingTop: "100px",
        maxHeight: "400px",
        maxWidth: "600px",
        right: "100px",
    };
    const h = {
        maxWidth: "180px",
    };

    return (
        <div className="works_sub" style={works_sub}>
            <div className="info" style={info}>
                <h1 style={h}>{props.name}</h1>
                <a href={props.link}>
                    <h2 style={btn}>See this Project</h2>
                </a>
            </div>
            <div className="vertical-line" style={line}></div>
            <div className="pro">
                <img src={props.pic} alt="project pic" style={pic}></img>
            </div>
        </div>
    );
}

export default WorksSub;
