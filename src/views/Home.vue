<template>
    <input type="text" >
</template>
<script>
import { computed } from "vue";

const meals = computed(() => store.state.meals);

</script>
