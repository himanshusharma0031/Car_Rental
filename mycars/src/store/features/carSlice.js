import {createSlice} from "@reduxjs/toolkit";

const carSlice = createSlice({
    name:"car",
    initialState:{
        loading:false,
        success:false,
        car:[],
        error :null
    },
    reducers:{},
   // extraReducers:(builder) => {},
});
export default carSlice.reducer;