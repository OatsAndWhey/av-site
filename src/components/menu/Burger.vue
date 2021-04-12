<template>
	<div id="burger" :class="{ active: isBurgerActive }" @click.prevent="toggle">
		<slot>
			<div class="burger-button">
				<span class="burger-bar burger-bar--1"></span>
				<span class="burger-bar burger-bar--2"></span>
				<span class="burger-bar burger-bar--3"></span>
			</div>
		</slot>
	</div>
</template>

<script>
// import { reactive } from 'vue';

export default {
	name: 'Burger',
	data: () => ({
		isBurgerActive: false,
	}),
	methods: {
		toggle() {
			this.isBurgerActive = !this.isBurgerActive;
		},
	},
	watch: {
		$route() {
			this.isBurgerActive = false;
		},
	},
};
</script>

<style lang="scss" scoped>
@import '../../styles/styles.scss';

#burger {
	cursor: pointer;
	position: fixed;
	bottom: 20px;
	right: 20px;
}

.burger-button {
	position: relative;
	height: 3rem;
	width: 3rem;
	display: block;
	z-index: 999;
	border: 0;
	border-radius: 0;
	background-color: $primary-background;
	box-shadow: $material-shadow;
	pointer-events: all;
	transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.burger-bar {
	background-color: $active-text;
	position: absolute;
	top: 50%;
	right: 6px;
	left: 6px;
	height: 3px;
	width: auto;
	margin-top: -1px;
	transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1),
		opacity 0.3s cubic-bezier(0.165, 0.84, 0.44, 1),
		background-color 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.burger-bar--1 {
	-webkit-transform: translateY(-6px);
	transform: translateY(-0.7rem);
}

.burger-bar--2 {
	transform-origin: 100% 50%;
	transform: scaleX(0.8);
}

.burger-button:hover .burger-bar--2 {
	transform: scaleX(1);
}

.no-touchevents .burger-bar--2:hover {
	transform: scaleX(1);
}

.burger-bar--3 {
	transform: translateY(0.7rem);
}

#burger.active .burger-button {
	transform: rotate(-180deg);
}

#burger.active .burger-bar {
	background-color: $active-text;
}

#burger.active .burger-bar--1 {
	transform: rotate(45deg);
}

#burger.active .burger-bar--2 {
	opacity: 0;
}

#burger.active .burger-bar--3 {
	transform: rotate(-45deg);
}
</style>
