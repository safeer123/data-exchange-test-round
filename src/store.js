import { createStore } from "redux";

import Actions from "./Actions";
import { dataFetchAPICall } from "./APICall";

const initialState = {
  data: [
    {
      Symbol: "X",
      Description: "xyz abc",
      Underlying_Asset: "nhy",
      Mark_Price: 2
    },
    {
      Symbol: "D",
      Description: "sdf ert ert",
      Underlying_Asset: "dfg",
      Mark_Price: 4.56
    }
  ]
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.FETCH_TABLE_DATA: {
      dataFetchAPICall();
      return state;
    }
    case Actions.TABLE_DATA_RECEIVED: {
      return {
        ...state,
        data: action.data
      };
    }
    default:
      return state;
  }
};

const store = createStore(rootReducer);

export default store;
