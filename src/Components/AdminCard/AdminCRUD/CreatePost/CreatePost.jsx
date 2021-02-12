import React ,{useState}from 'react';
import {Form , Button} from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import {createPost} from '../../Redux/Actions';
// import DeletePost from '../DeletePost/DeletePost';
import ListPost from '../ListPost/ListPost';

import './CreatePost.css'

function CreatePost () {

  const [toCreatePost,setToCreatePost]=useState("")
  
  const handlechange = (e) => {
    setToCreatePost(e.target.value)
  }
  console.log(toCreatePost);
  const dispatch=useDispatch()

  const handlesubmit =()=>{
    if(toCreatePost){

      dispatch(createPost({toCreatePost:toCreatePost}))
      setToCreatePost("")
    }
    else 
          alert("empty Post");
  }
    return(


        <div>
            <br/>
            <br/>
            <br/>
        <div  className="AddPost">
        <h1>CreatePost</h1>
        <div className="AddField">
        <Form.Control  id="AddPostInput" size="lg" type="text" placeholder="Enter Your Post"  onChange={handlechange} value={toCreatePost} />
         <Button variant="outline-primary" className="add-todo"   style={{ border:"2px white solid" , color:"white" }}  onClick={handlesubmit} >
            Add</Button>
           
    </div>
    </div>
    <ListPost/>
    {/* <DeletePost/> */}
    </div>
    );
 }   
    export default CreatePost;
