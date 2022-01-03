import axios from "axios";

import store from "./store";
import Actions from "./Actions";

const API_URL = "https://api.delta.exchange/v2/products";

export const dataFetchAPICall = async () => {
  try {
    const response = await axios.get(API_URL);
    if (response && response.status === 200) {
      // console.log(response);
      store.dispatch({
        type: Actions.TABLE_DATA_RECEIVED,
        data: response.data?.result || [],
      });
    }
  } catch (err) {
    // handle error
  }
};
