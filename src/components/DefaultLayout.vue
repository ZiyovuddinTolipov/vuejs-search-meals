<template>
    <div class="bg-gray-100 h-full">
        <navbar />
        <main>
            <router-view />
        </main>
    </div>
</template>
<script setup>
import Navbar from './Navbar.vue'
</script>
