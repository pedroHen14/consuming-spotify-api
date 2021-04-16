import axios from "axios";

const api = axios.create({
  baseURL: "https://api.spotify.com/v1/",
  headers: {
    Authorization:
      "Bearer " +
      "BQBaMxRZY3CXPVm5GUeoyhedLPYs9vuT1Qa_qq_XQv8VIS9e5RNkRRzLd9Uii-Q9J2dSgjE9f5wivK2xLjqPqh43gCz8YkW4i7owUwC37LcozjyK5-y04Hv5dcA-pkT58swac6h_k0mqArGyxZfC9DmJUkUslzNhrhDBVahTPDGR2wah",
  },
});

export default api;
