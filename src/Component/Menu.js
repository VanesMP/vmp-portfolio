import '../style/menu.css';
import './PagesLink'
import PagesLink from './PagesLink';

/** Render navigation bar
 * @function Menu
 * @returns {JSX}
 */

export default function Menu() {

    return(
        <div>
        <div className='containerMenu'>
            <nav >
            <PagesLink linkTo="/" text="Accueil" />
            <PagesLink linkTo="/projects" text="Projets" />
            <PagesLink linkTo="/contact" text="Contact" />
            </nav>
        </div>
        </div>
    )
}
