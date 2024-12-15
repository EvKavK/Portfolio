import React, {useState} from "react";
import "./styles.css";

const Contact = () => {
  const [message, setMessage] = useState("");
  
  const handleSubmit = (event) => {
    event.preventDefault()
    document.getElementById("name").value = ""
    document.getElementById("email").value = ""
    document.getElementById("message").value = ""
    setMessage("Message sent! Have a great day!");
    
    setTimeout(() => {
      setMessage("")
    }, 5000)
  };

  return (
    <div className="page">
      <h1>Contact</h1>
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" required />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />
          </div>

          <div className="input-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Enter your message" required></textarea>
          </div>

          <button className="submit-btn" type="submit">Submit</button>
        </form>
        
        {message && <p className="notification fade-in-out">{message}</p>}
      </div>
    </div>
  );
};

export default Contact;