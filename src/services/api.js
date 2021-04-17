import axios from "axios";

const api = axios.create({
  baseURL: "https://api.spotify.com/v1/",
  headers: {
    Authorization:
      "Bearer " +
      "BQD9tOrsiPugBPxSK9bwCLV7UxgFJTgCrw6LBfYsRdVOE3eYKXPc-AKPb3s7LWJ4wS2kVXoBzIvSw7t9v-02kBjq4rjxzFyYpYhFqdvbitrsHUYZyI447klhx20DCtg2BZVe5NltAz1kX3IesvX7Ymv06gOCmcJ-uODD9uDAVtVi2twm",
  },
});

export default api;
