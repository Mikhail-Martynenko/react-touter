import EntityListPage from "../pages/EntityListPage";
import EntityDetailPage from "../pages/EntityDetailPage";
import NotFoundPage from "../pages/NotFoundPage";
import React from "react";
import {MainPage} from "../App";
import {RouteRecord} from "./types";
import {Navigation} from "./types";
import {Navigate} from "react-router-dom";
import AuthenticatedPage from "../pages/AuthenticatedPage";

export const getAppRoutes = (isAuthenticated: boolean): RouteRecord[] => {
    const useIsAuthorized = () => isAuthenticated;

    const AuthorizedOnlyPage = () => useIsAuthorized() ? <AuthenticatedPage /> : <Navigate to={'/'} />
    return [
        {
            path: "/",
            name: "home",
            component: MainPage,
        },
        {
            path: "/entities",
            name: "entries",
            component: EntityListPage,
        },
        {
            path: "/entities/:id",
            name: "entry details",
            component: EntityDetailPage,
        },
        {
            path: "/ggwp",
            name: "authenticated page",
            component: AuthorizedOnlyPage,
        },
        {
            path: "*",
            name: "Not Found",
            component: NotFoundPage,
        },
    ];
};

export const NAVIGATION_PATH: Navigation[] = [
    {
        path: '/',
        name: 'Home',
    },
    {
        path: '/entities',
        name: 'Entities',
    },
    {
        path: '/ggwp',
        name: 'Authenticated Page',
    },
];