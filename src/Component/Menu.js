import '../style/menu.css';
import './PagesLink'
import PagesLink from './PagesLink';

export default function Menu() {
    return(
        <div className='container'>
            <nav>
            <PagesLink linkTo="/" text="Home" />
            <PagesLink linkTo="/aboutme" text="About me" />
            <PagesLink linkTo="/projects" text="Projects" />
            <PagesLink linkTo="/contact" text="Contact" />
            </nav>
        </div>
    )
}
