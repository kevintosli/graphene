<template>
  <button class="gn-btn">
    <slot />
  </button>
</template>

<script>
export default {
  name: "GnButton"
};
</script>

<style lang="scss">
@import "@gn-styles/src/base";

.#{$prefix}--btn {
  background-color: var(--ui-color-accent);
}
</style>
