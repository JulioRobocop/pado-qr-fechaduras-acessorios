<script setup lang="ts">
import { ChevronLeft } from 'lucide-vue-next';
import { useI18n } from 'vue-i18n';
import { accessories } from '@/data/accessories'
import padoLogo from '/logo/pado_logo_cinza.svg'
import LanguageSelector from '@/components/LanguageSelector.vue';

const { t } = useI18n()
</script>

<template>
  <main class="min-h-screen bg-pado-black flex flex-col py-6 px-2">
    <header class="relative flex justify-between items-center mb-6 ">
      <img :src="padoLogo" alt="Pado" class="h-9" />
      <LanguageSelector />
    </header>
    <div class="relative flex items-center mb-8">
      <RouterLink to="/" class="absolute left-0 text-pado-light transition-colors active:text-pado-pink">
        <ChevronLeft class="size-7" />
      </RouterLink>

      <h1 class="font-univers font-bold text-pado-light text-2xl text-center w-full">
        {{ t('accessoryPicker.title') }}:
      </h1>
    </div>

    <ul class="grid grid-cols-2 gap-4 max-w-md mx-auto w-full px-6">
      <li v-for="accessory in accessories" :key="accessory.slug">
        <RouterLink :to="`/acessorios/${accessory.slug}`" class="flex flex-col items-center gap-3 p-5 rounded-xl
                 border border-pado-wine bg-pado-wine/70
                 transition-colors active:border-pado-pink">
          <img :src="accessory.image" :alt="accessory.name" class="w-24 h-24 object-contain" />
          <span class="font-mono font-medium text-pado-light text-center">
            {{ accessory.name }}
          </span>
        </RouterLink>
      </li>
    </ul>
  </main>
</template>
