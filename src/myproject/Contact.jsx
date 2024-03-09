import React from "react";

import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Course1 from './img/course-1.jpg';
import Course2 from './img/course-2.jpg';
import Course3 from './img/course-3.jpg';
import { FaYoutube } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaArrowUpLong } from "react-icons/fa6";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'animate.css';
import WOW from 'wowjs';
import { useEffect } from "react";
import { useState } from "react";



function Contact(){

  useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();
  }, []);

    

  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);

    }
      else {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        });
        setValidated(false);

      }
      form.reset();
  };
 

 
return(
  <div>
   
   

<div>
  <Container fluid className='navpage-con py-5 mb-5 page-header'>
  <Container className='py-5'>
  <div class="row justify-content-center">
  <div className="col-lg-10 text-center">
    <h1 className="display-3 text-white animated slideInDown">Contact</h1>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb justify-content-center">
          <li className="breadcrumb-item"><a className="text-white" href="/">Home</a></li>
          <li className="breadcrumb-item"><a className="text-white" href="#f">Pages</a></li>
          <li className="breadcrumb-item text-white active" aria-current="page">Contact</li>
        </ol>
      </nav>
    </div>
  </div>
  </Container>
</Container>
</div>  


                                       {/* CONTACT */}
 <div>
 <div className="container-xxl py-5">
<div className="container">
<div className='mb-5 wow fadeInUp' data-wow-delay="0.1s" style={{animationDelay:'0.1s', animationName:'fadeInUp', visibility:'visible'}}>
  <div className='d-inline position-relative'><div className='ins-line1 position-absolute'></div>
  <div className='ins-line2 position-absolute'></div> <h6 className='sec4-h6 mb-1'> CONTACT US </h6>
  <div className='ins-line3 position-absolute'></div><div className='ins-line4 position-absolute'></div></div>
  <h1 className='sec4-h1 mb-4'>Contact For Any Query</h1></div>
<div className="row g-4">
  <div className="col-lg-4 col-md-6 wow fadeInUp text-start" data-wow-delay="0.1s" style={{visibility:'visible',  animationDelay:'0.1s', animationName:'fadeInUp'}}>
  <h5 className="getin">Get In Touch</h5>
  <p className="con-detail mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax &amp; PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p>
  <div className="d-flex align-items-center mb-3">
  <div className="d-flex align-items-center justify-content-center flex-shrink-0" style={{width:'50px', height:'50px',backgroundColor:'#06BBCC'}}>
     <i className="text-white"><FaLocationDot /> </i> </div>

    <div className="ms-3">
    <h5 className="office">Office</h5>
    <p className="locate mb-0">123 Street, New York, USA</p></div></div>
    <div className="d-flex align-items-center mb-3">
    <div className="d-flex align-items-center justify-content-center flex-shrink-0" style={{width:"50px", height:"50px",backgroundColor:'#06BBCC'}}>
    <i className="text-white"><FaPhoneAlt /></i>
  </div>

    <div className="ms-3">
     <h5 className="office">Mobile</h5>
     <p className="locate mb-0">+012 345 67890</p>
    </div>
  </div>
      <div className="d-flex align-items-center">
      <div className="d-flex align-items-center justify-content-center flex-shrink-0" style={{width:'50px', height:'50px',backgroundColor:'#06BBCC'}}>
      <i className="text-white"><FaEnvelope /> </i>
  </div>
<div className="ms-3">
<h5 className="office">Email</h5>
<p className="locate mb-0">info@example.com</p>
</div></div></div>
                                              {/* MAP */}
<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s" style={{visibility:"visible", animationDelay:"0.3s", animationName:"fadeInUp"}}>

<iframe
      title="Google Map"
      className="position-relative rounded w-100 h-100"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
      frameBorder="0"
      style={{ minHeight: '300px', border: '0' }}
      allowFullScreen
      aria-hidden="false"
      tabIndex="0" />
    
   </div>


<div className="col-lg-4 col-md-12 wow fadeInUp animated" data-wow-delay="0.5s" style={{visibility:"visible", animationDelay:'0.5s', animationName:'fadeInUp'}}>
  <Form noValidate validated={validated} onSubmit={handleSubmit}>
  <Row>
    <Col md="6">
  <Form.Group controlId="validationCustom01">
  <div class="form-floating">
    <Form.Control type="text" placeholder="Your Name" name="name" className="py-3 mb-3" value={formData.name} onChange={handleChange} pattern="[A-Za-z]+" required />
    <label for="name">Your Name</label></div>
    <Form.Control.Feedback type="invalid">Please enter your name.</Form.Control.Feedback>
  </Form.Group></Col>

  <Col md="6"><Form.Group   controlId="validationCustom02">
    <div className="form-floating">
    <Form.Control type="email" placeholder="Your Email" name="email" className="py-3 mb-3" value={formData.email} onChange={handleChange} required />
    <label for="name">Your Email</label></div>
    <Form.Control.Feedback type="invalid"> Please enter a valid email address.</Form.Control.Feedback>
  </Form.Group></Col></Row>

  <Form.Group controlId="validationCustom03">
   <div className="form-floating">
   <Form.Control type="text" placeholder="Subject" name="subject" className="py-3 mb-3" value={formData.subject} onChange={handleChange} required />
   <label for="Subject">Subject</label></div>

   <Form.Control.Feedback type="invalid"> Please enter the subject.</Form.Control.Feedback>
  </Form.Group>

  <Form.Group controlId="validationCustom04">
   <div className="form-floating">
   <Form.Control as="textarea" placeholder="Message" name="message" className="mb-3" value={formData.message} onChange={handleChange}  required  style={{height:'160px'}}/>
   <label for="Message">Message</label>
   </div>
    <Form.Control.Feedback type="invalid">Please enter your message.</Form.Control.Feedback>
  </Form.Group>

  <Button type="submit" className="btn w-100 py-3" style={{borderRadius:'0px', backgroundColor:"#06BBCC", borderColor:'#06BBCC'}}>Send message</Button>
</Form>                
             </div>
          </div>
       </div>
    </div>
</div>              

                                         {/* FOOTER */}

  <Container fluid className='foot-con1 pt-5 wow fadeIn' data-wow-delay="0.1s" style={{animationDelay:'0.1s',animationName:'fadeInUp', visibility:'visible'}}>
   <Container className='foot-con2 py-5'>
    <Row lg={4} md={2} sm={2} xs={1}>
      <Col className='mt-3'>
        <h4 className='quick mb-3'>Quick Link</h4>
        <Link to='/' className='quick-link'><IoIosArrowForward /> About Us</Link>
        <Link to='/' className='quick-link'><IoIosArrowForward /> Contact Us</Link>
        <Link to='/' className='quick-link'><IoIosArrowForward /> Privacy Policy</Link>
        <Link to='/' className='quick-link'><IoIosArrowForward /> Terms & Conditions</Link>
        <Link to='/' className='quick-link'><IoIosArrowForward /> FAQs & Help</Link>

      </Col>
      <Col className='contac mt-3'>
      <h4 className='quick mb-3'>Contact</h4>
      <p className='address'><FaLocationDot className='mail-icos me-2'/> 123, New York, USA</p>
      <p className='address'><FaPhoneAlt className='mail-icos me-2' /> 012 345 67890</p>
      <p className='address'> <i> <FaEnvelope className='mail-icos me-2' /> </i> elearning@gmail.com</p>
      <div className='d-flex justify-content-center pt-2 px-1'></div>
      <Link to='/' className='address-ico btn btn-sm-square mx-1'><FaTwitter  /></Link>
      <Link to='/' className='address-ico btn btn-sm-square mx-1'><FaFacebookF /></Link>
      <Link to='/' className='address-ico btn btn-sm-square mx-1'><FaYoutube /></Link>
      <Link to='/' className='address-ico btn btn-sm-square mx-1'><FaLinkedinIn /></Link>
   </Col>

  <Col className='galler mt-3'>
  <h4 className='quick mb-3'>Gallery</h4>
  <Row g={2} pt={2} className='gall'>
    <Col className='ga col-4'>
      <img src={Course1} alt="dcc" className='gallery img-fluid w-100 bg-light mt-1 p-1' />
    </Col>
    <Col className='ga col-4'>
      <img src={Course2} alt="dcc" className='gallery img-fluid w-100 bg-light mt-1 p-1' />
    </Col>
    <Col className='ga col-4'>
      <img src={Course3} alt="dcc" className='gallery img-fluid w-100 bg-light mt-1 p-1' />
    </Col>
    <Col className='ga col-4'>
      <img src={Course2} alt="dcc" className='gallery img-fluid w-100 bg-light mt-1 p-1' />
    </Col>
    <Col className='ga col-4'>
      <img src={Course3} alt="dcc" className='gallery img-fluid w-100 bg-light mt-1 p-1' />
    </Col>
    <Col className='ga col-4'>
      <img src={Course1} alt="dcc" className='gallery img-fluid w-100 bg-light mt-1 p-1' />
    </Col>
  </Row>

  </Col>
      <Col className='news mt-3'>
      <h4 className='quick mb-3'>Newsletter</h4>
      <p className='newsletter'>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
      <div class="position-relative mx-auto" style={{maxWidth:"400px" }} >
        <input className="form-control border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
         <button type="button" className="sign-btn btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2 ">SignUp</button>
          </div>
      </Col>

    </Row>
    <br />
    
    <Container>
  <div className="copyright mb-0">
    <div className="row">
      <div className="copy col-md-6 text-center text-md-start mb-3 mb-md-0">
        <p className="mb-0">
          © <a className="copy2 border-bottom" href="/">Your Site Name</a>, All Right Reserved.
          Designed By <a className="copy3 border-bottom" href="https://htmlcodex.com">HTML Codex</a>
        </p>
      </div>
      <div className="col-md-6 text-center text-md-end">
        <div className="footer-menu ">
          <div className="row">
            <div className="col-sm-auto">
            <a href="/" className='footer-links'>Home</a>
         </div>
         <div className="col-sm-auto">
            <a href="/" className='footer-links'>Cookies</a>
         </div>
         <div className="col-sm-auto">
            <a href="/" className='footer-links'>Help</a>
         </div>
         <div className="col-sm-auto">
            <a href="/" className='footer-links'>FAQs</a>
         </div>
          
          </div>
        </div>
      </div>
    </div>
  </div>
</Container>

   </Container>
   <a href="/" class="btns btn-lg btn-primary btn-lg-square back-to-top float-end" ><i><FaArrowUpLong className='scroll-arrow' style={{color:'white'}} /></i></a>

  </Container>
</div>                                    
    
    )
}
export default Contact;