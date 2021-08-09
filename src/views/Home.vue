<template>
  <div>
    <div class="home d-flex flex-row flex-wrap">
      <BaseCard
        v-for="(item, index) in paginatedData"
        :key="index"
        :merchant="item"
      />
    </div>
    <div class="text-center">
      <v-pagination
        v-model="pageNumber"
        :length="pageCount || 0"
        @input="nextPage"
      ></v-pagination>
    </div>
  </div>
</template>

<script>
import BaseCard from "@/components/BaseCard.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Home",
  components: {
    BaseCard,
  },
  data() {
    return {
      pageNumber: 1,
      size: 6,
    };
  },
  computed: {
    ...mapGetters({ merchants: "merchants", queryString: "queryString" }),
    pageCount() {
      let l = this.merchants?.length,
        s = this.size;
      return Math.ceil(l / s);
    },
    paginatedData() {
      const start = this.pageNumber * this.size - this.size,
        end = start + this.size;
      return this.merchants?.slice(start, end);
    },
  },
  methods: {
    ...mapActions({ getMerchants: "getMerchants" }),
    nextPage(page) {
      this.pageNumber = page;
    },
  },
  mounted() {
    this.getMerchants();
  },
};
</script>