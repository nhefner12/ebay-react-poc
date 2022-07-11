// pages
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";

// other
import {FC} from "react";

// interface
interface Route {
    key: string,
    title: string,
    path: string,
    enabled: boolean,
    navBar: boolean,
    component: FC<{}>
}

export const routes: Array<Route> = [
    {
        key: 'home-route',
        title: 'Home',
        path: '/',
        enabled: true,
        navBar: true,
        component: Home
    },
    {
        key: 'products-route',
        title: 'Products',
        path: '/products',
        enabled: true,
        navBar: true,
        component: Products
    },
    {
        key: 'product-route',
        title: 'Product',
        path: '/product/:id',
        enabled: true,
        navBar: false,
        component: ProductDetails
    }
]
