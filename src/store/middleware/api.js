import axios from "axios";
import * as actions from "../api"
import { getAxiosInstance } from "../../theme/api/api";

const api = ({ dispatch }) => next => async action => {
    if (action.type !== actions.apiCallBegan.type) return next(action);
    // dispatch(bugsRequested)

    const { url, method, data, onSuccess, onError, onStart, onStop } = action.payload;
    if (onStart) {
        dispatch({ type: onStart })

    }

    next(action)


    try {
        const response = await getAxiosInstance(method,url,data);
        // const response = await axios.request({
        //     baseURL: "http://localhost:9001/api",
        //     url,
        //     method,
        //     data
        // });
        // general success
        dispatch(actions.apiCallSuccess(response.data))
        // select  success
        if (onSuccess) {
            dispatch({
                type: onSuccess, payload: response.data
            })
        }

    } catch (err) {
        // general error
        dispatch(actions.apiCallFaild(err.message))
        // select error
        if (onError) {
            dispatch({
                type: onError, payload: err
            })

        }
        if (onStop) {
            dispatch({
                type: onStop
            })
        }


    }
    return next(action)
}

export default api;
