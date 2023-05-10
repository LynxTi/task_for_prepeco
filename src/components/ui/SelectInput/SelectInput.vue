<template>
  <div class="ui-select-wrapper">
    <div v-if="label" class="ui-input-block__label">
      {{ label }}
    </div>

    <vue-select
        appendToBody
        :calculate-position="withPopper"
        class="ui-select"
        :class="{ 'ui-select_disabled': disabled }"
        :clearable="false"
        :disabled="disabled"
        :label="labelField"
        :options="options"
        :placeholder="placeholder"
        :searchable="searchable"
        :model-value="selectedValue"
        @update:modelValue="onChange"
    />
  </div>
</template>

<script>
import VueSelect from "vue-select";
import { createPopper } from "@popperjs/core";

export default {
  name: "SelectInput",
  components: {
    VueSelect,
  },
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    options: {
      type: Array,
      default: () => [],
    },
    labelField: {
      type: String,
      default: "name",
    },
    valueField: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [Number, String, Object],
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    }
  },
  computed: {
    selectedValue() {
      if (!this.valueField) {
        return this.modelValue;
      }

      return (
          this.options.find(
              (item) => item[this.valueField] === this.modelValue
          ) || null
      );
    },
  },
  methods: {
    onChange(value) {
      this.$emit(
          "update:modelValue",
          this.valueField ? value[this.valueField] : value
      );
    },
    withPopper(dropdownList, component, { width }) {
      /**
       * We need to explicitly define the dropdown width since
       * it is usually inherited from the parent with CSS.
       */
      dropdownList.style.width = width;
      dropdownList.style.height = 150;

      /**
       * Here we position the dropdownList relative to the $refs.toggle Element.
       *
       * The 'offset' modifier aligns the dropdown so that the $refs.toggle and
       * the dropdownList overlap by 1 pixel.
       *
       * The 'toggleClass' modifier adds a 'drop-up' class to the Vue Select
       * wrapper so that we can set some styles for when the dropdown is placed
       * above.
       */
      const popper = createPopper(component.$refs.toggle, dropdownList, {
        modifiers: [
          {
            name: "offset",
            options: {
              offset: [0, 3],
            },
          },
          {
            name: "toggleClass",
            enabled: true,
            phase: "write",
            fn({ state }) {
              component.$el.classList.toggle(
                  "drop-up",
                  state.placement === "top"
              );
            },
          },
        ],
      });

      /**
       * To prevent memory leaks Popper needs to be destroyed.
       * If you return function, it will be called just before dropdown is removed from DOM.
       */
      return () => popper.destroy();
    },
  },
};
</script>
