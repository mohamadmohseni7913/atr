import {getAxiosInstance} from "../api";

const GetProduct=(user,CallBack)=>{
    getAxiosInstance().get("/product/list" )
        .then(response=>{
            const data=response.data;
            CallBack(true,data)
        })
        .catch(err=>{
            CallBack(false)
        })
}
export default GetProduct;





// Product/list Get
// Product/category  Get 
// Product/product/rate   Get
// Product/Comment    Get



