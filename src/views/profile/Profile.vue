<template>
  <div>
      <nav-bar class="nav-bar">
        <template v-slot:center class="center">我的</template>
      </nav-bar>
      <profile-user/>
      <profile-data/>
      <profile-list/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import ProfileUser from './ProfileUser.vue'
import ProfileData from './ProfileData.vue'
import ProfileList from './ProfileList.vue'
export default {
  components: { NavBar, ProfileUser, ProfileData, ProfileList },
    name:'Profile'
}
</script>

<style scoped>
.nav-bar{
background-color: var(--color-tint);
color: #fff;
}
</style>