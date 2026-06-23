<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { locks } from '@/data/locks'
import LanguageSelector from '@/components/LanguageSelector.vue'
import ManualButton from '@/components/ManualButton.vue'
import TemplateButton from '@/components/TemplateButton.vue'
import padoLogo from '/logo/pado_logo_cinza.svg'
import { useI18n } from 'vue-i18n'

const route = useRoute()
const lock = computed(() => locks.find((l) => l.slug === route.params.slug))
const { t } = useI18n()
</script>

<template>
  <main class="min-h-screen bg-pado-black flex flex-col px-6 py-6">
    <header class="relative flex items-center justify-between mb-6">
      <img :src="padoLogo" alt="Pado" class="h-9" />
      <LanguageSelector />
    </header>

    <div v-if="lock" class="flex flex-1 flex-col items-center justify-center gap-6 max-w-md mx-auto w-full">
      <RouterLink to="/fechaduras" class="font-mono text-sm text-pado-gray self-start inline-flex items-center gap-1
               transition-colors active:text-pado-pink">
        {{ t('lockDetail.back') }}
      </RouterLink>

      <img :src="lock.image" :alt="lock.name" class="w-48 h-48 object-contain" />
      <h2 class="font-univers font-bold text-pado-light text-3xl text-center">
        {{ t('lockDetail.lock') }} {{ lock.name }}
      </h2>
      <div class="flex flex-col gap-4 w-full mt-4">
        <ManualButton :href="lock.manualUrl" />
        <TemplateButton :href="lock.templateUrl" />
      </div>
    </div>

    <p v-else class="text-pado-light text-center mt-12">
      {{ t('lockDetail.error') }}
    </p>
  </main>
</template>
