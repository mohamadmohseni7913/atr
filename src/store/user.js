import { createSlice } from "@reduxjs/toolkit";

let lastId=0;
const slice=createSlice({
    name:'user',
    initialState:[],
    reducers:{
        addUser:(state,action)=>{
            state.push({
                id:++lastId,
                name:action.payload.name
            })
        },
        //  removeUser:(state,action)=>{
        //      return state
        //  }
    }
})
export const {addUser} =slice.actions
export default slice.reducer