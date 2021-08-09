<template>
  <v-card class="mx-auto my-12 base-card" max-width="374">
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img height="250" :src="merchant.logo" class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)">


    <v-card-title>{{ merchant.name }}</v-card-title>
    </v-img>


    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn v-if="!isFavMerchant" @click="addToFavs" class="ma-2" text icon color="yellow darken-1">
        <v-icon>mdi-star-outline</v-icon>
      </v-btn>
      <v-btn v-if="isFavMerchant" @click="removeFromFavs" class="ma-2" text icon color="yellow darken-2">
        <v-icon>mdi-star</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  props: {
    merchant: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    ...mapGetters({ favMerchants: "favMerchants"}),
    isFavMerchant() {
      return this.favMerchants.some((mer) => mer.id === this.merchant.id);
    }
  },
  methods: {
    ...mapActions({ addFavMerchant: "addFavMerchant", removeFavMerchant: "removeFavMerchant" }),
    addToFavs() {
      this.addFavMerchant(this.merchant);
    },
    removeFromFavs() {
      this.removeFavMerchant(this.merchant);
    },
  },
};
</script>

<style lang="scss" scoped>
.base-card {
  flex-basis: 375px;
}
</style>
