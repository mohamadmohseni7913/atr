import {getAxiosInstance} from "../api";

const GetAddress=(user,id,CallBack)=>{
    getAxiosInstance().put("/update/"+id,user )
        .then(response=>{
            const data=response.data;
            CallBack(true,data)
        })
        .catch(err=>{
            CallBack(false)
        })
}
export default GetAddress;