import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/design',
		name: 'Design',
		component: () => import(/* webpackChunkName: "about" */ '../views/Design.vue'),
	},
	{
		path: '/about',
		name: 'About',
		component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
	},
	{
		path: '/contact',
		name: 'Contact',
		component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue'),
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'Page Not Found',
		component: () => import(/* webpackChunkName: "404" */ '../views/404.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

router.beforeEach((to, from, next) => {
	// console.log(to.name);
	document.title = `${process.env.VUE_APP_TITLE} | ${to.name}`;
	next();
});

export default router;
