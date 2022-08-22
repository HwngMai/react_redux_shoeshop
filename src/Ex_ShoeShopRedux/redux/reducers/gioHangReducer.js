import { ADD_TO_CART } from "../../constants/shoeConstants";

const initialState = {
  gioHang: [],
};

export let gioHangReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      // Xử lí logic thêm giỏ hàng
      let gioHangCapNhat = [...state.gioHang];
      let index = gioHangCapNhat.findIndex(
        (spGioHang) => spGioHang.id === action.spGioHang.id
      );
      // Nếu tìm thấy index tức đã có trên giỏ hàng
      if (index !== -1) {
        // Tăng số lượng lên 1
        gioHangCapNhat[index].soLuong += 1;
        // Không tìm thấy tức chưa có trên giỏ hàng
      } else {
        // đưa spGioHang mới vào gioHang
        gioHangCapNhat.push(action.spGioHang);
      }
      // tạo giỏ hàng mới cho hàm renderGioHang
      state.gioHang = gioHangCapNhat;
      return { ...state };
    }
  }

  return state;
};
