
// src/routes.ts

// pages
import Home from "./pages/Home";
import Products from "./pages/Products";

// other
import {FC} from "react";

// interface
interface Route {
    key: string,
    title: string,
    path: string,
    enabled: boolean,
    component: FC<{}>
}

export const routes: Array<Route> = [
    {
        key: 'home-route',
        title: 'Home',
        path: '/',
        enabled: true,
        component: Home
    },
    {
        key: 'products-route',
        title: 'Products',
        path: '/products',
        enabled: true,
        component: Products
    }
]
