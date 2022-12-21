<script setup lang="ts">
import { ref, defineComponent, onErrorCaptured, Ref } from 'vue';
import Weather from './components/Weather.vue';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBk1vHiRLwUjCXohcxIvvrCa8ELEA0MrjI",
  authDomain: "weatherapp-d206b.firebaseapp.com",
  projectId: "weatherapp-d206b",
  storageBucket: "weatherapp-d206b.appspot.com",
  messagingSenderId: "777349918726",
  appId: "1:777349918726:web:f289f86538fe5def591387",
  measurementId: "G-YMZ69E4PW1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
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
