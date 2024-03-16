import { createSlice } from "@reduxjs/toolkit";
export const slice=createSlice({
    name:"ask",
    
    initialState:{arr:{}},

    reducers:{update:(state,action)=>{
        state.name=action.payload
    }}
})

export default slice.reducer
export const {update} =slice.actions