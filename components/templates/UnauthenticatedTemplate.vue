<template>
  <Header />
  <div class="unauthenticated">
    <div class="unauthenticated__content">
      <slot />
    </div>
  </div>
  <Footer />
</template>

<script lang="ts" setup>
import { Footer, Header } from '@molecules'
</script>

<style lang="scss" scoped></style>
