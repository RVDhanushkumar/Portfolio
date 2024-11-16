import "../Styling/ach_card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faTrophy } from "@fortawesome/free-solid-svg-icons";

function Achievements({ pic, head, des }) {
    return (
        <div className="achievement-card">
            <img
                src={pic || "https://via.placeholder.com/150"}
                alt="Achievement"
                className="achievement-img"
            />
            <h3 className="achievement-title">{head}</h3>
            <p className="achievement-description">{des}</p>
        </div>
    );
}

export default Achievements;
