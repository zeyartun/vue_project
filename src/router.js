import Home from './components/Home';
import Product from './components/Product';
import ProductDetail from './components/ProductDetail';
import Login from './components/Login';
import {createRouter , createWebHashHistory} from 'vue-router'
import Profile from './components/Profile';

const routes = [
    {path: '/' , component:Home},
    {path: '/products' , component:Product},
    {path: '/products/:id' , component:ProductDetail},
    {path: '/login' , component:Login},
    {path: '/profile' , component:Profile, 
    beforeEach : ((to,from,next)=>{
      var auth = localStorage.getItem('email');
      if(auth && auth == 'john@gmail.com'){
        next();
      }else{
        next('/login');
      }
    })},
  ];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;