import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';
import '../style/menu.css';

/** Render a style effect on the active link
 * @function PagesLink
 * @param {string} linkTo
 * @param {string} text
 * @returns {JSX}
 */

export default function PagesLink({ linkTo, text }) {

    return(
        <div>
            <NavLink
            className='list'
            to={linkTo}
            style={({ isActive }) => 
                isActive
                    ? {
                        color: '#c1e2bb', fontSize: '21px'
                    }
                    : {
                        color: '#113421', fontSize: '18px'
                    }
            }>
                {text}
            </NavLink>
        </div>
    )
}

PagesLink.propTypes = {
    linkTo: PropTypes.string,
    text: PropTypes.string
  }