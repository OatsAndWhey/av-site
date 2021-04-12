<template>
	<div class="sidebar">
		<router-link to="/">Home</router-link>
		<router-link to="/about">About</router-link>
		<router-link to="/contact">Contact Us</router-link>
	</div>
</template>

<script>
export default {
	name: 'Sidebar',
	components: {},
};
</script>

<style lang="scss" scoped>
@import '../../styles/styles.scss';

.sidebar {
	position: fixed;
	bottom: 5rem;
	right: 20px;
	height: calc(50vh);
	width: 250px;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	justify-content: center;
	background: $primary-background;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}
a {
	font-weight: bold;
	color: $primary-text;
	display: block;
	padding: 10px 0;
	text-decoration: none;
	font-size: 2rem;

	&.router-link-exact-active {
		color: $active-text;
	}
}
</style>
