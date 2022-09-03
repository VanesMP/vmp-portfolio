import { NavLink } from "react-router-dom";
import '../style/menu.css';

export default function PagesLink({ linkTo, text }) {

    return(
        <div>
            <NavLink
            className='list'
            to={linkTo}
            style={({ isActive }) => 
                isActive
                    ? {
                        color: '#c1e2bb', fontSize: '25px'
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