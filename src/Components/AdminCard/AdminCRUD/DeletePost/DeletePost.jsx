import React from 'react';
import posts  from '../../Redux/Reducers/index'
import {Button} from 'react-bootstrap';
import {  useSelector } from 'react-redux';
// import {deletePost} from "../../Redux/Actions/index";
import './DeletePost.css';
function DeletePost({id}) {
    const postItem =  useSelector(state => state.posts.find(item=>item.id === id));
    console.log(postItem)
    // const dispatch=useDispatch()
  
    return(
        <div>
             <Button variant="outline-dark"  style={{textAlign:"right"}} className="btn_delet" key={posts.id} onClick={()=>this.props.deletePost(posts.id)} >
        Delete 
      </Button>
            {/* <button key={post.id} onClick={()=>this.props.deletePost(post.id)}>X</button> */}
        </div>
    );
    
}
export default DeletePost;