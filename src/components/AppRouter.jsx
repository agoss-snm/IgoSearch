import Login from "./Login";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React from "react";
import Dashboard from "./Dashboard";
import ResourceDetailContainer from './resourcedetail/ResourceDetailContainer'
import Header from "./Header";


export default function AppRouter() {
    return (
<>
    
         <Router>  
           <>
           
           </> 
            <Routes>
              
              <Route exact path='/' element= {<Login/>}/>
              <Route exact path='/Dashboard' element= {<Dashboard/>}/>
              <Route exact path='/Dashboard/:categoryId' element= {<Dashboard/>}/>
              <Route exact path='/item/:id' element= {<ResourceDetailContainer/>}/>
            </Routes>
          </Router>
          </>
    );
  }