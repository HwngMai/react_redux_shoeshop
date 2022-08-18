import { TANG_SO_LUONG } from "../constants/numberConstants";

let initialState = {
  soLuong: 100,
  isLogin: true,
};

export let numberReducer = (state = initialState, action) => {
  switch (action.type) {
    case TANG_SO_LUONG: {
      state.soLuong++;
      return { ...state };
    }
    case "GiamSoLuong": {
      state.soLuong -= action.payload;
      return { ...state };
    }

    default: {
      return state;
    }
  }
};
