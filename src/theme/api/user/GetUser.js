import {getAxiosInstance} from "../api";

const GetUser=(id,CallBack)=>{
    getAxiosInstance().get("/user/personal_info/"+id )
        .then(response=>{
            const data=response.data;
            CallBack(true,data)
        })
        .catch(err=>{
            CallBack(false)
        })
}
export default GetUser