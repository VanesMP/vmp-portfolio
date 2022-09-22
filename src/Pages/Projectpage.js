import "../style/projectPage.css";
import "../style/backgroundContact.css";
import Menu from "../Component/Menu";
import Background from "../Component/Background";

function Projectpage() {

    return(
        <div className="backgroundProjectpage">
            <Background backgroundHomePage='backgroundContact'/>
            <Menu styleActive='containerMenuProject'/>
            <div className="projects">

            </div>
        </div>
    )
}

export default Projectpage;