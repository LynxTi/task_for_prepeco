<template>
  <div class="ui-input-block">
    <div v-if="label" class="ui-input-block__label">
      {{ label }}
    </div>
    <div class="ui-input-wrapper">
      <input
        v-mask="'{{99}} {{999}} {{99}} {{99}}'"
        class="ui-input ui-input_type-phone"
        :disabled="disabled"
        :placeholder="placeholder"
        type="text"
        :value="inputValue"
        @input="onChangeHandler"
      />
    </div>
  </div>
</template>

<script>


export default {
  name: "PhoneInput",
  data() {
    return {
      countryCode: "+380"
    }
  },
  props: {
    modelValue: {
      type: [String, Number],
      default: "",
    },
    error: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    showErrorMessage: {
      type: Boolean,
      default: true,
    },
    errorClass: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: null,
    },
    inputName: {
      type: String,
      default: "",
    }
  },
  computed: {
    inputValue() {
      return this.modelValue
          ? this.modelValue.replace(this.countryCode, "").trim()
          : "";
    },
  },
  methods: {
    onChangeHandler($event) {
      const value = $event.target.value.replaceAll(" ", "").substring(0, 9);


      this.$emit("update:modelValue", `${this.countryCode} ${value}`);
    },
  },
};
</script>
