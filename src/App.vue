

<template>
  <div class="side-bar">
    <router-link v-for="route in routes"
                 :key="route.name"
                 class="nav-link"
                 :to="route.path">{{route.meta.title}}</router-link>
  </div>
  <div class="app-wrapper overflow-hidden">
    <router-view />
  </div>
</template>

<script lang="ts">
import { routes } from './router';
export default {
  data() {
    return {
      routes
    };
  },
  setup() {}
};
</script>



<style scoped>
.side-bar {
  flex: 0 0 200px;
  height: 100%;
  overflow: auto;
  border-right: 1px solid #ccc;
}
.nav-link {
  display: block;
  height: 40px;
  line-height: 40px;
  color: #333;
  font-size: 16px;
  border-bottom: 1px solid #ccc;
  text-align: center;
}
.app-wrapper {
  flex: 1;
  height: 100%;
}
</style>
