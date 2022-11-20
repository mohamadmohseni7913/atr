import { createSlice } from "@reduxjs/toolkit";

let lastId=0;
// reducer
const slice= createSlice({
    name:"shoppingBasket",
    initialState:{
        list:[],
        lastFetch:null,
        loading:false
    },
    reducers:{
        producteAdded:(state,action)=>{
            // state.list.push({
            // id:++lastId,
            // name:action.payload.name,
            // code:action.payload.code,
            // mil:action.payload.mil
            // })
        //  state.list.push(action.payload.id)
        
           state.list.push(action.payload)

       
        },
        productRemoved:(state,action)=>{
            console.log('this is remove ', action);
          state.list=  state.list.filter(product=>product.id!==action.payload.id)
        },
        productRequsted:(state,action)=>{
            state.loading=true
        },
        productRequstFaild:(state,action)=>{
            state.loading=false
        },
        productMillPlused:(state,action)=>{
            const index = state.list.findIndex(pro=>pro.id == action.payload.id)
            console.log("this is mil ",state.list[index].mil);
            state.list[index].mil=+1
        },
        productMillMinused:(state,action)=>{

        }

    }
})
 export const {producteAdded,productRemoved,productMillPlused,productMillMinused} =slice.actions;
// add product to shopping basket 
export const productAddToBasket=(id)=>(dispatch,getState)=>{
    const products = getState().entities.product
    const newww=products.list.filter(item=>{return (item.id==id)})
      dispatch(producteAdded(newww[0]))
}
// handle mil of the product
export const productMilHandler=(type,id)=>(dispatch,getState)=>{
    if(type=="plus"){
        dispatch(productMillPlused({id}))
        console.log('this is plused id',id);
        console.log('this is plused');
    }
    else if(type=="minus"){
        // dispatch(productMillMinused(id))
        console.log('this is minused');

    }
    
}


export default slice.reducer;