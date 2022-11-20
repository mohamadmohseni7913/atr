import { combineReducers } from "redux";
import bugsReducer from "./bug";
import userReducer from "./user";
import shoppingBasketReducer from "./shoppingBasket";
import ProductReducer from "./ProductReducer";
 export default  combineReducers({
    bugs:bugsReducer,
    users:userReducer,
    basket:shoppingBasketReducer,
    product:ProductReducer
})