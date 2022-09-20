import '../style/menu.css';
import './PagesLink'
import PagesLink from './PagesLink';

/** Render navigation bar
 * @function Menu
 * @returns {JSX}
 */

export default function Menu({styleActive}) {

// const styleAccueil = {
//     border: 'solid 0.4px #ffffff2b',
//     backgroundColor: '#ffffff21'
// }
// const styleProjects = {
//     border: 'solid 0.4px #879f85',
//     backgroundColor: '#879f858f'
// }

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
