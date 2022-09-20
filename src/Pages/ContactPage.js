import '../style/contactPage.css';
import Menu from "../Component/Menu";
import linkIn from "../assets/linkContactIn.png";

function ContactPage() {

    return(
        <div className="backgroundContactpage">
                <Menu styleActive='containerMenuContact'/>
                <div className='containerLinkIn'>
                    <a href="www.linkedin.com/in/vanessa-macedo-pinto-devJunior">
                        <img src={linkIn} alt="link to my linkedin profil, contact me" className='logoIn'/>
                    </a>
                </div>
                <div>

                </div>
        </div>
    )
}

export default ContactPage;