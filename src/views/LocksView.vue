<script setup lang="ts">
import { locks } from '@/data/locks'
import padoLogo from '/logo/pado_logo_cinza.svg'
import { ChevronLeft } from '@lucide/vue';
</script>

<template>
  <main class="min-h-screen bg-pado-black flex flex-col px-6 py-6">
    <header class="flex justify-center mb-6">
      <RouterLink to="/">
        <ChevronLeft class="size-3 bg-white" />
      </RouterLink>

      <img :src="padoLogo" alt="Pado" class="h-9" />
    </header>

    <h1 class="font-univers font-bold text-pado-light text-2xl text-center mb-8">
      Escolha sua fechadura
    </h1>

    <ul class="grid grid-cols-2 gap-4 max-w-md mx-auto w-full">
      <li v-for="lock in locks" :key="lock.slug">
        <RouterLink :to="`/fechaduras/${lock.slug}`" class="flex flex-col items-center gap-3 p-5 rounded-xl
                 border border-pado-wine bg-pado-wine/70
                 transition-colors active:border-pado-pink">
          <img :src="lock.image" :alt="lock.name" class="w-24 h-24 object-contain" />
          <span class="font-mono font-medium text-pado-light text-center">
            {{ lock.name }}
          </span>
        </RouterLink>
      </li>
    </ul>
  </main>
</template>
