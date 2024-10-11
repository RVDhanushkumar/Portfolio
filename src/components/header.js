import "../Styling/header.css"
import pic from "../accets/DK logo.png"
function Header(){
    const options=["Home","About me", "Contact", "Projects"]
    const list = options.map(options =><li>{options}</li>)
    return(
        <div className = "main_head">
        <img className="logo" alt="Logo" src={pic}></img>
        <div className="option">
            <ul>
                {list}
            </ul>
        </div>
        </div>
    );
}
export default Header;