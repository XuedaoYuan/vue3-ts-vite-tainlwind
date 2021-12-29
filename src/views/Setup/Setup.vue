<template>
  <div>
    <script-setup foo="foo"
                  @change="onChange"></script-setup>
  </div>
</template>
<script lang='ts'>
// import { ref } from 'vue'
import ScriptSetup from './components/ScriptSetup.vue';
export default {
  name: 'setup',
  // props: {},
  components: {
    ScriptSetup
  },
  // data() {}
  setup() {
    const onChange = (id: number) => {
      console.log(id);
    };
    return {
      onChange
    };
  }
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
<style scoped>
</style>
