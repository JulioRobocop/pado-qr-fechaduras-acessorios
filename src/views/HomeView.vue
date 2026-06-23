<script setup lang="ts">
import padoLogo from '/logo/pado_logo_cinza.svg'
import LanguageSelector from '@/components/LanguageSelector.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n()
</script>

<template>
  <main class="min-h-screen bg-pado-black flex flex-col">
    <header class="flex justify-between items-center p-4">
      <img :src="padoLogo" alt="Pado's logo" class="h-10">
      <LanguageSelector />
    </header>
    <div class="flex-1 flex flex-col items-center justify-center px-6 gap-8">
      <h1 class="font-univers font-bold text-pado-light text-2xl text-center">
        {{ t('home.tagline') }}
      </h1>
      <img :src="padoLogo" alt="Pado's logo" class="max-w-100">
      <nav class="relative w-full max-w-xs border-3 border-pado-gray rounded-xl p-5 pt-7">
        <span class="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap px-2
         bg-pado-black font-mono text-sm text-pado-gray uppercase tracking-wide">
          {{ t('home.selectDevice') }}
        </span>

        <div class="flex flex-col gap-4">
          <RouterLink to="/fechaduras" class="font-medium text-center py-4 rounded-lg bg-pado-wine text-pado-light
          transition-colors active:border-pado-pink uppercase">
            {{ t('home.lockButton') }}
          </RouterLink>
          <RouterLink to="/acessorios" class="font-medium text-center py-4 rounded-lg bg-pado-wine text-pado-light
        transition-colors active:border-pado-pink uppercase">
            {{ t('home.accessoryButton') }}
          </RouterLink>
        </div>
      </nav>
    </div>
  </main>
</template>
