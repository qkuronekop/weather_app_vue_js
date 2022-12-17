<script setup lang="ts">
import { ref, defineComponent, onErrorCaptured, Ref } from 'vue'
import Weather from './components/Weather.vue'
</script>

<template>
    <Suspense>
    <template #default>
      <Weather/>
    </template>
    <template #fallback>
      <div>
        <p class="text-green">Loading中です。。。</p>
      </div>
    </template>
  </Suspense>
</template>
<style>
p {
  color: #543;
}
</style>
