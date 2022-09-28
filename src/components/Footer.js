const Footer = (props) => {
  return (
    <div>
      <footer class="footer mt-auto  bg-light">      
        <div class="container1" Style="text-align: center font-size: large; background-color: azure; height:100px" style={{color:"black",marginTop:"-5px",color:"darkgreen", border:"2px",font:"large"}}>
          <span>@AirTAxi 2022 All Rights Reserved  </span>
          
                        <h5 className="mb-3">Connect</h5>
                        <div className="row">
                        <div className="col" href="https://www.instagram.com/"><i className="fab fa-2x fa-instagram" /></div>
                        <div className="col" href="https://www.facebook.com/"><i className="fab fa-2x fa-facebook" /></div>
                        <div className="col" href="https://www.linkedin.com/"><i className="fab fa-2x fa-linkedin" /></div>
                        </div>
          

        </div>
        
      </footer>
     
    </div>
  );
};

Footer.defaultProps = {
  title: " ",
};

export default Footer;
