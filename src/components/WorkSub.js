import React, { useEffect, useRef } from "react";
import "../Styling/WorkSub.css";

function WorksSub(props) {
    const works_sub = {
        color: "white",
        display: "flex",
        justifyContent: "center",
    };
    
    const infoStyle = {
        paddingTop: "200px",
        marginRight: "100px",
        marginLeft: "-100px",
        textAlign: "start",
    };

    const lineStyle = {
        width: "2px",
        height: "600px",
        backgroundColor: "silver",
        marginRight: "100px",
        boxShadow: "0px 0px 20px white",
    };

    const btnStyle = {
        color: "black",
        fontWeight: "300",
        backgroundColor: "white",
        borderRadius: "10px",
        padding: "10px",
    };

    const picStyle = {
        position: "absolute",
        paddingTop: "100px",
        maxHeight: "400px",
        maxWidth: "600px",
        right: "100px",
    };

    const titleStyle = {
        maxWidth: "180px",
    };

    const infoRef = useRef(null);
    const proRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate");
                } else {
                    entry.target.classList.remove("animate");
                }
            });
        });

        if (infoRef.current) observer.observe(infoRef.current);
        if (proRef.current) observer.observe(proRef.current);

        return () => {
            if (infoRef.current) observer.unobserve(infoRef.current);
            if (proRef.current) observer.unobserve(proRef.current);
        };
    }, []);

    return (
        <div className="works_sub" style={works_sub}>
            <div className="info" style={infoStyle} ref={infoRef}>
                <h1 style={titleStyle}>{props.name}</h1>
                <a href={props.link}>
                    <h2 style={btnStyle}>See this Project</h2>
                </a>
            </div>
            <div className="vertical-line" style={lineStyle}></div>
            <div className="pro" ref={proRef}>
                <img src={props.pic} alt="project pic" style={picStyle} />
            </div>
        </div>
    );
}

export default WorksSub;
