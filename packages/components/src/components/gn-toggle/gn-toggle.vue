<template>
  <input
    :class="`${graphene_prefix}--tgl`"
    :checked="checked"
    type="checkbox"
  />
</template>

<script>
import { settings } from "@gn-components/src/settings.js";

export default {
  name: "GnToggle",
  props: {
    checked: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    graphene_prefix() {
      return settings.prefix;
    }
  }
};
</script>

<style lang="scss">
@import "@gn-styles/src/base";
@import "@gn-styles/src/layout";

.#{$prefix}--tgl {
  // border: rem(1.6px) solid $toggle--border--color;
  box-shadow: inset 0 0 0 rem(1px) $toggle--border--color;
  border-radius: $border--radius--circular;
  height: rem(24px);
  position: relative;
  width: rem(40px);

  @extend %reset--inputs;

  &:after {
    bottom: 0;
    content: "";
    display: block;
    margin: rem(3px);
    position: absolute;
    width: 42%;
    top: 0;
    transition-property: width, left, right;
    transition-duration: $duration--regular;
  }

  &:not(:checked) {
    &:after {
      background-color: $toggle--unchecked--color;
      border-top-right-radius: $border--radius--regular;
      border-bottom-right-radius: $border--radius--regular;
      border-top-left-radius: $border--radius--circular;
      border-bottom-left-radius: $border--radius--circular;
      left: 0;
      right: auto;
    }
  }
  &:checked {
    background-color: $toggle--checked--color;
    box-shadow: inset 0 0 0 rem(1px) transparent;

    &:after {
      background-color: var(--color--parent-background);
      border-top-left-radius: $border--radius--regular;
      border-bottom-left-radius: $border--radius--regular;
      border-top-right-radius: $border--radius--circular;
      border-bottom-right-radius: $border--radius--circular;
      left: auto;
      right: 0;
    }
  }
}
</style>
