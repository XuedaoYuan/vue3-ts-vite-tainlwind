<template>
  <div>
    <h1>CompositionApi</h1>
    <button class="w-100 bg-slate-500"
            @click="handleAdd">add {{count}}-{{doubleCount}}</button>

    <div>{{testProp}}</div>
  </div>
</template>
<script lang="ts">
import { ref, onMounted, watch, computed, toRefs, SetupContext } from 'vue';
interface MyProps {
  componentProp: string;
}
export default {
  name: 'CompositionApi',
  props: {
    testProp: String
  },
  // components: {},
  // data() {}
  setup(props, context: SetupContext) {
    const { testProp } = toRefs(props);
    console.log(testProp.value);
    console.log(props.testProp);

    const count = ref(0);
    const doubleCount = computed(() => count.value * 2);
    const handleAdd = () => {
      count.value++;
    };
    watch(count, (newVal, oldVal) => {
      console.log(newVal, oldVal);
    });

    onMounted(() => {
      console.log('onMounted');
    });
    return {
      handleAdd,
      count,
      doubleCount
    };
  },
  // beforeCreate() {},
  created() {
    console.log('created');
  },
  // beforeMount() {},
  mounted() {
    console.log('mounted');
  }
  // beforeUpdate() {},
  // updated() {},
  // beforeUnmount() {},
  // unmounted() {},
  // ,methods: {}
};
</script>
<style lang='stylus' scoped></style>
