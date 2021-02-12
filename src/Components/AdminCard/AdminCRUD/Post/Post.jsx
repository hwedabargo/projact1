import { Button } from 'react-bootstrap';
import React from 'react';
import "./Post.css";
import { useDispatch } from 'react-redux';
import { changeIsDone } from "../../Redux/Actions";
import EditePost from "../EditePost/EditePost"
import DeletePost from '../DeletePost/DeletePost';

function Post({item , index}){
    // const handelChange =()=>{

    // 
    const dispatch=useDispatch();

// this function to do changed in button done
    const handlesubmit =()=>{
     
            dispatch(changeIsDone({id:item.id}))
        }
        // this part for post 
    return(
        <div className="post" >
         <h4 style={{textDecoration:!item.isDone? "none" : "line-through"}}><span className="Post_Number">Post {index +1} : </span>{item.description}</h4>
         <div>
             <Button variant= {!item.isDone? "success" : "outline-danger"} className="done_btn" onClick={handlesubmit}>{!item.isDone?"Done":"Unod"}</Button>
             <EditePost  id={item.id} />
             <DeletePost  id={item.id} />
            
         </div>
        </div>
    )
}
export default Post;