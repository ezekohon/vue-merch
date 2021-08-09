import axios from "axios";

export default {
  async getMerchants(queryString) {
    const url =
        `https://nexus-api.demand-dev.io/v1/merchants?offset=10&limit=20&query=${queryString}&sort=name:asc`;
    const response = await axios.get(url);
    return response.data.merchants;
  },
};
