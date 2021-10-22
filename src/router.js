import Vue from 'vue';
import Router from 'vue-router';
import Landing from '@/components/Landing';
import Home from '@/views/Home';
import UserDetail from '@/views/UserDetail';
import Login from '@/views/auth/Login';
import Register from '@/views/auth/Register';
import Error from '@/views/Error404';


Vue.use(Router);

//export default new Router({ queda comentado para poder trabajar con esta variable
const router = new Router ({
    mode: 'history',
    routes: [
        {
            path: '/home',
            name: 'landing',
            component: Landing
        },
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
            meta:{
                isAuth: true
            }
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        },
        
        {//Ruta Dinamica
            path: '/user/:id',
            name: 'user-detail',
            component: UserDetail,
            meta: {
                requiresAuth: true  //meta requerir autenticacion
            }
        },
        {
            path: '*',
            name: 'error',
            component: Error
        }
    ]
    })

    router.beforeEach((to,from,next)=>{
        if(to.meta.requiresAuth){
            //enviar al login
            if(!localStorage.getItem('user')){
                next({
                    name: 'login'
                });
            }else{
                next();
            }
        }else{
            next();
        }

        if (to.meta.isAuth){
            if(localStorage.getItem('token')){
                next({
                    name: 'home'
                });
            }else{
                next();
            }
        }else{
            next();
        }
    });

    export default router;