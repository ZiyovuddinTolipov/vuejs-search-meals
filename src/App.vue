
<template>
  <div class="bg-gray-100 h-full">
    <header class="bg-white shadow h-16 flex justify-between items-stretch">
      <router-link :to="{ name: 'home' }" class='inline-flex items-center h-full px-5'>
        Home
      </router-link>
      <div class="flex items-center gap-1">
        <router-link :to="{name:'byName'}" class="px-2 h-full hover:bg-purple-100 inline-flex items-center transition-colors">
          Search Meals
        </router-link>

        <router-link :to="{name:'byLetter'}" class="px-2 h-full hover:bg-purple-100 inline-flex items-center transition-colors">
          Meals by Letter
        </router-link>

        <router-link :to="{name:'byIngredient'}" class="px-2 h-full hover:bg-purple-100 inline-flex items-center transition-colors">
          Meals by ingredient
        </router-link>
      </div>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup>
</script>

