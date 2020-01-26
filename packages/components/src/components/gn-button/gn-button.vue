<template>
  <button
    role="button"
    :class="button_classes"
    :title="kind.match(/icon/) ? value : ''"
    :disabled="disabled"
    v-on="listeners"
  >
    <div v-if="!kind.match(/icon/)" class="flex-col flex-grow-1">
      <div :class="`${graphene_prefix}--btn--value`">{{ value }}</div>
      <div :class="`${graphene_prefix}--btn--description`">
        {{ description }}
      </div>
    </div>
    <div v-if="icon" class="gn--icon">{{ icon }}</div>
    <div :class="`${graphene_prefix}--btn--focus-ring`" />
  </button>
</template>

<script>
import { settings } from "@gn-components/src/settings.js";

export default {
  name: "GnButton",
  props: {
    value: String,
    description: String,
    icon: String,
    kind: {
      type: String,
      default: "standard",
      validator: value => {
        return value.match(/primary|standard|icon|icon-rounded/);
      }
    },
    size: {
      type: String,
      default: "field",
      validator: value => {
        return value.match(/touch|field/);
      }
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    graphene_prefix() {
      return settings.prefix;
    },
    button_classes() {
      let classes = [
        `${this.graphene_prefix}--btn`,
        `${this.graphene_prefix}--btn--${this.kind.toLowerCase()}`,
        `${this.graphene_prefix}--btn--${this.size.toLowerCase()}`
      ];

      if (this.description && !this.kind.match(/icon/)) {
        classes.push("__description");
      }

      if (this.icon) {
        classes.push("align-items-center __icon");
      }

      return classes;
    },
    listeners() {
      return Object.assign({}, this.$listeners, {
        click: this.$emit("click"),
        touchstart: this.$emit("touchstart"),
        touchend: this.$emit("touchend"),
        touchleave: this.$emit("touchleave"),
        mousedown: this.$emit("mousedown"),
        mouseup: this.$emit("mouseup"),
        mouseenter: this.$emit("mouseenter"),
        mouseleave: this.$emit("mouseleave")
      });
    }
  }
};
</script>

<style lang="scss">
@import "@gn-styles/src/base";
@import "@gn-styles/src/layout";

.#{$prefix}--btn {
  @include gn--font--style--label();
  border-radius: $border--radius--regular;
  cursor: default;
  display: inline-flex;
  flex-direction: row;
  position: relative;
  @extend %reset--inputs;

  &.__description,
  &.__icon {
    .#{$prefix}--btn--value,
    .#{$prefix}--btn--description {
      text-align: left;
    }
  }
  &.__description {
    height: auto;
    padding: rem(12px) rem(16px);
  }

  .#{$prefix}--btn--value {
    font-weight: $gn--font--weight--semibold;
  }
  .#{$prefix}--btn--description {
    @include gn--font--style--disclaimer();
  }

  .#{$prefix}--btn--focus-ring {
    background: transparent;
    border: $button--focus-ring--width solid transparent;
    border-radius: $border--radius--regular;
    box-shadow: 0 0 0 0 transparent;
    pointer-events: none;
    position: absolute;
    transition-property: box-shadow;
    transition-duration: $duration--instant;
    @extend %pin-a;
  }
  &:focus {
    .#{$prefix}--btn--focus-ring {
      border-color: $button--focus-ring--color;
      box-shadow: inset 0 0 0 rem(1px) var(--color--parent-background);
    }
  }

  .#{$prefix}--icon {
    font-size: rem(20px);
    text-align: center;
  }

  &--touch {
    height: rem(48px);
    padding: 0 rem(20px);
  }
  &--field {
    height: rem(40px);
    padding: 0 rem(16px);
  }

  &--primary {
    background-color: $button--primary--color;
    box-shadow: inset 0 rem(-1px) 0 $color--border;
    color: $button--text--color;

    &:not(:disabled):hover:active {
      background-color: darken($button--primary--color, 8);
    }
  }
  &--primary,
  &--standard {
    .#{$prefix}--icon {
      margin-left: rem(8px);
    }
  }
  &--standard,
  &--icon,
  &--icon-rounded {
    background-color: $button--standard--color;
    color: $color--text--primary;

    &:not(:disabled):hover:active {
      background-color: darken($button--standard--color, 6);
    }
  }
  &--icon,
  &--icon-rounded {
    height: auto;
    padding: rem(8px);

    .#{$prefix}--icon {
      font-size: rem(24px);
      flex-grow: 1;
    }
  }
  &--icon-rounded {
    border-radius: $border--radius--circular;

    .#{$prefix}--btn--focus-ring {
      border-radius: $border--radius--circular;
    }
  }

  &:disabled {
    background: $button--disabled--color;
    color: $color--text--disabled;
    cursor: not-allowed;
  }
}
</style>
