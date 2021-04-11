<template>
	<div class="sidebar">
		<router-link to="/">Home</router-link>
		<router-link to="/about">About</router-link>
	</div>
</template>

<script>
export default {
	name: 'Sidebar',
	components: {},
};
</script>

<style lang="scss" scoped>
.sidebar {
	position: fixed;
	bottom: 70px;
	right: 20px;
	width: 250px;
	overflow: hidden;
	background: #42b983;
}
a {
	font-weight: bold;
	color: #2c3e50;
	display: block;
	padding: 10px 0;
	text-decoration: none;

	&.router-link-exact-active {
		color: #fff;
	}
}
</style>
