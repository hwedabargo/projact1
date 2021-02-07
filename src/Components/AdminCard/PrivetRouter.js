import React from 'react';
import {Redirect ,Route} from 'react-router-dom';
const PrivetRouter =({component:Component,path ,isAuth, ...rest})=>{
  if (isAuth){
      return<Redirect to='/'/>
  }
  return(
    <Route  path={path} render={(props)=> <Component {...props} {...rest}/>}/>
  )
     
}
export  default  PrivetRouter ;