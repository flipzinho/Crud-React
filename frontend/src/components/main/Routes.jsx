import React from "react";

import { Switch, Route,Redirect } from "react-router";
import Home from "../home/Home";
 import UserCrud from "../user/UserCrud";
 export default props =>
 <Switch>
     <Route exact path="/" component={Home}/>
        <Route exact path= '/user' component={UserCrud}/>
        <Redirect from ='*' to=''/>

     
 </Switch>