<template>
  <v-list two-line>
    <template v-for="(timeline, index) in timelines">
      <v-list-item :key="index">
        <!-- TODO: icon -->
        <!-- <v-list-item>
          <img
            :src="
              'http://localhost:8000/storage/images/' +
                timeline.tweet.account.avatar
            "
            v-if="timeline.tweet.account.avatar"
          />
          <v-icon v-else> </v-icon>
        </v-list-item>
        -->
        <v-list-item>
          <!-- <div
            v-text="
              timeline.originalFavorite
                ? timeline.originalFavorite.account.name +
                  'さんがいいねしました'
                : ''
            "
          ></div> -->
          <v-list-item v-html="timeline.tweet.account.twitter_id"></v-list-item>
          <v-list-item v-html="timeline.tweet.content"></v-list-item>
        </v-list-item>
      </v-list-item>
      <v-divider :key="index + '_divider'"></v-divider>
    </template>
  </v-list>
</template>
<script>
export default {
  props: { timelines: Array }
};
</script>
