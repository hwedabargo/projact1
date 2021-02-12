import React from 'react';
import "./ListPost.css";
import Post from "../Post/Post"
import { useSelector } from 'react-redux';

function ListPost(){
    const posts= useSelector(state=>state.posts)
    // console.log(posts);
  
     return (
       

        <div className="listPost" >
              <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
            {
            
            posts.map((item,index) => <Post item ={item} key={index} index={index} />) 

            }
  
        </div>
    )
        
}

export default ListPost;