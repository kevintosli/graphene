<template>
  <div class="home">
    <gn-button
      value="Know more"
      description="Get our newsletter"
      icon="chevron_right"
      kind="primary"
      size="field"
      @click="test"
    />
    <button>Botão comum</button>
  </div>
</template>

<script>
export default {
  name: "home",
  methods: {
    test() {
      alert("Is working");
    }
  }
};
</script>

<style lang="scss">
.home {
  // --color--parent-background: black;
  // background: var(--color--parent-background);
}
</style>
