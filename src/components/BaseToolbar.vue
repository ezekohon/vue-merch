<template>
<nav>
        <v-toolbar>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title @click="$router.push({name: 'Home'})" class="d-none d-md-block">Merchants App</v-toolbar-title>
      <v-toolbar-title class="d-md-none">M</v-toolbar-title>


         <v-text-field
      :value="queryString"
      @input="queryMerchants"
      append-icon="mdi-magnify"
      label="Search merchants"
      single-line
      hide-details
      clearable
      rounded
      solo
      class="mx-auto search-bar ml-8 my-2"
    ></v-text-field>

      <v-spacer></v-spacer>

      </v-toolbar>

          <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>John Leider</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          @click="$router.push({name: item.route})"
        >
              <v-list-item-icon>
                  <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</nav>
</template>

<script>
import debounce from 'lodash.debounce';
import { mapGetters, mapActions } from "vuex";
export default {

data(){
  return {
    drawer: false,
    items: [
          { title: 'Home', icon: 'mdi-view-dashboard', route: 'Home' },
          { title: 'Favorites', icon: 'mdi-star', route: 'Favorites' },
          { title: 'Log Out', icon: 'mdi-logout' },
    ],
  }
},
computed: {
    ...mapGetters({ queryString: "queryString" }),
},
methods: {
    ...mapActions({ getMerchants: "getMerchants" }),
    queryMerchants(value) {
      this.$store.commit('setQueryString', value);
      this.debouncedQueryMerchants();
    },
    debouncedQueryMerchants: debounce(function() {
      this.getMerchants();
    }, 300)
  },
}
</script>

<style lang="scss" scoped>
.search-bar {
  max-width: 350px;
}
</style>