function contact2() {
    return (
        <div className="fluid-container row">
            <h2 style={{ color: 'white' }} >-: CONTACT US :-</h2>
           <p> </p>

            
                {/* First Card */}
                <div className="fluid-container flip-card col">
                    <div className="flip-card-inner">

                        <div className="flip-card-front">
                            <img id="img" width="140%" height="100%" src="images/ashish.jpg" alt="Avatar" style={{}} />
                        </div>
                        <div className="flip-card-back">
                            <div className="container-fluid ">
                                <div className="fluid-container flip-card col-4 my-2">
                                    <h1 className="log-in-in mb-5">Contact Us</h1>

                                    <div className="" style={{ width: "fit-content", height: "fit-content", background: "lightgray" }}>

                                        <div className="">
                                            <h5 className="card-title">Mr. Ashish Sawant</h5>
                                            <div class="wrapper mb-5">

                                                <a href="mailto:ashish99.sawant@gmail.com" className="icon gmail">
                                                    <div className="tooltip">Gmail</div>
                                                    <span><i className="fab fa-google ms-3"></i></span>
                                                </a>

                                                <a href="#" className="icon phone">
                                                    <div className="tooltip">Phone</div>
                                                    <span><i className="fa-solid fa-phone ms-3"></i></span>

                                                </a>
                                                <a href="https://www.linkedin.com/in/ashish-sawant-a70135206/" className="icon linkedin">
                                                    <div className="tooltip">LinkedIn</div>
                                                    <span><i className="fab fa-linkedin ms-3"></i></span>
                                                </a>
                                                <p style={{ marginLeft: "4rem", fontSize: "x-large" }}>9970814383</p>



                                            </div>
                                            

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                    
                        {/* Second Card*/}
                        <div className="fluid-container flip-card col">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img id="img" width="140%" height="100%" src="images/abdulaziz.jpeg" alt="Avatar" />
                                </div>
                                <div className="flip-card-back">
                                    <div className="" style={{ width: "fit-content", height: "fit-content", background: "lightgray" }}>
                                        
                                        <div className="card-body">
                                            <h5 className="card-title">Mr. Abdulaziz shaikh</h5>
                                            <div class="wrapper mb-5">

                                                <a href="mailto:abdulazizshaikh400@gmail.com" className="icon gmail">
                                                    <div className="tooltip">Gmail</div>
                                                    <span><i className="fab fa-google ms-3"></i></span>
                                                </a>

                                                <a href="#" className="icon phone">
                                                    <div className="tooltip">Phone</div>
                                                    <span><i className="fa-solid fa-phone ms-3"></i></span>

                                                </a>
                                                <a href="" className="icon linkedin">
                                                    <div className="tooltip">LinkedIn</div>
                                                    <span><i className="fab fa-linkedin ms-3"></i></span>
                                                </a>
                                                <p style={{ marginLeft: "4rem", fontSize: "x-large" }}>8421444124</p>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                
            


    )


}

export default contact2;