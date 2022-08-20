import { dataShoe } from "../../data_shoe";

let initialState = {
  shoeArr: dataShoe,
  detailShoe: dataShoe[0],
  gioHang: [],
};
// rxreducer
export let shoeReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
