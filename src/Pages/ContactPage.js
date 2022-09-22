import '../style/contactPage.css';
import '../style/backgroundContact.css';
import Menu from "../Component/Menu";
import linkIn from "../assets/iconLinkIn.png";
import Background from '../Component/Background';

function ContactPage() {

    return(
        <div className="backgroundContactpage">
                <Background backgroundHomePage='backgroundContact'/>
                <Menu styleActive='containerMenuContact'/>
                <div className='containerLinkIn'>
                    <a href="www.linkedin.com/in/vanessa-macedo-pinto-devjunior">
                        <img src={linkIn} alt="link to my linkedin profil, contact me" className='logoIn'/>
                    </a>
                </div>
                <div>

                </div>
        </div>
    )
}

export default ContactPage;