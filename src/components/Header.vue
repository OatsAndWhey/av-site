<template>
	<div class="header">
		<div class="header-content">
			<router-link to="/"
				><img alt="Vue logo" src="../assets/logo.png"
			/></router-link>
			<Navigation v-if="!mobileView" />
		</div>
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
@import '../styles/styles.scss';

.header {
	background-color: $primary-background;
	display: flex;
	justify-content: center;
	box-shadow: $material-shadow;
}

.header-content {
	border: 0;
	width: 100vw;
	max-width: 1200px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	img {
		max-height: 100px;
		padding: 20px;
		flex-grow: 0;
	}
}

@media screen and (max-width: $small) {
	.header-content {
		width: 100vw;
		max-width: 1200px;
		display: flex;
		justify-content: center;
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
