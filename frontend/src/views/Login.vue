<template>
  <v-form @submit="login" onSubmit="return false;">
    <v-container>
      <v-layout>
        <v-flex xs12 md4>
          <v-text-field v-model="email" label="E-mail" required></v-text-field>
          <v-text-field v-model="pass" label="password" required></v-text-field>
          <v-btn color="primary" type="submit">login</v-btn>
          <router-link to="/signup"><v-btn text>signup</v-btn></router-link>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
</template>

<script>
import { LOGIN } from "../graphql/mutation.js";
import store from "../store.js";

export default {
  data: () => ({
    email: "",
    pass: ""
  }),
  methods: {
    // eslint-disable-next-line no-unused-vars
    login(e) {
      // ミューテーション
      this.$apollo
        .mutate({
          // Query
          mutation: LOGIN,
          // Parameters
          variables: {
            email: this.email,
            password: this.pass
          }
        })
        .then(data => {
          // eslint-disable-next-line no-unused-vars
          const token = localStorage.setItem(
            "vue_token",
            data.data.Login.access_token
          );
          store.commit("logined");
          this.$router.push("/");
        });
    }
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
