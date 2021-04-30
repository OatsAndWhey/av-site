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
				<table style="width: 100%">
					<tr v-if="selectedDisplay">
						<th>Item</th>
						<th>Quantity</th>
						<th>Manufacturer</th>
						<th>Model</th>
						<th>Each</th>
						<th>Total</th>
					</tr>
					<tr v-if="selectedDisplay">
						<td>{{ `${selectedDisplay.size}" Display` }}</td>
						<td>{{ selectedLayout.label === 'Dual' ? '2' : '1' }}</td>
						<td>{{ selectedDisplay.brand }}</td>
						<td>{{ selectedDisplay.model }}</td>
						<td>
							{{
								`${Number(selectedDisplay.cost).toLocaleString('en-US', {
									style: 'currency',
									currency: 'USD',
									minimumFractionDigits: 0,
									maximumFractionDigits: 0,
								})}`
							}}
						</td>
						<td>
							{{
								selectedLayout.label === 'Dual'
									? `${(Number(selectedDisplay.cost) * 2).toLocaleString(
											'en-US',
											{
												style: 'currency',
												currency: 'USD',
												minimumFractionDigits: 0,
												maximumFractionDigits: 0,
											}
											// eslint-disable-next-line no-mixed-spaces-and-tabs
									  )}`
									: `${Number(selectedDisplay.cost).toLocaleString(
											'en-US',
											{
												style: 'currency',
												currency: 'USD',
												minimumFractionDigits: 0,
												maximumFractionDigits: 0,
											}
											// eslint-disable-next-line no-mixed-spaces-and-tabs
									  )}`
							}}
						</td>
					</tr>
					<tr v-if="selectedLayout">
						<td>Wall Mount</td>
						<td>{{ selectedLayout.label === 'Dual' ? '2' : '1' }}</td>
						<td>{{ selectedLayout.size[selectedDisplay.size].brand }}</td>
						<td>{{ selectedLayout.size[selectedDisplay.size].model }}</td>
						<td>
							{{
								`${Number(
									selectedLayout.size[selectedDisplay.size].cost
								).toLocaleString(
									'en-US',
									{
										style: 'currency',
										currency: 'USD',
										minimumFractionDigits: 0,
										maximumFractionDigits: 0,
									}
									// eslint-disable-next-line no-mixed-spaces-and-tabs
								)}`
							}}
						</td>
						<td>
							{{
								selectedLayout.label === 'Dual'
									? `${Number(
											selectedLayout.size[selectedDisplay.size].cost * 2
											// eslint-disable-next-line no-mixed-spaces-and-tabs
									  ).toLocaleString(
											'en-US',
											{
												style: 'currency',
												currency: 'USD',
												minimumFractionDigits: 0,
												maximumFractionDigits: 0,
											}
											// eslint-disable-next-line no-mixed-spaces-and-tabs
									  )}`
									: `${Number(
											selectedLayout.size[
												selectedDisplay.size
												// eslint-disable-next-line no-mixed-spaces-and-tabs
											].cost
											// eslint-disable-next-line no-mixed-spaces-and-tabs
									  ).toLocaleString(
											'en-US',
											{
												style: 'currency',
												currency: 'USD',
												minimumFractionDigits: 0,
												maximumFractionDigits: 0,
											}
											// eslint-disable-next-line no-mixed-spaces-and-tabs
									  )}`
							}}
						</td>
					</tr>
				</table>
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

.bom-container {
	overflow-x: scroll;
	scrollbar-width: none;
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
