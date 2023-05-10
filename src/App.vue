<template>
  <div class="wrapper">
  <InviteUserModal/>
  </div>

</template>

<script>
import '@/assets/sass/index.sass'
import InviteUserModal from "@/components/InviteUserModal/InviteUserModal.vue";
export default {
  name: 'App',
  components: {
    InviteUserModal,
  },
  created() {
  }
}
</script>

<style>

</style>
