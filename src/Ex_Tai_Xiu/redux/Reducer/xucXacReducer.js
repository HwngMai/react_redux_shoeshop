import { PLAY_GAME } from "../../xucXacConstants/xucXacConstants";

const initialState = {
  luaChon: "",
  soBanThang: 0,
  soLuotChoi: 0,
  mangXucXac: [
    {
      img: "./xuc_xac/1.png",
      giaTri: 1,
    },
    {
      img: "./xuc_xac/1.png",
      giaTri: 1,
    },
    {
      img: "./xuc_xac/1.png",
      giaTri: 1,
    },
  ],
};

export let xucXacReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // Viết hàm random xúc xắc
    case PLAY_GAME: {
      let newMangXucXac = [];
      //Đổi giá trị xúc xắc cho từng item trong mangXucXac
      state.mangXucXac.forEach((item) => {
        // tạo số random
        let randomNum = Math.floor(Math.random() * (6 - 1 + 1) + 1);
        let newXucXac = {
          img: `./xuc_xac/${randomNum}.png`,
          giaTri: randomNum,
        };
        newMangXucXac.push(newXucXac);
      });
      state.mangXucXac = newMangXucXac;
      return { ...state };
    }
    default:
      return state;
  }
};
