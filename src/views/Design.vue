<template>
	<div class="design main">
		<h1 class="page-title">Design</h1>
		<!-- Dropdowns -->
		<form action="#" id="configform">
			<!-- Display -->
			<div id="display-select" class="form-select">
				<label for="display">Display size:</label>
				<select name="display" v-model="selectedDisplay">
					<option disabled value="">Please select one</option>
					<option
						v-for="display in displays"
						:key="display.size"
						:value="display"
					>
						{{ display.size }}"
					</option>
				</select>
			</div>
			<!-- Display layout -->
			<transition name="fade">
				<div id="layout-select" class="form-select">
					<label for="layout">Display layout:</label>
					<select name="layout" v-model="selectedLayout">
						<option disabled value="">Please select one</option>
						<option
							v-for="mount in mounts"
							:key="mount[selectedDisplay.size]"
							:value="mount"
						>
							{{ mount.label }}
						</option>
					</select>
				</div>
			</transition>
		</form>

		<!-- Bill of Materials -->
		<!-- Make this info populate a smart looking table -->
		<transition name="slide-fade" mode="out-in">
			<div class="bom-container">
				<p v-if="selectedDisplay">
					<!-- If selectedLayout === "Dual" -->
					<!-- double the price and the number of devices -->
					{{ selectedLayout.label === 'Dual' ? '2x' : '' }}
					{{
						`${selectedDisplay.brand}
						${selectedDisplay.model} -
						${selectedDisplay.size}\" -`
					}}
					{{
						selectedLayout.label === 'Dual'
							? `\$${selectedDisplay.cost * 2}`
							: `\$${selectedDisplay.cost}`
					}}
				</p>
				<p v-if="selectedLayout">
					{{ selectedLayout.label === 'Dual' ? '2x' : '' }}
					{{
						`${selectedLayout.size[selectedDisplay.size].brand} -
							${selectedLayout.size[selectedDisplay.size].model} -`
					}}
					{{
						selectedLayout.label === 'Dual'
							? `\$${selectedLayout.size[selectedDisplay.size].cost * 2}`
							: `\$${selectedLayout.size[selectedDisplay.size].cost}`
					}}
				</p>
			</div>
		</transition>
	</div>
</template>

<script>
import { displays, mounts } from '../assets/equipment.json';

export default {
	name: 'Design',
	data() {
		return {
			displays,
			mounts,
			selectedDisplay: '',
			selectedLayout: '',
		};
	},
};
</script>

<style lang="scss" scoped>
.img-container {
	display: inline-block;
	padding-top: 30px;
}

img {
	width: 60vw;
	max-width: 200px;
}

.form-select {
	padding-bottom: 30px;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
}

.form-select label {
	display: block;
}

.fade-enter-active {
	transition: all 0.1s ease;
}
.fade-leave-active {
	transition: all 0.1s ease;
}
.fade-enter-from {
	opacity: 0;
}
.fade-enter-to {
	opacity: 1;
}
.fade-leave-from {
	opacity: 1;
}
.fade-leave-to {
	opacity: 0;
}

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
	transition: all 0.1s ease;
}
.slide-fade-leave-active {
	transition: all 0.1s ease;
}
.slide-fade-enter-from {
	transform: translateX(-200px);
	opacity: 0;
}
.slide-fade-enter-to {
	transform: translateX(0px);
	opacity: 1;
}
.slide-fade-leave-from
/* .slide-fade-leave-active below version 2.1.8 */ {
	transform: translateX(0px);
	opacity: 1;
}
.slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
	transform: translateX(200px);
	opacity: 0;
}
</style>
