import Router from 'vue-router'
import home from './../components/home/home'
import products from './../components/products/products'
import about from './../components/about/about'

const routes = [
    { path: '/', component: home },
    { path: '/Products', component: products },
    { path: '/About', component: about }
];

export default new Router({
    routes: routes
});