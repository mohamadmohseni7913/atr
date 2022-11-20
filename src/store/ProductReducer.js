import { createSlice } from "@reduxjs/toolkit";
import  moment  from "moment";
import { apiCallBegan } from "./api";
import { createSelector } from "reselect";




const slice = createSlice({
    name:"product",
    initialState:{
        list:[],
        loading:false,
        lastFetch:null
    },
    reducers:{
        productRequested:(state,action)=>{
            state.loading=true
        },
        productRequestFailed:(state,action)=>{
            state.loading=false
        },
        productAdded:(state,action)=>{
            state.list.push(action.payload)
        },
        productRecieved:(state,action)=>{
            state.list=action.payload;
            state.loading=false;
            
        }

    }
})
// url
const url="/product/list"
 export const {productAdded,productRequestFailed,productRequested,productRecieved} =slice.actions;
export const loadProduct=()=>(dispath,getState)=>{
    const {lastFetched} = getState().entities.bugs;
    const diifInMinute= moment().diff(moment(lastFetched), "minutes");
    if(diifInMinute<10){
        return
    }
    else{
        dispath(
            apiCallBegan({
                url,
                onStart:productRequested.type,
                onSuccess:productRecieved.type,
                onStop:productRequestFailed.type
            })
        )
        
    }

};

export default slice.reducer;