import {getAxiosInstance} from "../api";

const GetAddress=(id,CallBack)=>{
    getAxiosInstance().get("/user/address/"+id )
        .then(response=>{
            const data=response.data;
            CallBack(true,data)
        })
        .catch(err=>{
            CallBack(false)
        })
}
export default GetAddress;