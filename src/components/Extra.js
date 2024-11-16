import Achievements from "./ach_card";
import pic1 from "../assets/me1.jpg";
import pic2 from "../assets/SIH.png";
import pic3 from "../assets/AR_hack.jpg";
import pic4 from "../assets/gfg_workshop.jpg";
import pic5 from "../assets/CodeBounty.png";
import pic6 from "../assets/R_V_Dhanush_Kumar_Badge_Contributor_GSSoC2024.png";
import pic7 from "../assets/flipkartGrid.jpg";
import pic8 from "../assets/me1.jpg";
import "../Styling/extra.css";

function Extra() {
    const achievementsData = [
        {
            head: "AR Hackathon",
            pic: pic3,
            des: "Our team secured 1st position among 40 teams, Developing AR Science Lab",
        },
        {
            head: "Smart India Hackathon",
            pic: pic2,
            des: "Our team secured 1st position in Internal SIH by developing a women safety analytics tool",
        },
        {
            head: "CodeBounty 2024",
            pic: pic5,
            des: "Achieved 3rd place in a coding competition with over 80 participants.",
        },
        {
            head: "GFG AI Workshop",
            pic: pic4,
            des: "Contributed to multiple open-source projects on GitHub.",
        },
        {
            head: "Open Source Contributor",
            pic: pic6,
            des: "Contributed to multiple open-source projects on GitHub.",
        },
        {
            head: "Flipkart Grid 6.0",
            pic: pic7,
            des: "Qualified Level 1 of Flipkart grid 6.0 with my problem solving skills",
        },
    ];

    return (
        <div className="extra-section">
            <h1 className="extra-title">Achievements</h1>
            <div className="all-achievements">
                {achievementsData.map((achievement, index) => (
                    <Achievements
                        key={index}
                        head={achievement.head}
                        pic={achievement.pic}
                        des={achievement.des}
                    />
                ))}
            </div>
        </div>
    );
}

export default Extra;
