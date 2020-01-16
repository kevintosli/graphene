<template>
  <input :value="value" />
</template>

<script>
export default {
  name: "GnTextField",
  props: {
    value: String
  }
};
</script>
