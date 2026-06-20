<script setup lang="ts">
import padoLogo from '/logo/pado_logo_cinza.svg'
</script>

<template>
  <main class="min-h-screen bg-pado-black flex flex-col">
    <header class="flex justify-between items-center p-4">
      <img :src="padoLogo" alt="Pado's logo" class="h-10">
    </header>
    <div class="flex-1 flex flex-col items-center justify-center px-6 gap-8">
      <h1 class="font-univers font-bold text-pado-light text-2xl text-center">
        Bem-vindo à
      </h1>
      <img :src="padoLogo" alt="Pado's logo" class="max-w-100">
      <nav class="relative w-full max-w-xs border-3 border-pado-gray rounded-xl p-5 pt-7">
        <span
          class="absolute -top-3 left-6 px-2 bg-pado-black font-mono text-sm text-pado-gray uppercase tracking-wide">
          Selecione seu novo produto
        </span>

        <div class="flex flex-col gap-4">
          <RouterLink to="/fechaduras" class="font-medium text-center py-4 rounded-lg bg-pado-wine text-pado-light
          transition-colors active:bg-pado-pink">
            FECHADURAS
          </RouterLink>
          <RouterLink to="/acessorios" class="font-medium text-center py-4 rounded-lg bg-pado-wine text-pado-light
        transition-colors active:bg-pado-pink">
            ACESSÓRIOS
          </RouterLink>
        </div>
      </nav>
    </div>
  </main>
</template>
