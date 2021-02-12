import React from 'react';
// import Post from "../../../../AdminCard/AdminCRUD/Post/Post"
import { useSelector } from 'react-redux';
import './Updates.css';

const Updates = ()=> {
    const posts= useSelector(state=>state.posts)
    console.log(posts);
    return(
      
        <div>
            <br/>
            <br/>
            <br/>
           {/* {posts.map((post)=><div>{post.title}</div>)} */}
           {/* posts.map((item,index) => <Post item ={item} key={index} index={index} />) */}
        </div>
    )
}
export default Updates;