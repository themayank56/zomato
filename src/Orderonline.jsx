import React, {useState}  from "react"



import pizza1 from "../src/images/pizza1.PNG"
import pizza2 from "../src/images/pizza2.jpg"
import pizza3 from "../src/images/pizza3.jpg"
import pizza4 from "../src/images/pizza4.jpg"
import pizza5 from "../src/images/pizza5.jpg"
import pizza6 from "../src/images/pizza6.jpg"
import pizza7 from "../src/images/pizza7.jpg"
import pizza9 from "../src/images/pizza9.jpg"
import pizza10 from "../src/images/pizza10.jpg"
const Orderonline = () =>{
   

  
    return(
        <>
         
      <div id="order" className="container-fluid nav_bg">
        <div className="row">
          <div className="col-xl-12 col-md-12 col-sm-12 ">
            <div className="card1">
              <div className="row" >
                <div className="col-xl-6 col-md-6 col-sm-12" id="recommended">
                  <h1>Recommended</h1>
                </div>
                <div className="col-xl-6 col-md-6 col-sm-12">
                <div id="search1">
                  <form>
                    <div className="icons1">
                    <input type="text" name="search" placeholder="Search With Menu..." />
                      <i class="fas fa-search" id="search-icon"></i>
                    </div>
                  </form>
                </div>
                </div>
              </div>
              <div className="row" >
                <div className="col-xl-4 col-md-6 col-sm-12" id="offer">
                  <div className="card">
                    <button type="button" ><h1>Flat <span>30% OFF</span> up to 170</h1></button>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6 col-sm-12" id="offer">
                  <div className="card">
                    <button type="button" ><h1>Flat <span>40% OFF</span> up to 180</h1></button>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6 col-sm-12" id="offer">
                  <div className="card">
                    <button type="button" ><h1>Flat <span>50% OFF</span> up to 120</h1></button>
                  </div>
               </div>
               
               <div className="col-xl-3 col-md-4 col-sm-6" id="Check">
                
                 <label className="checkbox">Veg
                  <input type="radio" checked="checked" name="radio" />
                    <span className="checkmark"></span>
                </label>
               </div>
               <div className="col-xl-3 col-md-4 col-sm-6" id="Check">
               
                 <label className="checkbox">Non Veg
                  <input type="radio" checked="checked" name="radio" />
                    <span className="checkmark"></span>
                </label>
                 
               </div> 
              </div>
              <hr />
              <div className="row">
                <div class="col-md-3" id="menu">
                  <div className="card mon">
                    <div className="service-box box">
                     
                      <div className="Zoom">
                        <img src={pizza1} className="img-fluid animated" alt="Home page" />
                      </div>
                   
                      <h2>4 Cheese Pizza</h2>
                      <div className="box">
                        <a href="#"  className="fas fa-heart"></a>
                        <a href="#" className="fas fa-eye"></a>
                      </div>
                      <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star "></span>  
                      <p>Creamy cheese, mozzarella cheese, Parmesan cheese and cottage cheese.</p>
                      <div className="Money">
                        <h1><i class="fas fa-rupee-sign"></i><span>120</span></h1>
                      </div>
                      <div id="Addbutton">
                        <button className="btn success">Add</button>
                      </div>
                    </div>
                  </div>
               </div>
               <div class="col-md-3" id="menu">
                  <div className="card mon">
                    <div className="service-box box">
                     
                      <div className="Zoom">
                        <img src={pizza2} className="img-fluid animated" alt="Home page" />
                      </div>
                  
                      <h2>3 Cheese Pizza</h2>
                      <div className="box">
                        <a href="#"  className="fas fa-heart"></a>
                        <a href="#" className="fas fa-eye"></a>
                      </div>
                      <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star "></span>  
                      <p>Creamy cheese, mozzarella cheese, Parmesan cheese and cottage cheese.</p>
                      <div className="Money">
                        <h1><i class="fas fa-rupee-sign"></i><span>230</span></h1>
                      </div>
                      <div id="Addbutton">
                        <button className="btn success">Add</button>
                      </div>
                    </div>
                  </div>
               </div>
               <div className="col-md-3 " id="menu">
                  <div className="card mon">
                    <div className="service-box box">
                     
                      <div className="Zoom">
                        <img src={pizza3} className="img-fluid animated" alt="Home page" />
                      </div>
                   
                      <h2>5 Cheese Pizza</h2>
                      <div className="box">
                        <a href="#"  className="fas fa-heart"></a>
                        <a href="#" className="fas fa-eye"></a>
                      </div>
                      <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star "></span>  
                      <p>Creamy cheese, mozzarella cheese, Parmesan cheese and cottage cheese.</p>
                        <div className="Money">
                        <h1><i class="fas fa-rupee-sign"></i><span>320</span></h1>
                      </div>
                      <div id="Addbutton">
                        <button className="btn success">Add</button>
                      </div>
                    </div>
                  </div>
               </div>
               <div className="col-md-3 " id="menu">
                  <div className="card mon">
                    <div className="service-box box">
                      
                      <div className="Zoom">
                         <img src={pizza4} className="img-fluid animated" alt="Home page" />
                      </div>
                   
                      <h2>2 Cheese Pizza</h2>
                      <div className="box">
                        <a href="#"  className="fas fa-heart"></a>
                        <a href="#" className="fas fa-eye"></a>
                      </div>
                      <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star "></span>  
                      <p>Creamy cheese, mozzarella cheese, Parmesan cheese and cottage cheese.</p>
                        <div className="Money">
                        <h1><i class="fas fa-rupee-sign"></i><span>350</span></h1>
                      </div>
                      <div id="Addbutton">
                        <button className="btn success">Add</button>
                      </div>
                    </div>
                  </div>
               </div>
               <div className="col-md-3 " id="menu">
                  <div className="card mon">
                    <div className="service-box box">
                     
                      <div className="Zoom">
                        <img src={pizza5} className="img-fluid animated" alt="Home page" />
                      </div>
                    
                      <h2>6 Cheese Pizza</h2>
                      <div className="box">
                        <a href="#"  className="fas fa-heart"></a>
                        <a href="#" className="fas fa-eye"></a>
                      </div>
                      <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star "></span>  
                      <p>Creamy cheese, mozzarella cheese, Parmesan cheese and cottage cheese.</p>
                        <div className="Money">
                        <h1><i class="fas fa-rupee-sign"></i><span>280</span></h1>
                      </div>
                      <div id="Addbutton">
                        <button className="btn success">Add</button>
                      </div>
                    </div>
                  </div>
               </div>
               <div className="col-md-3 " id="menu">
                  <div className="card mon">
                    <div className="service-box box">
                    
                      <div className="Zoom">
                        <img src={pizza6} className="img-fluid animated" alt="Home page" />
                      </div>
                   
                      <h2>4 Cheese Pizza</h2>
                      <div className="box">
                        <a href="#"  className="fas fa-heart"></a>
                        <a href="#" className="fas fa-eye"></a>
                      </div>
                      <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star "></span>  
                      <p>Creamy cheese, mozzarella cheese, Parmesan cheese and cottage cheese.</p>
                        <div className="Money">
                        <h1><i class="fas fa-rupee-sign"></i><span>220</span></h1>
                      </div>
                      <div id="Addbutton">
                        <button className="btn success">Add</button>
                      </div>
                    </div>
                  </div>
               </div>
               <div className="col-md-3 " id="menu">
                  <div className="card mon">
                    <div className="service-box box">
                     
                      <div className="Zoom">
                        <img src={pizza7} className="img-fluid animated" alt="Home page" />
                      </div>
                    
                      <h2>8 Cheese Pizza</h2>
                      <div className="box">
                        <a href="#"  className="fas fa-heart"></a>
                        <a href="#" className="fas fa-eye"></a>
                      </div>
                      <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star "></span>  
                      <p>Creamy cheese, mozzarella cheese, Parmesan cheese and cottage cheese.</p>
                        <div className="Money">
                        <h1><i class="fas fa-rupee-sign"></i><span>150</span></h1>
                      </div>
                      <div id="Addbutton">
                        <button className="btn success">Add</button>
                      </div>
                    </div>
                  </div>
               </div>
               <div className="col-md-3 " id="menu">
                  <div className="card mon">
                    <div className="service-box box">
                     
                      <div className="Zoom">
                        <img src={pizza9} className="img-fluid animated" alt="Home page" />
                      </div>
                   
                      <h2>5 Cheese Pizza</h2>
                      <div className="box">
                        <a href="#"  className="fas fa-heart"></a>
                        <a href="#" className="fas fa-eye"></a>
                      </div>
                      <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star "></span>  
                      <p>Creamy cheese, mozzarella cheese, Parmesan cheese and cottage cheese.</p>
                        <div className="Money">
                        <h1><i class="fas fa-rupee-sign"></i><span>300</span></h1>
                      </div>
                      <div id="Addbutton">
                        <button className="btn success">Add</button>
                      </div>
                    </div>
                  </div>
               </div>
               <div className="col-md-3 " id="menu">
                  <div className="card mon">
                    <div className="service-box box">
                     
                      <div className="Zoom">
                        <img src={pizza1} className="img-fluid animated" alt="Home page" />
                      </div>
                   
                      <h2>7 Cheese Pizza</h2>
                      <div className="box">
                        <a href="#"  className="fas fa-heart"></a>
                        <a href="#" className="fas fa-eye"></a>
                      </div>
                      <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star "></span>  
                      <p>Creamy cheese, mozzarella cheese, Parmesan cheese and cottage cheese.</p>
                        <div className="Money">
                        <h1><i class="fas fa-rupee-sign"></i><span>250</span></h1>
                      </div>
                      <div id="Addbutton">
                        <button className="btn success">Add</button>
                      </div>
                    </div>
                  </div>
               </div>
               <div class="col-md-3" id="menu">
                  <div className="card mon">
                    <div className="service-box box">
                     
                      <div className="Zoom">
                        <img src={pizza2} className="img-fluid animated" alt="Home page" />  
                      </div>
                   
                      <h2>3 Cheese Pizza</h2>
                      <div className="box">
                        <a href="#"  className="fas fa-heart"></a>
                        <a href="#" className="fas fa-eye"></a>
                      </div>
                      <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star "></span>  
                      <p>Creamy cheese, mozzarella cheese, Parmesan cheese and cottage cheese.</p>
                      <div className="Money">
                        <h1><i class="fas fa-rupee-sign"></i><span>230</span></h1>
                      </div>
                      <div id="Addbutton">
                        <button className="btn success">Add</button>
                      </div>
                    </div>
                  </div>
               </div>
               <div className="col-md-3 " id="menu">
                  <div className="card mon">
                    <div className="service-box box">
                      
                      <div className="Zoom">
                        <img src={pizza3} className="img-fluid animated" alt="Home page" />
                      </div>
                      <h2>5 Cheese Pizza</h2>
                      <div className="box">
                        <a href="#"  className="fas fa-heart"></a>
                        <a href="#" className="fas fa-eye"></a>
                      </div>
                      <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star "></span>  
                      <p>Creamy cheese, mozzarella cheese, Parmesan cheese and cottage cheese.</p>
                        <div className="Money">
                        <h1><i class="fas fa-rupee-sign"></i><span>320</span></h1>
                      </div>
                      <div id="Addbutton">
                        <button className="btn success">Add</button>
                      </div>
                    </div>
                  </div>
               </div>
               <div className="col-md-3 " id="menu">
                  <div className="card mon">
                    <div className="service-box box">
                     
                       <div className="Zoom">
                          <img src={pizza4} className="img-fluid animated" alt="Home page" />
                       </div>
                      <h2>2 Cheese Pizza</h2>
                      <div className="box">
                        <a href="#"  className="fas fa-heart"></a>
                        <a href="#" className="fas fa-eye"></a>
                      </div>
                      <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star "></span>  
                      <p>Creamy cheese, mozzarella cheese, Parmesan cheese and cottage cheese.</p>
                        <div className="Money">
                        <h1><i class="fas fa-rupee-sign"></i><span>350</span></h1>
                      </div>
                      <div id="Addbutton">
                        <button className="btn success">Add</button>
                      </div>
                    </div>
                  </div>
               </div>
              </div>
            </div>  
          </div>
        </div>
      </div>
      <hr />

      <section className="about" id="about">
    <h1 className="heading"> why choose us? </h1>
    <div className="row">

        <div className="image ">
            <img src={pizza10} alt="" />
        </div>

        <div className="content">
            <h3>best Pizza in the India</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, sequi corrupti corporis quaerat voluptatem ipsam neque labore modi autem, saepe numquam quod reprehenderit rem? Tempora aut soluta odio corporis nihil!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, nemo. Sit porro illo eos cumque deleniti iste alias, eum natus.</p>
            <div className="icons-container">
                <div className="icons">
                    <i className="fas fa-shipping-fast"></i>
                    <span>free delivery</span>
                </div>
                <div className="icons">
                  <i class="fas fa-rupee-sign"></i>
                    <span>easy payments</span>
                </div>
                <div className="icons">
                    <i className="fas fa-headset"></i>
                    <span>24/7 service</span>
                </div>
            </div>  
        </div>
    </div>
</section>


    
        </>

    )
}
export default Orderonline;