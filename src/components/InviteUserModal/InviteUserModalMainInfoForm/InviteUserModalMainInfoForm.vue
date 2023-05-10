<template>
  <div>
    <div class='divider'/>
    <form class="invite-user-modal__main-info-form panel">
      <InputBlock
          label="First Name"
          placeholder="First Name"
          v-model="form.firstName"
      />
      <InputBlock
          label="Last Name"
          placeholder="Last Name"
          v-model="form.lastName"
      />
      <InputBlock
          label="Email Address"
          placeholder="Email Address"
          v-model="form.email"
      />
      <PhoneInput
        label="Phone Number"
        placeholder="Phone Number"
        v-model="form.phone"
      />
      <InputBlock
          label="Position"
          placeholder="Position"
          v-model="form.position"
      />
      <SelectInput
          label="Available in company"
          v-model="form.company"
          :options="examplesCompany"
          label-field="name"
          value-field="id"
      />
    </form>

    <div class='divider'/>
    <div class="invite-user-modal__main-info-form__footer panel">
      <ToggleButton :value="form.isActiveInAllCompanies" @change="form.isActiveInAllCompanies"/>
      <div
          class="form-button"
          @click="onClickbtn">Next Step
      </div>
    </div>


  </div>

</template>

<script>
import InputBlock from "@/components/ui/InputBlock/InputBlock.vue";
import PhoneInput from "@/components/ui/PhoneInput/PhoneInput.vue";
import SelectInput from "@/components/ui/SelectInput/SelectInput.vue";
import ToggleButton from "@/components/ui/ToggleButton/ToggleButton.vue";

export default {
  components: {ToggleButton, SelectInput, PhoneInput, InputBlock},
  data() {
    return {
      examplesCompany: [
        {name: 'Precoro', id: '1111'},
        {name: 'Egolist', id: '22222'},
        {name: 'Pornohub)', id: '33333'},
      ],
      form: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        position: '',
        company: '',
        isActiveInAllCompanies: true
      },
    }
  },
  methods: {
    onClickbtn() {
      console.log('form', this.form)
    }
  }

}
</script>

<style src="@vueform/toggle/themes/default.css">

</style>