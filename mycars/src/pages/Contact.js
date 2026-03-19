import react from 'react';
import '../index.css';

const Contact = () => {
  return (
    <>
    <div className='contact-page' style={{padding:"20px", minHeight:"50vh"}}> 
      <h1>Contact Us</h1>
      <p>If you have any questions, feel free to reach out!</p>
      <h2 style={{color:"green"}}>
        <i className="fa fa-phone" aria-hidden="true"></i> Phone: +96717788990
      </h2>
      <h2>
        <i className="fa fa-envelope" aria-hidden="true"></i> Email: info@vrcarrentals.com
      </h2>
    </div>
    </>
  );
};

export default Contact;
