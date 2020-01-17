<template>
  <div class="home">
    <gn-button
      value="Know more"
      description="Get our newsletter"
      icon="chevron_right"
      kind="standard"
      size="touch"
      @click="console.log('clicou')"
    />
    <button>Botão comum</button>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>
