import React from 'react';

function CreatePost () {
    return(


        <div>
            <br/>
            <br/>
            <br/>
        <div  className="AddTask">
        <h1>CreatePost</h1>
        <div className="AddField">
        <Form.Control  id="AddTaskInput" size="lg" type="text" placeholder="Enter Your Post" onChange={handlechange} value={toAddTask} />
         <Button variant="outline-primary" className="add-todo"   style={{ border:"2px white solid" , color:"white" }}  onClick={handlesubmit}>
            Add</Button>
              
    </div>
    </div>
    </div>
    );
 }   
    export default CreatePost;
