import { CREATE_POST } from "../Constant/action-types";
import { CHANGE_IS_DONE } from "../Constant/action-types";
import { EDIT_POST } from "../Constant/action-types";
import  {DELETE_POST} from "../Constant/action-types";

const initialstate ={


 posts:[
    {
     id: Math.random(),
     description:"We are working on preparing birthday parties and other special parties exclusively with us ..during the current month",
     isDone: false,
      },

      {
      id: Math.random(),
      description:"During next March, we will arrange VIP meetings.",
      isDone: false,
      },
 
      {
          id: Math.random(),
          description:"Everything new in the world of sweets, we offer.",
          isDone: false,
      },
      {
          id: Math.random(),
          description:"Our exclusive vegan cheesecake.",
          isDone: false,
      },
],

};

function rootReducer(state = initialstate , action){


    const {type,payload}= action;
    switch(type){
        case CREATE_POST:
            return {
                posts : state.posts.concat({id:Math.random(),
                    description: payload.toCreatePost,
                    isDone: false
                }),
            };
            case CHANGE_IS_DONE :
                return{
                    posts : state.posts.map((item)=>
                    item.id === payload.id ? {...item,isDone : !item.isDone }: item


                    ),
                };
            case EDIT_POST:
                return{
                    posts : state.posts.map((item)=>
                    item.id === payload.id ? 
                    {...item,description : payload.description }
                    : item


                    ),
                };
                case DELETE_POST:
                        return {
                                ...state,
                                items: state.items.filter(item => item !== action.payload)
                            };
                    
  
            default: 
                return state;
            
    }
    
}
export default rootReducer;
