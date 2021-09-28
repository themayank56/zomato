import React from "react";
import web0 from "../src/images/pizza1.PNG";
import Home from "./Home";


const Navbar = () =>{
    return(
        <>      
            <div className="conatiner topnav1" id="Topnav">
              <div className="row">
                <div className="col-xl-12 col-md-6 col-sm-10">
                  <div className="container">
                  <div className="row">
                      <div className="col-xl-3 col-md-12 col-sm-12 logo">
                      <h1>Zomato</h1>
                      </div>
                      <div className="col-xl-5 col-md-12 col-sm-6 margin">
                        <div className="card">
                        <div id="search">
                              <form>
                                <div className="icons">
                                <input type="text" name="search" placeholder="Search for Restaurants..." />
                                  <i class="fas fa-search" id="search-icon"></i>
                                </div>
                              </form>
                            </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-md-12 col-sm-6 margin">
                        
                          <div className="row">
                            <div className="col-6 login">
                              <button className="btn " type="button" >
                                <h1>Log in</h1>
                              </button>
                            </div>
                            <div className="col-6 login">
                              <button className="btn " type="button" >
                                 <h1>Sign up</h1>
                              </button>
                            </div>
                          </div>
                         
                      </div>     
                    </div>
                  </div> 
                </div>
              </div>  
            </div>
            <hr />
            <div className="container-fluid" >
              <div className="row">
                <div className="col-10 mx-auto">
                  <div className="row ">
                    <div className="col-xl-6 col-md-6 home_header_img inner" id="nav_bg">
                      <img src={web0} className="img-fluid animated" alt="Home page" />
                    </div>
                    <div className="col-xl-6 col-md-6 home_header_img inner" id="nav_bg">
                      <img src={web0} className="img-fluid animated" alt="Home page" />
                    </div> 
                    <div className="col-xl-7 col-md-12 col-sm-12  Sbarro" id="nav_bg">
                      <h1>Sbarro - New York Pizza</h1>
                      <h2>Pizza, Fast Food<br />
                        <span>Thaltej, Ahmedabad</span><br />
                          11am – 8:30pm
                      </h2><br />
                      <div id="button">
                        <button className="btn success">Add Review</button>
                        <button className="btn info">Direction</button>
                        <button className="btn warning">BookMark</button> 
                      </div>
                    </div> 
                    <div className="col-xl-5 col-md-12 col-sm-12  Sbarro user_rating" id="nav_bg">
                      <h1>User Rating</h1>
                      <hr  />
                        <h4>200 People<span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        </h4>
                        <h4>100 People<span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        </h4>
                        
                        <h4>110 People<span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star "></span>
                        </h4>
                        <h4>60 People<span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        </h4>
                    </div> 
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="container-fluid" >
              <div className="row">
                <div className="col-10 mx-auto">
                  <Home />
                </div>
              </div>
            </div>
            

        
             
                     
            
        </>
    )
}
export default Navbar;