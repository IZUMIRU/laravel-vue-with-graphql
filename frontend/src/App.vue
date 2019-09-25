<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <router-link to="/">
          <span>Twitter</span>
          <span class="font-weight-light"> | Laravel+Vue.js+GraphQL</span>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <router-link to="/profile"><v-btn text>profile</v-btn></router-link>
      <router-link to="/login"><v-btn text>login</v-btn></router-link>
      <router-link to="/signup"><v-btn text>signup</v-btn></router-link>
      <!-- <router-link to="/user"><v-btn text>user</v-btn></router-link> -->
    </v-app-bar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      //
    };
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
