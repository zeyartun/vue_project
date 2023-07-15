import Home from './components/Home';
import Profile from './components/Profile';
import Product from './components/Product';
import ProductDetail from './components/ProductDetail';
import Login from './components/Login';
import Logout from './components/Logout';
import {createRouter , createWebHashHistory} from 'vue-router'

const routes = [
    {path: '/' , component:Home},
    {path: '/profile' , component:Profile},
    {path: '/products' , component:Product},
    {path: '/product/:id' , component:ProductDetail},
    {path: '/login' , component:Login},
    {path: '/Logout' , component:Logout},
  ];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;