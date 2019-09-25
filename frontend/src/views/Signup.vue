<template>
  <v-form @submit="createAccount" onSubmit="return false;">
    <v-container>
      <v-layout>
        <v-flex xs12 md4>
          <v-text-field v-model="name" label="name" required></v-text-field>
          <v-text-field
            v-model="twitterId"
            label="twitterId"
            required
          ></v-text-field>
          <v-text-field v-model="email" label="E-mail" required></v-text-field>
          <v-text-field v-model="pass" label="password" required></v-text-field>
          <v-text-field
            v-model="passConf"
            label="password_confirm"
            required
          ></v-text-field>
          <v-btn color="primary" type="submit">アカウント作成</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
</template>

<script>
import { CREATE_ACCOUNT } from "../graphql/mutation.js";
import store from "../store.js";

export default {
  data: () => ({
    name: "",
    twitterId: "",
    email: "",
    passConf: "",
    pass: ""
  }),
  methods: {
    // eslint-disable-next-line no-unused-vars
    createAccount(e) {
      // mutation
      this.$apollo
        .mutate({
          // GraphQL
          mutation: CREATE_ACCOUNT, // Variables
          variables: {
            name: this.name,
            twitter_id: this.twitterId,
            email: this.email,
            password: this.pass,
            password_confirmation: this.passConf
          }
        })
        // eslint-disable-next-line no-unused-vars
        .then(data => {
          // Sucess
          // eslint-disable-next-line no-console
          console.log(data);
          // eslint-disable-next-line no-unused-vars
          const token = localStorage.setItem(
            "vue_token",
            data.data.CreateAccount.token.access_token
          );
          store.commit("logined");
          this.$router.push("/");
        })
        // eslint-disable-next-line no-unused-vars
        .catch(error => {
          // Error
          // eslint-disable-next-line no-console
          console.error(error);
        });
    }
  }
};
</script>
