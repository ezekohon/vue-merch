<template>
  <v-app>
      <BaseToolbar />
      <v-main>
        <v-container fluid>
          <router-view />
        </v-container>
      </v-main>
  </v-app>
</template>

<script>
import BaseToolbar from "@/components/BaseToolbar.vue";
export default {
  name: "Home",
  components: {
    BaseToolbar,
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');

#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
