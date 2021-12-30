<template>
  <div>
    <label>
      <span>title: </span>
      <input type="text"
             :value="title"
             class="bg-gray-200"
             @input="onTitleInput($event)"></label>
    <label>
      <span>name: </span>
      <input type="text"
             :value="name"
             class="bg-gray-200"
             @input="onNameInput($event)"></label>

  </div>
</template>
<script>
// import { ref } from 'vue'
export default {
  name: 'MyInput',
  props: {
    title: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  },
  emits: ['update:title', 'update:name'],
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
  methods: {
    onTitleInput(e) {
      this.$emit('update:title', e.target.value);
    },
    onNameInput(e) {
      this.$emit('update:name', e.target.value);
    }
  }
};
</script>
