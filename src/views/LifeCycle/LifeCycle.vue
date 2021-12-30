<template>
  <div>
    <p>{{count}}</p>
    <button class=" text-16 text-white bg-purple-700 leading-none p-6 pl-30 pr-30 rounded-4"
            @click="addCount">add</button>
  </div>
</template>
<script>
import { ref } from 'vue';
export default {
  name: 'LifeCycle',
  // components: {},
  // props: {},

  setup() {
    console.log('setup');
    const count = ref(0);
    const addCount = () => {
      count.value++;
    };
    return {
      count,
      addCount
    };
  },
  beforeCreate() {
    console.log('beforeCreate');
  },
  created() {
    console.log('created');
  },
  beforeMount() {
    console.log('beforeMount');
  },
  mounted() {
    console.log('mounted');
  },
  beforeUpdate() {
    console.log('beforeUpdate');
  },
  updated() {
    console.log('updated');
  },
  beforeUnmount() {
    console.log('beforeUnmount');
  },
  unmounted() {
    console.log('unmounted');
  }
  // ,methods: {}
};
</script>
<style lang='stylus' scoped></style>

