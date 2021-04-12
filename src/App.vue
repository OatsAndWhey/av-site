<template>
	<Header />
	<div class="page">
		<router-view />
	</div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
	components: {
		Header,
	},
};
</script>

<style lang="scss">
@import './styles/styles.scss';
</style>
