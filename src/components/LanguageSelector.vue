<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useI18n } from 'vue-i18n'
import { ChevronDown } from 'lucide-vue-next'
import { setLocale, type SupportedLocale } from '../i18n'
import { LANGUAGES } from '../config/languages'

const { locale } = useI18n()

const isOpen = ref(false)
const rootRef = ref<HTMLElement | null>(null)

const currentLanguage = computed(() =>
  LANGUAGES.find(l => l.code === locale.value) ?? LANGUAGES[0]
)

function toggle() {
  isOpen.value = !isOpen.value
}

function selectLanguage(code: SupportedLocale) {
  setLocale(code)
  isOpen.value = false
}

function handleClickOutside(event: MouseEvent) {
  if (rootRef.value && !rootRef.value.contains(event.target as Node)) {
    isOpen.value = false
  }
}

function handleEscape(event: KeyboardEvent) {
  if (event.key === 'Escape') {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  document.addEventListener('keydown', handleEscape)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
  document.removeEventListener('keydown', handleEscape)
})
</script>

<template>
  <div ref="rootRef" class="relative inline-block text-left">
    <button @click="toggle" class="flex items-center gap-2 px-3 py-2 rounded-lg border border-pado-wine
             bg-pado-wine/30 transition-colors active:bg-pado-wine
             focus:outline-none">
      <span :class="`fi fi-${currentLanguage!.flag}`"></span>
      <span class="text-sm font-mono font-medium text-pado-light">{{ currentLanguage!.name }}</span>
      <ChevronDown class="size-4 text-pado-gray transition-transform duration-200" :class="{ 'rotate-180': isOpen }" />
    </button>

    <Transition name="dropdown">
      <ul v-if="isOpen" class="absolute right-0 mt-2 w-44 rounded-lg border border-pado-wine
               bg-pado-black shadow-lg overflow-hidden z-10">
        <li v-for="lang in LANGUAGES" :key="lang.code" @click="selectLanguage(lang.code)" :class="[
          'flex items-center gap-2 px-3 py-2 cursor-pointer transition-colors duration-150',
          lang.code === locale
            ? 'bg-pado-wine/50 font-semibold text-pado-light'
            : 'text-pado-gray hover:bg-pado-wine/20'
        ]">
          <span :class="`fi fi-${lang.flag}`"></span>
          <span class="text-sm font-mono">{{ lang.name }}</span>
        </li>
      </ul>
    </Transition>
  </div>
</template>
