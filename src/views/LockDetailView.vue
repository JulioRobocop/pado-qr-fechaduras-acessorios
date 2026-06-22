<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { locks } from '@/data/locks'

const route = useRoute()
const lock = computed(() => locks.find((l) => l.slug === route.params.slug))
</script>

<template>
  <main class="min-h-screen bg-pado-black px-6 py-8">
    <RouterLink to="/fechaduras" class="font-medium text-center py-4 rounded-lg bg-pado-wine text-pado-light
          transition-colors active:border-pado-pink">
      Julio
    </RouterLink>
    <div v-if="lock">
      <img :src="lock.image" :alt="lock.name" class="" />
      <h2 class="text-2xl font-mono font-bold text-pado-light">{{ lock.name }}</h2>
    </div>
    <!-- product image, name, and the two buttons:
           Manual (lock.manualUrl) and Gabarito (lock.templateUrl) -->


    <p v-else class="text-pado-light text-center">
      Produto não encontrado.
    </p>
  </main>
</template>
