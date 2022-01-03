import axios from "axios";

import store from "./store";
import Actions from "./Actions";

const API_URL = "https://api.delta.exchange/v2/products";

export const dataFetchAPICall = async () => {
  try {
    const response = await axios.get(API_URL);
    if (response) {
      console.log(response);
    }
  } catch (err) {
    // handle error
  }
};
