<template>
  <div>
    <TestChild></TestChild>
    <!-- 动态组件 -->
    <component :is="TestChild"></component>
    <component :is="false ? TestChild : null"></component>
    <p>{{msg}}</p>
    <button @click="log">log</button>
    <button @click="log2">log</button>
    <button class="button block"
            @click="add">add-{{count}}</button>
    <p role="button">p-button</p>

    <!-- 命名空间组件 -->
    <Form.MyLabel></Form.MyLabel>
    <Form.MyInput></Form.MyInput>
    <div v-add-class>vAddClass</div>
    <p>{{props.foo}}--{{props.bar}}</p>
    <button @click="emitChange">emit</button>
  </div>
</template>
<script lang="ts">
export default {
  name: 'ScriptSetup'
};
</script>

<script setup lang="ts">
/* ======导入的内容直接暴露====== */
import { ref } from 'vue';
import TestChild from './TestChild.vue';
import { log2 } from './utils';
import * as Form from '../form-components/index';
/* ====== defineProps 和 defineEmits ======*/
interface Props {
  foo: string;
  bar?: number;
}
const props = withDefaults(defineProps<Props>(), {
  foo: 'default foo',
  bar: 0
});

const emits =
  defineEmits<{
    (e: 'change', id: number): void;
    (e: 'update', value?: string): void;
  }>();

function emitChange() {
  emits('change', 100);
}
/* ======自定义指令====== */
const vAddClass = {
  beforeMount: (el: HTMLElement) => {
    el.classList.add('custom-class');
    el.classList.add('color--red');
  }
};

console.log('setup created');
/* ====== 顶层声明的变量和函数也可以直接使用到模板====== */
let msg = 'hello';
function log() {
  console.log('log');
}
/* ====== 声明响应式的内容====== */
const count = ref(0);
function add() {
  count.value++;
}

/* ====== 向外部暴露属性 ====== */
// 比如通过比如ref获取到this实例之后可以访问 a 属性。 比如ScriptSetup.a  (ref 会和在普通实例中一样被自动解包)
const a = 1;
defineExpose({
  a
});
</script>
<style scoped>
.color--red {
  color: red;
}
</style>
