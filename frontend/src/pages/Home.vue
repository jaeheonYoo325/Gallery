<template>
	<div class="home">
		<div class="album py-5 bg-light">
			<div class="container">
				<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
					<div class="col" v-for="(item, idx) in state.items" :key="idx">
						<Card :item="item"></Card>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import Card from '@/components/Card.vue';
import axios from 'axios';
import { reactive } from 'vue';

const state = reactive({
	items: [],
});

axios.get('/api/items').then(({ data }) => {
	state.items = data;
});
</script>

<style scoped></style>
