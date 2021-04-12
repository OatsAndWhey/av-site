<template>
	<div id="nav">
		<router-link to="/">Home</router-link>
		<router-link to="/about">About</router-link>
		<router-link to="/contact">Contact Us</router-link>
	</div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';

export default {
	name: 'Navigation',
};
</script>

<style lang="scss" scoped>
@import '../../styles/styles.scss';

#nav {
	padding: 30px;

	a {
		font-weight: bold;
		color: $primary-text;
		padding: 0 20px;
		text-decoration: none;
		font-size: 1.5rem;

		&.router-link-exact-active {
			color: $active-text;
		}
	}
}
</style>
