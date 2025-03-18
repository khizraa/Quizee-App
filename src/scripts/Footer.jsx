import { useState } from "react";

function Footer() {
  const [input, setInput] = useState("");

  function HandleChange(event) {
    setInput(event.target.value);
  }

  return (
    <>
    <div className="cnav ">
      <div className="text-light text-center p-4 d-flex justify-content-center gap-5" style={{height:"300px", marginTop:"150px"}}>
       
        <div className="w-25 text-start" style={{marginTop:"50px"}}>
          <h5>About Us</h5>
          <p>
            Enhance your learning with interactive quizzes. Stay curious, keep
            exploring!
          </p>
        </div>

       
        <div className="w-20" style={{marginTop:"50px"}}>
          <h5>Quick Links</h5>
          <a href="#" className="text-light d-block text-decoration-none">Home</a>
          <a href="#" className="text-light d-block text-decoration-none">About</a>
          <a href="#" className="text-light d-block text-decoration-none">Contact</a>
        </div>

       
        <div className="w-30" style={{marginTop:"50px"}} id="contact">
          <h5>Subscribe to Our Newsletter</h5>
          <input
            style={{ width: "300px" }}
            type="text"
            value={input}
            onChange={HandleChange}
            placeholder="Type your E-mail"
            className="p-2 me-2 rounded border-0"
          />
          <button className="btn bg-white text-purple sbutton">Subscribe</button>
        </div>
      </div>
      </div>

      
      <div className="text-center mt-3">
        <a href="#" className="text-purple me-3 fs-4">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="#" className="text-purple me-3 fs-4">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="text-purple me-3 fs-4">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" className="text-purple fs-4">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
      <p className="text-purple text-center">&copy; 2024 Smit Quiz Portal. All rights reserved.</p>
    </>
  );
}

export default Footer;
