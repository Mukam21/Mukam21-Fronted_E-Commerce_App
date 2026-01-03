// import { PayloadAction, createSlice } from "@reduxjs/toolkit";
// import { UserModel } from "../../types";

// export interface UserState {
//   userProfile: UserModel;
// }

// const initialState: UserState = {
//   userProfile: {} as UserModel,
// };

// const userSlice = createSlice({
//   name: "user",
//   initialState,
//   reducers: {
//     userLogin(state, action: PayloadAction<UserModel>) {
//       const profileData = action.payload;
//       state.userProfile = profileData;
//     },
//   },
// });
// export const { userLogin } = userSlice.actions;
// export default userSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserModel } from "../../types";

export interface UserState {
  userProfile: UserModel | null;
}

const initialState: UserState = {
  userProfile: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLogin(state, action: PayloadAction<UserModel>) {
      state.userProfile = action.payload;
    },
    userLogout(state) {
      state.userProfile = null;
    },
  },
});

export const { userLogin, userLogout } = userSlice.actions;
export default userSlice.reducer;
