import {ComponentType} from "react";

export interface RouteRecord {
    path: string,
    name: string,
    component:ComponentType<any>
}

export interface Navigation {
    path: string,
    name: string,
}