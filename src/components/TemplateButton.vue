<script setup lang="ts">
import { useI18n } from 'vue-i18n';

defineProps<{
  href: string
}>()

const { t } = useI18n()
</script>

<template>
  <a :href="href" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center gap-2 w-full py-4 rounded-lg
           font-mono font-medium text-pado-light
           border border-pado-wine
           transition-colors active:bg-pado-wine">
    {{ t('button.template') }}
  </a>
</template>
