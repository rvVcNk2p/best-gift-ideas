<template>
  <div class="default-layout">
    <UnauthenticatedTemplate />
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { UnauthenticatedTemplate } from '@templates'
</script>
