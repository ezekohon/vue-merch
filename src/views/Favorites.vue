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
import { mapGetters } from "vuex";
export default {
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
    ...mapGetters({ favMerchants: "favMerchants"}),
    pageCount() {
      let l = this.favMerchants?.length,
        s = this.size;
      return Math.ceil(l / s);
    },
    paginatedData() {
      const start = this.pageNumber * this.size - this.size,
        end = start + this.size;
      return this.favMerchants?.slice(start, end);
    },
  },
  methods: {
    nextPage(page) {
      this.pageNumber = page;
    },
  },
}
</script>