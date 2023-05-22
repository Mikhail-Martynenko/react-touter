import React from 'react';
import {Route, Routes} from "react-router-dom";
import {getAppRoutes} from "./app_routes";
import {RouteRecord} from "./types";

interface AllRoutersProps {
    isAuth: boolean
}

const AllRouters: React.FC<AllRoutersProps> = ({isAuth}) => {
    const APP_ROUTES: RouteRecord[] = getAppRoutes(isAuth);
    return (
        <Routes>
            {APP_ROUTES.map((route, index) => (
                <Route key={index} path={route.path} element={<route.component />} />
            ))}
        </Routes>
    );
};

export default React.memo(AllRouters);