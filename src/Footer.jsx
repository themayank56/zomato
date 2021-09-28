import React from "react"

const Footer = () =>{
    return(
        <>
        <section className="footer">
          <div className="box-container">
            <div className="container">
              <div className="row">
                <div className="col-12 ">
                  <div className="row">
                    <div className="col-6 logo1">
                    <h1>Zomato</h1>
                    </div>
                    <div className="col-6 ">
                      <div className="row">
                        <div className="col-6">
                           <div className="dropdown">
                            <button className="btn  dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                              <h1>Location</h1>
                            </button>
                             <ul className="dropdown-menu " aria-labelledby="dropdownMenuButton2">
                               <li><a className="dropdown-item " href="#"><span>Delhi</span></a></li>
                               <li><a className="dropdown-item" href="#"><span>Noida</span></a></li>
                               <li><a className="dropdown-item" href="#"><span>Mumbai</span></a></li>
                               <li><a className="dropdown-item" href="#"><span>Patna</span></a></li>
                               <li><a className="dropdown-item" href="#"><span>Goa</span></a></li>
                               <li><a className="dropdown-item" href="#"><span>Lucknow</span></a></li>
                               <li><a className="dropdown-item" href="#"><span>Chandigar</span></a></li>
                               <li><a className="dropdown-item" href="#"><span>Pune</span></a></li>
                             </ul>
                           </div>
                        </div>
                        <div className="col-6">
                          <div className="dropdown">
                            <button className="btn  dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            <h1>Language</h1>
                            </button>
                            <ul className="dropdown-menu " aria-labelledby="dropdownMenuButton2">
                              <li><a className="dropdown-item " href="#"><span>English</span></a></li>
                              <li><a className="dropdown-item" href="#"><span>Hindi</span></a></li>
                              <li><a className="dropdown-item" href="#"><span>Telgu</span></a></li>
                              <li><a className="dropdown-item" href="#"><span>Tamil</span></a></li>
                              <li><a className="dropdown-item" href="#"><span>Bangali</span></a></li>
                              <li><a className="dropdown-item" href="#"><span>Maithili</span></a></li>
                              <li><a className="dropdown-item" href="#"><span>Assamese</span></a></li>
                              <li><a className="dropdown-item" href="#"><span>Malayalam</span></a></li>
                             
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                 
                </div>
              </div>
              <div className="container">
              <div className="row">
                <div className="col-12 ">
                  <div className="row">
                    <div className="col-3 ">
                      <div className="card">
                        <div class="box">
                          <h3>Company</h3>
                          <hr />
                          <ul>
                          <a href="#">Blog</a>
                          <a href="#">Careers</a>
                          <a href="#">Repoer</a>
                          <a href="#">Investor</a>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="card">
                        <div class="box">
                          <h3>quick links</h3>
                          <hr />
                          <ul>
                          <a href="#">home</a>
                          <a href="#">dishes</a>
                          <a href="#">about</a>
                          <a href="#">menu</a>
                         
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="card">
                      <div class="box">
                          <h3>For You</h3>
                          <hr />
                          <ul>
                          <a href="#">Privacy</a>
                          <a href="#">Terms</a>
                          <a href="#">Security</a>
                          <a href="#">SiteMap</a>
                          </ul>
                        </div>
                        </div>
                    </div>
                    <div className="col-3">
                      <div className="card">
                        <div class="box">
                          <h3>follow us</h3>
                          <hr />
                          <ul>
                          <a href="#">facebook</a>
                          <a href="#">twitter</a>
                          <a href="#">instagram</a>
                          <a href="#">linkedin</a>
                          </ul>
                        </div>   
                      </div>
                    </div>
                  </div>
                 
                </div>
              </div>
            </div>
            </div>
            

           </div>

<div className="credit"> copyright @ 2021 by <span>Zomato</span> </div>

</section>
        </>

    )
}
export default Footer;