<template>
	<div class="header">
		<img alt="Vue logo" src="../assets/logo.png" />
		<Navigation v-if="!mobileView" />
		<Burger v-if="mobileView" @click.prevent="toggle" />
		<transition name="slide">
			<Sidebar v-if="mobileView && showNav" />
		</transition>
	</div>
</template>

<script>
// @ is an alias to /src
import Navigation from '@/components/menu/Navigation.vue';
import Sidebar from '@/components/menu/Sidebar.vue';
import Burger from '@/components/menu/Burger.vue';

export default {
	name: 'Header',
	components: {
		Navigation,
		Sidebar,
		Burger,
	},
	data() {
		return {
			mobileView: true,
			showNav: false,
		};
	},
	methods: {
		handleView() {
			this.mobileView = window.innerWidth <= 990;
		},
		toggle() {
			this.showNav = !this.showNav;
		},
	},
	created() {
		this.handleView();
		window.addEventListener('resize', this.handleView);
	},
	watch: {
		$route() {
			this.showNav = false;
		},
	},
};
</script>

<style lang="scss" scoped>
#nav {
	padding: 30px;

	a {
		font-weight: bold;
		color: #2c3e50;

		&.router-link-exact-active {
			color: #42b983;
		}
	}
}

.slide-leave-active,
.slide-enter-active {
	transition: 0.4s;
}
.slide-enter-from {
	transform: translate(100%, 0);
}
.slide-leave-to {
	transform: translate(120%, 0);
}
</style>
