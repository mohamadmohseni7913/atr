import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import {apiCallBegan} from "./api";
import moment from "moment"
let lastId = 0;


const slice = createSlice({
    name: 'bugs',
    initialState: {
        list:[],
        loading:false,
        lastFetched:null  
    },
    reducers: {
        bugsRequested:(bugs,action)=>{
            bugs.loading=true
        },


        bugsrecieved:(bugs,action)=>{
           bugs.list= action.payload;
           bugs.loading=false;
           bugs.lastFetched=Date.now()
        },
        bugsRequestedFaild:(bugs,action)=>{
            bugs.loading=false
        },
        bugAdded: (bugs, action) => {
            bugs.list.push(action.payload)
        },
        bugResolved: (bugs, action) => {
            const index = bugs.list.findIndex(item => item.id === action.payload.id)
            bugs.list[index].resolved = true;
        },
        bugAssignToUser:(bugs,action)=>{
            const {id:bugId,userId}=action.payload
            const index= bugs.list.findIndex(bug=>bug.id===bugId)
            bugs.list[index].userId=userId
        }
    }
})

export const { bugAdded,
     bugResolved,
     bugAssignToUser,
     bugsrecieved,
     bugsRequested,
     bugsRequestedFaild } = slice.actions
// action creators
// export const loadBugs=()=>{
//     return apiCallBegan({
//         url:"/bugs",
//         onSuccess:"bugs/bugsrecieved",
//     })
// }
const url = "/bugs"

export const loadBugs=()=>(dispath,getState)=>{
    const {lastFetched} = getState().entities.bugs;
    const diifInMinute= moment().diff(moment(lastFetched), "minutes");
    if(diifInMinute<10){
        return
    }
    else{
        dispath(
            apiCallBegan({
                url,
                onStart:bugsRequested.type,
                onSuccess:bugsrecieved.type,
                onStop:bugsRequestedFaild.type
            })
        )
        
    }

};
export const addBug=bug =>apiCallBegan({
    url,
    method:'post',
    data:bug,
    onSuccess:bugAdded.type
    
})
export const resolveBug=id=>apiCallBegan({
    url:url+"/"+id,
    method:'patch',
      data:{resolved:true},
    onSuccess:bugResolved.type
})
export const assignBugToUser=(userId,bugId)=>apiCallBegan({
    url:url+"/"+bugId,
    method:"patch",
    data:{userId},
    onSuccess:bugAssignToUser.type
})



export default slice.reducer;
// this is selector
// export const getUnresolvedBug = state => state.entities.bugs.filter(bug=>!bug.resolve);
export const getUnresolvedBug= createSelector(
    state=>state.entities.bugs.list,
    // state=>state.entities.project,
    bugs=>bugs.filter(bug=>!bug.resolved)
)
export const getBugsByUser=createSelector(
    state=>state.entities.bugs,
    bugs=>bugs.filter(bug=>bug.userId)
)