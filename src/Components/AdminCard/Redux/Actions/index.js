import {CREATE_POST} from "../Constant/action-types";
import {CHANGE_IS_DONE} from "../Constant/action-types";
import {EDIT_POST} from "../Constant/action-types";
import {DELETE_POST} from "../Constant/action-types";
// import {SET_FILTER} from "../Constant/action-types";


export const createPost =(payload)=>{
    return{
        type: CREATE_POST,
        payload:payload,
        
    };
};

export const changeIsDone =(payload)=>{
    return{
        type: CHANGE_IS_DONE,
        payload:payload,
        
    };
};

export const editPost =(payload)=>{
    return{
        type: EDIT_POST,
        payload:payload,
        
    };
};
export const deletePost =(payload)=>{
    return{
        type: DELETE_POST,
        payload:payload,
        
    };
};

// export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });
