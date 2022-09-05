import '../style/menu.css';
import './PagesLink'
import PagesLink from './PagesLink';

/** Render navigation bar
 * @function Menu
 * @returns {JSX}
 */

export default function Menu() {
    return(
        <div className='container'>
            <nav>
            <PagesLink linkTo="/" text="Accueil" />
            {/* <PagesLink linkTo="/aboutme" text="About me" /> */}
            <PagesLink linkTo="/projects" text="Projets" />
            <PagesLink linkTo="/contact" text="Contact" />
            </nav>
        </div>
    )
}
