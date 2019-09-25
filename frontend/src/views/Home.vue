<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12> <v-subheader> Tweet </v-subheader> </v-flex>
      <v-flex mb-2>
        <v-sheet class="pa-4" elevation="6">
          <v-form @submit="postTweet" onSubmit="return false;">
            <v-text-field
              v-model="tweet"
              label="What’s happening?"
              required
            ></v-text-field>
            <v-btn type="submit" color="primary">tweet</v-btn>
          </v-form>
        </v-sheet>
      </v-flex>
      <v-flex xs12>
        <v-sheet class="pa-4" elevation="6">
          <Timeline v-bind:timelines="timelines" />
        </v-sheet>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { CREATE_TWEET } from "../graphql/mutation.js";

import { TIMELINE } from "../graphql/query.js";
import Timeline from "../components/Timeline.vue";

export default {
  components: { Timeline },
  data: () => ({
    tweet: "",
    timelines: []
  }),
  methods: {
    // eslint-disable-next-line no-unused-vars
    postTweet(e) {
      this.$apollo
        .mutate({
          mutation: CREATE_TWEET,
          variables: {
            tweet: this.tweet
          }
        })
        // eslint-disable-next-line no-unused-vars
        .then(data => {
          this.$apollo.queries.timelines.refetch({
            id: 0
          });
        });
    }
  },
  apollo: {
    timelines: {
      query: TIMELINE,
      loadingKey: "loading", // Parameters
      variables() {
        return { id: 0 };
      },
      update(data) {
        return data.Timeline;
      }
    }
  }
};
</script>
