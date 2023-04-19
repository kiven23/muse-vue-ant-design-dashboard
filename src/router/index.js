import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

let routes = [
	{
		// will match everything
		path: '*',
		component: () => import('../views/404.vue'),
	},
	{
		path: '/',
		name: 'Home',
		redirect: '/dashboard',
		meta: { requiresAuth: true },
	},
	{
		path: '/dashboard',
		name: 'Dashboard',
		layout: "dashboard",
		meta: { requiresAuth: true },
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "dashboard" */ '../views/Dashboard.vue'),
	},
	{
		path: '/layout',
		name: 'Layout',
		layout: "dashboard",
		component: () => import('../views/Layout.vue'),
	},
	{
		path: '/tables',
		name: 'Tables',
		layout: "dashboard",
		component: () => import('../views/Tables.vue'),
	},
	{
		path: '/billing',
		name: 'Billing',
		layout: "dashboard",
		component: () => import('../views/Billing.vue'),
	},
	{
		path: '/rtl',
		name: 'RTL',
		layout: "dashboard-rtl",
		meta: {
			layoutClass: 'dashboard-rtl',
		},
		component: () => import('../views/RTL.vue'),
	},
	{
		path: '/Profile',
		name: 'Profile',
		layout: "dashboard",
		meta: {
			layoutClass: 'layout-profile',
			requiresAuth: true
		},
		component: () => import('../views/Profile.vue'),
	},
	{
		path: '/sign-in',
		name: 'Sign-In',
		component: () => import('../views/Sign-In.vue'),
		meta: { requiresAuth: false },
	},
	{
		path: '/sign-up',
		name: 'Sign-Up',
		meta: {
			layoutClass: 'layout-sign-up',
		},
		component: () => import('../views/Sign-Up.vue'),
	},
	//ADMINSTRATOR
	{
		path: '/administrator/account',
		name: 'Accounts',
		layout: "dashboard",
		meta: { requiresAuth: true },
		component: () => import('../views/administrator/useraccount.vue'),
	},
	{
		path: '/administrator/branch',
		name: 'Branchest',
		layout: "dashboard",
		meta: { requiresAuth: true },
		component: () => import('../views/administrator/branch.vue'),
	},
	{
		path: '/administrator/permissions',
		name: 'Permissions',
		layout: "dashboard",
		meta: { requiresAuth: true },
		component: () => import('../views/administrator/permissions.vue'),
	},
	{
		path: '/administrator/sapdatabase',
		name: 'SapDatabase',
		layout: "dashboard",
		meta: { requiresAuth: true },
		component: () => import('../views/administrator/sapdatabase.vue'),
	},

]

// Adding layout property from each route to the meta
// object so it can be accessed later.
function addLayoutToRoute( route, parentLayout = "default" )
{
	route.meta = route.meta || {} ;
	route.meta.layout = route.layout || parentLayout ;
	
	if( route.children )
	{
		route.children = route.children.map( ( childRoute ) => addLayoutToRoute( childRoute, route.meta.layout ) ) ;
	}
	return route ;
}

routes = routes.map( ( route ) => addLayoutToRoute( route ) ) ;

const router = new VueRouter({
	mode: 'hash',
	base: process.env.BASE_URL,
	routes,
	scrollBehavior (to, from, savedPosition) {
		if ( to.hash ) {
			return {
				selector: to.hash,
				behavior: 'smooth',
			}
		}
		return {
			x: 0,
			y: 0,
			behavior: 'smooth',
		}
	}
})
router.beforeEach((to, from, next) => {
	const token = localStorage.getItem("token");
	if (to.matched.some((record) => record.meta.requiresAuth)) {
	  if (!token) {
		next("/sign-in");
	  } else {
		next();
	  }
	} else {
	  next();
	}
  });
export default router
