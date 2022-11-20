import axios from "axios";
// export const getAxiosInstance=(item)=>{

//     return axios.create({
//         baseURL:"http://192.168.0.210:8000/api",
//     //     headers:{
//     //         ContentType: 'application/json',
//     //         // Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiODYxZTRhYTk5OWU1ZGUxYzc0OGQ4MTFlZWEyZjE0N2Q3NjJhOTA1YjA4YjZiZjUxNDdlZjE1MjVhZWExMDRlYTE4M2MyNWRkNWY4N2I1NDciLCJpYXQiOjE2Mjc5OTU3NzQuNDUxMjY5LCJuYmYiOjE2Mjc5OTU3NzQuNDUxMjc1LCJleHAiOjE2NTk1MzE3NzQuNDQwNDgyLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.8Z9MPgar78tJBTFel97nh2SIFjHYxKlDVa8pgTpyGXatImHusZAE_5BlcNoKY2oTo_Pu0tHypOyi5eETepbunaEow_Wx0tD-BF8dqMZAC4Rx2ilL2-aoWr8Y2c-vgJKhkyCbVW2hGzgV2z9lGTAetVPMxXDM1-ZEWNhBUPJdeKlUuG_mgoFJM2m-sF1bFF2gNNiMGMoI2qN4MCC_KbJH1B5oMlP8XiOnGpQA-cPIvvIrPvqdf6mUYbgFufxmH7aNf8-6ohznRtr_DuOKCRgck2HrpMON6WOPMtQWYBLmwAHcLtuwVBsNN1P975NY8WDk_bh_9sQg5sd4xjEx-uPOXZP0PeMZvO8H9v2-ZGoHlDciuxJiCzB7fKaEKVNJ4I5pzTcIsFONw-1tbUDFplMWEm5PeW0e-ts5K4vQR1Rq8-dQcJcfkQGi31fMqVXOWwaV0IZM80d6mn6BHem_E_1Hs5lS4MAk6N8WLAIbFmQj_JwxJthrZyPW9N_G3yXh9LZF3TAQRyItwMl65pCEN5GuX1aPKKm8U6qdWr84tvOYGxpsCdw3tNfcnmFgYrIMA58qmzCJ8U2-f10Nm5dypCceZNWafuoXO5bur_PVzi3m1P4pz2i926NbrJIqZc6U8-iIeIMAKMZ7yJ857BwQHnZ2Tc4jjhNdKEI6dFKrOXoR7xU",
//     //         Accept: "*/*"
//     // }

//     })
// }


 export const getAxiosInstance=(method,url,data)=>axios({
    baseURL:"http://192.1678",
    url,
    data,
    method
})
