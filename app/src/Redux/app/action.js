import * as types from "./actionTypes"
import axios from 'axios'
export const getCapsulesData=(params)=>(dispatch)=>{
    dispatch({type:types.GET_CAPSULES_REQUEST});
    axios.get(`https://api.spacexdata.com/v4/capsules?page=${params}&limit=5`)
    .then((res)=>dispatch({type:types.GET_CAPSULES_SUCCESS,payload:res.data}))
    .catch((err)=>dispatch({type:types.GET_CAPSULES_FAILURE,payload:err}));
}