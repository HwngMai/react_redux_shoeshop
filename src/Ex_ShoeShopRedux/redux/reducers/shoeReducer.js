import { XEM_CHI_TIET } from "../../constants/shoeConstants";
import { dataShoe } from "../../data_shoe";
// tạo store
let initialState = {
  shoeArr: dataShoe,
  detailShoe: dataShoe[0],
  gioHang: [],
};
// rxreducer
//tạo action
export let shoeReducer = (state = initialState, action) => {
  switch (action.type) {
    case XEM_CHI_TIET: {
      state.detailShoe = action.payload;
      return { ...state };
    }
    default:
      return state;
  }
};
