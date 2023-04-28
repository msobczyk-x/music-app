import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
    name: "UserSlice",
    initialState: {
        user: {},

    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },

    
    clearUserData: (state) => {
        state.user = {};


    },
},
});


export const { setUser, clearUserData } = UserSlice.actions;
export default UserSlice.reducer;