<template>
  <div class="invite-user-modal">
  <InviteUserModalHeader/>
    <router-view v-slot="{ Component }">
        <component :is="Component" />
    </router-view>

  </div>
</template>

<script>
import InviteUserModalHeader from "@/components/InviteUserModal/InviteUserModalHeader.vue";

export default {
  components: {InviteUserModalHeader}


}
</script>

<style scoped>

</style>