<template>
  <div class="tailwind-wrapper h-full overflow-auto pb-100">
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
    <div style="width: 1000px; height: 800px;" class="bg-green-600">
        <img class="object-cover w-full" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" alt="">
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
    <div style="width: 200px" class="flex mt-40">
        <div class="flex-1 bg-blue-100 h-50 w-100 flex-none"></div>
        <div class="flex-1 bg-blue-400 h-50"></div>
        <div class="flex-1 bg-blue-700 h-50"></div>
    </div>
  </div>
</template>
<script>
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

</style>
