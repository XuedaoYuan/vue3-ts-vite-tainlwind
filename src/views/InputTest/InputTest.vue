<template>
  <div>
    <input v-model="username"
           type="text"
           class="border-2 border-solid border-gray-500 pl-8 text-14 text-purple-700">

    <p class="mt-20 text-14 text-purple-700">{{username}}</p>
    <p>{{a}}</p>
    <input v-model="isCheck"
           type="checkbox" />
    <p class="mt-20 text-14 text-purple-700">{{isCheck}}</p>
    <!-- 默认情况下，组件上的 v-model 使用 modelValue 作为 prop 和 update:modelValue 作为事件。 我们可以通过向 v-model 传递参数来修改这些名称：-->
    <MyInput v-model:title="myTitle" v-model:name="myName"></MyInput>
    <p>myTitle: {{myTitle}}---myName:{{myName}}</p>
  </div>
</template>
<script lang="ts">
import { ref } from 'vue';
import MyInput from './components/MyInput.vue';
export default {
  name: 'InputTest',
  // props: {},
  components: {
    MyInput
  },
  data() {
    return {
      a: 1,
      myTitle: '',
      myName: ''
    };
  },
  setup() {
    const username = ref('');
    const isCheck = ref(false);
    return {
      username,
      isCheck
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
