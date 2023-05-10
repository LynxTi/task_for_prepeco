<template>
  <Toggle :model-value="value" @change="$emit('change', $event.value)" />
</template>

<script>
import Toggle from "@vueform/toggle";

export default {
  name: "ToggleButton",
  components: {
    // toggle,
    Toggle,
  },
  props: {
    value: {
      type: [Boolean, Number],
      default: false,
    },
    disabled: {
      type: [Boolean],
      default: false,
    },
    colorUnchecked: {
      type: String,
      default: "#2D3136",
    },
  },
};
</script>

