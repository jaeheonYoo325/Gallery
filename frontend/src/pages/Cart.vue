<template>
	<div>카트페이지</div>
</template>

<script setup>
import axios from 'axios';

axios.get('/api/cart/items').then(({ data }) => {
	console.log(data);
});
</script>

<style lang="scss" scoped></style>
