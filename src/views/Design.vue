<template>
	<div class="design main">
		<h1 class="page-title">Design Page</h1>
		<!-- Dropdowns -->
		<div id="v-model-select" class="demo">
			<select v-model="selected">
				<option disabled value="">Please select one</option>
				<option>Monitor</option>
				<option>Display</option>
				<option>Speakers</option>
			</select>
		</div>

		<!-- Icons -->
		<transition name="slide-fade" mode="out-in">
			<div class="img-container" v-if="selected === 'Monitor'">
				<img alt="Monitor Icon" src="../assets/icons/monitor_icon_small.svg" />
			</div>
			<div class="img-container" v-else-if="selected === 'Display'">
				<img alt="Monitor Icon" src="../assets/icons/display_icon_small.svg" />
			</div>
			<div class="img-container" v-else-if="selected === 'Speakers'">
				<img alt="Monitor Icon" src="../assets/icons/speakers_icon_small.svg" />
			</div>
			<div class="img-container" v-else>Nothing Selected</div>
		</transition>
	</div>
</template>

<script>
export default {
	name: 'Design',
	data() {
		return {
			selected: '',
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
	width: 200px;
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
