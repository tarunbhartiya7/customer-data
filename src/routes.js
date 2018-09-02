import Home from './components/Home.vue';
import About from './components/About.vue';
import UpdateCustomers from './components/UpdateCustomers.vue';
import CustomerDetail from './components/CustomerDetail.vue';

export const routes = [
    { path: '/home', component: Home },
    { path: '/about', component: About },
    { path: '/updateCustomers', component: UpdateCustomers },
    { path: '/customerDetail/:id', component: CustomerDetail },
    { path: '/*', redirect: '/home' }
];