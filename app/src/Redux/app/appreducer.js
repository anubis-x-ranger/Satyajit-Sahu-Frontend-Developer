import * as types from "./actionTypes"

const initialState = {
    capsules:[],
    isLoading:false,
    isError:false,
    error:[]
}

export const appreducer=(state=initialState,action)=>{
    const {type,payload}=action;
    switch(type){
        case types.GET_CAPSULES_REQUEST:
            return {
                ...state,isLoading:true
            }
        case types.GET_CAPSULES_SUCCESS:
            return {
                ...state,isLoading:false,capsules:payload
            }
        case types.GET_CAPSULES_FAILURE:
            return {
                ...state,isLoading:false,isError:true,error:payload
            }
        default:
            return state;
    }
    
}