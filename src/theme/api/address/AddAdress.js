import {getAxiosInstance} from "../api";

const AddAddress=(id,address,CallBack)=>{
    getAxiosInstance().post("/address/add/"+id,address)
        .then(response=>{
            const data=response.data;
            CallBack(true,data)
        })
        .catch(err=>{
            CallBack(false)
        })
}
export default AddAddress;


// Addddress
// /address/add/ 
// put Address
// /address/update 
// deleteadress
// /address/delete