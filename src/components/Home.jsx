import React, { Component } from 'react'

export default class home extends Component {

    render() {
        return(
        <div>

              <title>Tinetti App</title>
    
     {/* https://getbootstrap.com/docs/4.0/components/navbar/ */}
    {/* <nav class="navbar navbar-expand-lg navbar-light bg-light"/>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/assessment/all">All Patients</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/assessment/new">New Patient</a>
              </li>
            </ul>
            {/* sign in for email and PW http://www.globaltimes.cn/galleries/851.html */}
            {/* <form class="form-inline my-2 my-lg-0">
                <div class="form-group">
                    <label class="sr-only" for="exampleInputEmail3">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail3" placeholder="Email">
                <div/>
                <div class="form-group">
                    <label class="sr-only" for="exampleInputPassword3">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword3" placeholder="Password">
                <div/>


                <button type="submit" class="btn btn-default">Sign in</button>
            <form/>
          <div/>
    <nav/> */}
    <div className="row backgroundimg">
        <div className="container">

            <div className="tin">
                <h1> Tinetti Balance Assessment</h1>
                <h3>Welcome, click on the button below to start the test</h3>
              
        

            
                 <a href= "#test"  className="btn btn-pill btn-info">Happy Testing</a> 

                

              
                

            </div>

        </div>
    </div>
<footer className="footer">Created by Shirley Kaffrey</footer>
   

                
            </div>
        )
    }
}