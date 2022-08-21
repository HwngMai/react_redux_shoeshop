import { combineReducers } from "redux";
import { shoeReducer } from "./shoeReducer";
import { gioHangReducer } from "./gioHangReducer";
export const rootReducer_ShoeShop = combineReducers({
  shoeReducer,
  gioHangReducer,
});
