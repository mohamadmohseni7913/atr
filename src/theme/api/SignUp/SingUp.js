import {getAxiosInstance} from "../api";

const SignUp=(user,CallBack)=>{
    getAxiosInstance().post("/user/sign_up",user )
        .then(response=>{
            const data=response.data;
            CallBack(true,data)
        })
        .catch(err=>{
            CallBack(false)
        })
}
export default SignUp;