import '../style/menu.css';
import './PagesLink'
import PagesLink from './PagesLink';

/** Render navigation bar
 * @function Menu
 * @param {string} styleActive
 * @returns {JSX}
 */

export default function Menu({styleActive}) {

    return(
        <div className={styleActive}>
            <nav >
            <PagesLink linkTo="/" text="Accueil" />
            <PagesLink linkTo="/projects" text="Projets" />
            <PagesLink linkTo="/contact" text="Contact" />
            </nav>
        </div>
    )
}
