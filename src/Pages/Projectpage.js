import "../style/projectPage.css";
import "../style/backgroundProject.css";
import Menu from "../Component/Menu";
import Background from "../Component/Background";

function Projectpage() {

    return(
        <div>
            <Background backgroundHomePage='backgroundProjects'/>
            <Menu styleActive='containerMenuProject'/>
            <div className="projects">

            </div>
        </div>
    )
}

export default Projectpage;