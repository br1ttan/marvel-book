import { Link, NavLink } from 'react-router-dom';
import { AppRouteEnum } from '../../enums/appRoute.enum';
import './appHeader.scss';

const AppHeader = () => {
    return (
        <header className="app__header">
            <h1 className="app__title">
                <Link to={AppRouteEnum.Home}>
                    <span>Marvel</span> information portal
                </Link>
            </h1>
            <nav className="app__menu">
                <ul>
                    <li>
                        <NavLink 
                            className={({isActive}) => isActive ? 'active' : 'not-active'}
                            to={AppRouteEnum.Home}>
                            Characters
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            className={({isActive}) => isActive ? 'active' : 'not-active'}
                            to={AppRouteEnum.Comics}>
                            Comics
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default AppHeader;