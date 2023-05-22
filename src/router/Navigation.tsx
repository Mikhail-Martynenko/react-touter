import React from 'react';
import {NavLink} from "react-router-dom";
import {NAVIGATION_PATH} from "./app_routes";

const Navigation: React.FC = () => {
    return (
        <nav className="nav">
            <ul>
                {NAVIGATION_PATH.map((route, index) =>
                    <li key={index}>
                        <NavLink to={route.path}>{route.name}</NavLink>
                    </li>
                )}
            </ul>

        </nav>
    );
};
export default Navigation;