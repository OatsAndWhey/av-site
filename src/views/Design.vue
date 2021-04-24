<template>
	<div class="design main">
		<h1 class="page-title">Design</h1>
		<!-- Dropdowns -->
		<form action="#" id="configform">
			<!-- Display -->
			<div id="display-select" class="form-select">
				<label for="display">Room size:</label>
				<select name="display" v-model="selectedDisplay">
					<option disabled value="">Please select one</option>
					<option>Huddle</option>
					<option>Small</option>
					<option>Medium</option>
					<option>Large</option>
					<option>X-Large</option>
				</select>
			</div>
			<!-- System -->
			<transition name="fade">
				<div id="system-select" class="form-select" v-if="selectedDisplay">
					<label for="system">Room use:</label>
					<select name="system" v-model="selectedSystem">
						<option disabled value="">Please select one</option>
						<option>Collaboration</option>
						<option>Presentation</option>
						<option>Conference call</option>
					</select>
				</div>
			</transition>
			<!-- Speakers Layout -->
			<transition name="fade">
				<div
					id="speakers-select"
					class="form-select"
					v-if="selectedDisplay && selectedSystem"
				>
					<label for="speakers">Speaker layout:</label>
					<select name="speakers" v-model="selectedSpeakers">
						<option disabled value="">Please select one</option>
						<option>Below display</option>
						<option>Sides of display</option>
						<option>Ceiling tile</option>
					</select>
				</div>
			</transition>
		</form>

		<!-- Icons -->
		<transition name="slide-fade" mode="out-in">
			<div class="img-container" v-if="selectedSpeakers">
				<img alt="Monitor Icon" src="../assets/icons/monitor_icon_small.svg" />
				<p>{{ selectedDisplay }}</p>
				<p>{{ selectedSystem }}</p>
				<p>{{ selectedSpeakers }}</p>
			</div>
		</transition>
	</div>
</template>

<script>
export default {
	name: 'Design',
	data() {
		return {
			selectedDisplay: '',
			selectedSystem: '',
			selectedSpeakers: '',
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
