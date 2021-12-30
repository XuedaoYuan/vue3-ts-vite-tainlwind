<template>
  <div class="tailwind-wrapper h-full w-full overflow-auto pb-100">
    <div class="flex p-6 w-12 mt-2">flex p-6</div>
    <div class="w-16 md:w-32 lg:w-48 bg-gray-900 text-white">w-16 md:w-32 lg:w-48</div>
    <button class="w-24 h-12 bg-red-500 hover:bg-red-700">Button</button>
    <p class="hover:bg-red">asdasd</p>
    <input class="focus:ring-2 focus:ring-blue-600">
    <div class="transform motion-safe:hover:scale-110 w-32 bg-red-900">hover</div>
    <ul>
      <li v-for="i in 5"
          :key="i"
          class="first:color-red-900">{{i}}</li>
    </ul>
    <div class="container bg-gray-700">container</div>

    <div class="bg-yellow-600 w-48 mx-auto">22</div>
    <div class="flow-root"></div>
    <div style="width: 1000px; height: 800px;"
         class="bg-green-600">
      <img class="object-cover w-full"
           src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
           alt="">
    </div>
    <div class="w-100 h-100 bg-green-50 overflow-auto">
      <div class="h-100 bg-red-50">1</div>
      <div class="sticky top-0 title h-12 bg-red-300">asdasdasdasdasd</div>
      <div class="h-100 bg-red-50">2</div>
    </div>
    <div class="relative w-100 h-100 bg-gray-400">
      <div class="absolute inset-0 top-22 bg-purple-100">11</div>
    </div>
    <div class="hidden relative z-50">1</div>
    <div class="flex flex-row flex-wrap">
      <div class="w-50 h-50 bg-pink-100 ml-20">1</div>
      <div class="w-50 h-50 bg-pink-200 ml-20">2</div>
      <div class="w-50 h-50 bg-pink-300">3</div>
    </div>
    <div style="width: 200px"
         class="flex mt-40">
      <div class="flex-1 bg-blue-100 h-50 w-100"></div>
      <div class="flex-1 bg-blue-400 h-50"></div>
      <div class="flex-1 bg-blue-700 h-50"></div>
    </div>
    <div style="width: 200px"
         class="flex mt-40 space-x-10">
      <div class="flex-1 bg-blue-100 h-50"></div>
      <div class="flex-1 bg-blue-400 h-50"></div>
      <div class="flex-1 bg-blue-700 h-50"></div>
    </div>
    <div class="w-screen bg-blue-800">11</div>
    <div class="w-full mt-20 flex">
      <div class="w-1/2 bg-blue-500 text-30">1</div>
      <div class="w-1/2 bg-blue-900 text-20">2</div>
    </div>
    <div class="slashed-zero">0 O</div>
    <p class="ordinal ...">1st</p>
    <p class="leading-none text-20 bg-yellow-800">1111</p>
    <p class="bg-red-700">asdas</p>
    <p class="w-50 leading-none text-20 truncate">asda asd asd asd asd asd asd asd asd </p>
    <p class="mt-20 bg-purple-300  leading-7">
      <span class="text-20 leading-none align-top text-white">align-top</span>
      <span class="text-20 leading-none align-middle text-white">align-top</span>
      <span class="text-20 leading-none align-bottom text-white">align-top</span>
    </p>
    <p class="whitespace-pre">
      asdasdasdasdasd
      asdasd
      asdasd
    </p>
    <p class="flex items-center justify-center w-full">
      <span class="text-40 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Hello world</span>
    </p>
    <div class="mt-20 bg-black bg-opacity-50 hover-40">111</div>
    <div class="mt-20 h-100 border-4 border-blue-500 border-solid rounded-6"></div>
    <div class="ml-20 mt-20 w-100 h-100 bg-white shadow-xl"></div>
    <div class="ml-20 mt-20 w-100 h-100 bg-white shadow-inner blur">123123
      123123
      123123
    </div>
  </div>
</template>
<script lang="ts">
// import { ref } from 'vue'
export default {
  name: 'Tailwind'
  // props: {},
  // components: {},
  // data() {}
  /* setup(){
       return {}
   },*/
  // beforeCreate() {},
  // created() {},
  // beforeMount() {},
  // mounted() {},
  // beforeUpdate() {},
  // updated() {},
  // beforeUnmount() {},
  // unmounted() {},
  // ,methods: {}
};
</script>
<style>
.hover\:bg-red:hover {
  color: red;
}

.test-hover:hover {
  color: red;
}
.test-hover:active {
  color: green;
}
.bg-gradient-to-r {
  background-image: linear-gradient(to right, green, blue);
}
</style>
