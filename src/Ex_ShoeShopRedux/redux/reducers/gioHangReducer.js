import {
  ADD_TO_CART,
  MINUS_PLUS_ITEM,
  REMOVE_ITEM,
} from "../../constants/shoeConstants";
// Khởi tạo store chứa giỏ hàng
const initialState = {
  gioHang: [],
};
// cú pháp khởi tạo lấy giỏ hàng từ component:
export let gioHangReducer = (state = initialState, action) => {
  switch (action.type) {
    //FUNC Thêm vào giỏ hàng
    case ADD_TO_CART: {
      // Xử lí logic thêm giỏ hàng
      // tạo giỏ hàng cập nhật (gioHangCapNhat) = giỏ hàng hiện tại (state.gioHang)
      let gioHangCapNhat = [...state.gioHang];
      // tìm index của key trong gioHangCapNhat để xem có key đó đã có trên gioHang chưa
      let index = gioHangCapNhat.findIndex(
        // tìm id spGioHang (spGioHang.id) trong gioHangCapNhat so với (action.spGioHang)tức key tại button onclick có trùng ko
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
      // Trả về state mới cho store gioHangReducer
      return { ...state };
    }
    //FUNC Tăng giảm số lượng
    case MINUS_PLUS_ITEM: {
      const { index, changeType } = action;
      console.log("action: ", action);
      let gioHangCapNhat = [...state.gioHang];
      // xử lí
      // kiểm tra nếu changeType = true tức cộng thêm
      if (changeType) {
        //cộng thêm 1
        gioHangCapNhat[index].soLuong += 1;
        // changeType = false tức trừ đi
      } else {
        if (gioHangCapNhat[index].soLuong >= 2)
          gioHangCapNhat[index].soLuong -= 1;
        else {
          gioHangCapNhat[index].soLuong = 1;
        }
      }
      //Cập nhật lại state của gioHang
      state.gioHang = gioHangCapNhat;
      return { ...state };
    }
    //FUNC xóa spGioHang
    case REMOVE_ITEM: {
      const { index } = action;
      let gioHangCapNhat = [...state.gioHang];
      gioHangCapNhat.splice(index, 1);
      state.gioHang = gioHangCapNhat;
      return { ...state };
    }
  }
  return state;
};
