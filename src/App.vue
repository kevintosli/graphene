<template>
  <application>
    Welcome to Graphene website!
    <router-view />
  </application>
</template>

<script>
import Vue from "vue";

Vue.config.ignoredElements.push("application");

export default {};
</script>

<style lang="scss">
@import "@scss/global";

application {
  display: block;
}
</style>
