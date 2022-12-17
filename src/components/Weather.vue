<script lang="ts">
import { defineComponent, ref } from 'vue';
import weatherService from '../service/WeatherService';
import forecastService from '../service/ForecastService';
import '../extentions/weather.extentions';
import '../extentions/city.extentions';

export default defineComponent({
  name: 'Weather',
  async setup(props) {
    const city = ref("東京");
    const weather = ref(await weatherService.getWeather(city.value.toCityKey()));
    const forecast = ref(await forecastService.getForecast(city.value.toCityKey()));
    const cities = [
      "北海道",
      "青森",
      "岩手",
      "秋田",
      "山形",
      "福島",
      "宮城",
      "茨城",
      "栃木",
      "群馬",
      "千葉",
      "神奈川",
      "埼玉",
      "東京",
      "山梨",
      "静岡",
      "新潟",
    ];
    return {
      weather,
      forecast,
      cities,
      city,
    }
  },
  methods: {
    async select(event) {
      console.log(event);
      var select = event as string;
      this.weather = await weatherService.getWeather(select.toCityKey());
      this.forecast = await forecastService.getForecast(select.toCityKey());
    }
  }
});
</script>
<template>
  <header class="w-full fixed inset-0 bg-header h-16">
     <h1 class="text-3xl font-bold top-4 left-3 text-h1 absolute text-3xl">{{ weather.name }}のお天気は！</h1>
     <select class="absolute right-0 m-4 rounded border-solid border-2 border-gray p-1" v-model="city" @change="select(city)">
      <option v-for="item in cities" :key="item">{{ item }}</option>
     </select>
  </header>
  <div class="fixed top-16 left-0 float-left w-60">
    <p class="pt-4 font-bold">今日</p>
    <div class="p-3 m-3 rounded bg-gray-light">
      <div><img class="m-auto" v-bind:src="weather.weather[0].icon.toIconUrl()"/></div>
      <p class="text-4xl">{{ weather.weather[0].description }}</p>
      <p>{{ weather.weather[0].main }}</p>
    </div>
    <div class="p-3 grid grid-cols-1 divide-y divide-dashed">
      <div>平均気温：{{ weather.main.temp }}℃</div>
      <div>最高温度：{{ weather.main.temp_max }}℃</div>
      <div>最低温度：{{ weather.main.temp_min }}℃</div>
    </div>
    <div class="p-3 rounded bg-gray-light mx-3 border-double border-2 border-gray">
      <p>湿度：
        <span v-if="weather.main.humidity >= 60" class="text-green">{{ weather.main.humidity }}％</span>
        <span v-if="weather.main.humidity < 60" class="text-red">{{ weather.main.humidity }}％</span>
      </p>
    </div>
    <div class="m-3 grid grid-cols-1 divide-y divide-dashed content-center">
      <div>
        <div><img src="../assets/sunrise.svg" alt="Sunset" class="w-6 m-auto fill-sunrise"/></div>
        <p>日の出</p>
        <p>{{ new Date(weather.sys.sunrise * 1000).toLocaleString() }}</p>
      </div>
      <div class="p-3">
        <div><img src="../assets/sunset.svg" alt="Sunset" class="w-6 m-auto fill-sunset"/></div>
        <p>日の入</p>
        <p>{{ new Date(weather.sys.sunset * 1000).toLocaleString()  }}</p>
      </div>
    </div>
  </div>
  <div class="fixed top-16 left-80 m-8 p-8 grid grid-cols-8 h-5/6 overflow-scroll">
    <div v-for="item in forecast.list" :key="item[0]" class="rounded bg-gray-light ml-4 mb-4 px-4">
      <div class="text-xs pt-2 font-bold">{{ new Date(item.dt * 1000).toLocaleDateString() }}</div>
      <div >
        <img class="m-auto w-16" v-bind:src="item.weather[0].icon.toIconUrl()"/>
      </div>
      <div><p>{{ item.weather[0].description }}</p></div>
      <div>{{ new Date(item.dt * 1000).toLocaleTimeString() }}</div>
    </div>
  </div>
</template>

<style scoped>
</style>

