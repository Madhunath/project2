import React from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Team1 from './img/team-1.jpg';
import Team2 from './img/team-2.jpg';
import Team3 from './img/team-3.jpg';
import Team4 from './img/team-4.jpg';
import Course1 from './img/course-1.jpg';
import Course2 from './img/course-2.jpg';
import Course3 from './img/course-3.jpg';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaArrowUpLong } from "react-icons/fa6";
import 'animate.css';
import { useEffect } from "react";
import WOW from 'wowjs';

function Ourteam() {

  useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();
  }, []);

    return(
        <div>
  
   <div>
  <Container fluid className='navpage-con py-5 mb-5 page-header'>
  <Container className='py-5'>
  <div class="row justify-content-center">
                <div className="col-lg-10 text-center">
                    <h1 className="display-3 text-white animated slideInDown">Our Team</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center">
                            <li className="breadcrumb-item"><a className="text-white" href="/">Home</a></li>
                            <li className="breadcrumb-item"><a className="text-white" href="#fg">Pages</a></li>
                            <li className="breadcrumb-item text-white active" aria-current="page">Team</li>
                        </ol>
                    </nav>
                </div>
            </div>
  </Container>

  </Container>
</div>

                                             {/* EXPERT INSTRUCTORS */}
<div className='sec-5 '>
   <Container className='sec5-con'>
    <div className='wow fadeInUp' data-wow-delay="0.1s" style={{animationDelay:'0.1s', animationName:'fadeInUp', visibility:'visible'}}>
      <div className='d-inline position-relative'><div className='ins-line1 position-absolute'></div><div className='ins-line2 position-absolute'></div> <h6 className='sec4-h6'> INSTRUCTORS </h6><div className='ins-line3 position-absolute'></div><div className='ins-line4 position-absolute'></div></div>
        <h1 className='sec4-h1 mb-4'>Expert Instructors</h1></div>
    <Row g={4}>
      <Col lg={3} md={6} className='wow fadeInUp' data-wow-delay="0.1s" style={{animationDelay:'0.1s', animationName:'fadeInUp', visibility:'visible'}}>
      <Card className='sec5-cards '>
        <div className="instruct-img overflow-hidden"><Card.Img variant="top" src={Team1} className='expert' /></div>
      <div className='social-media position-relative d-flex justify-content-center' style={{marginTop:"-24px"}}>
      <div className='s5-Ico d-flex justify-content-center pt-2 px-1'>
        <a className='fb-ico btn btn-sm-square btn-primary mx-1' href><i><FaFacebookF /></i></a>
<a className='fb-ico btn btn-sm-square btn-primary mx-1' href><i><FaTwitter /></i></a>
<a className='fb-ico btn btn-sm-square btn-primary mx-1' href><i><FaInstagram /></i></a>
      </div>
     </div>

     <div><h5 className='Names mt-3'>Instructor Name</h5>
           <p className='desig mb-2'>Designation</p></div>
    </Card>
       </Col>
   <Col lg={3} md={6} className='wow fadeInUp' data-wow-delay="0.3s" style={{animationDelay:'0.3s', animationName:'fadeInUp', visibility:'visible'}}>
      <Card className='sec5-cards'>
      <div className="instruct-img overflow-hidden"><Card.Img variant="top" src={Team2} className='expert' /></div>

     <div className='social-media position-relative d-flex justify-content-center' style={{marginTop:"-24px"}}>
      <div className='s5-Ico d-flex justify-content-center pt-2 px-1 mx-5'>
        <a className='fb-ico btn btn-sm-square btn-primary mx-1' href><i><FaFacebookF /></i></a>
<a className='fb-ico btn btn-sm-square btn-primary mx-1' href><i><FaTwitter /></i></a>
<a className='fb-ico btn btn-sm-square btn-primary mx-1' href><i><FaInstagram /></i></a>
      </div>
     </div>

     <div><h5 className='Names mt-3'>Instructor Name</h5>
           <p className='desig mb-2'>Designation</p></div>
    </Card>
  </Col>
<Col lg={3} md={6} className='wow fadeInUp' data-wow-delay="0.5s" style={{animationDelay:'0.5s', animationName:'fadeInUp', visibility:'visible'}}>
<Card className='sec5-cards'>
<div className="instruct-img overflow-hidden"><Card.Img variant="top" src={Team3} className='expert' /></div>

     <div className='social-media position-relative d-flex justify-content-center' style={{marginTop:"-24px"}}>
      <div className='s5-Ico d-flex justify-content-center pt-2 px-1'>
        <a className='fb-ico btn btn-sm-square btn-primary mx-1' href><i><FaFacebookF /></i></a>
<a className='fb-ico btn btn-sm-square btn-primary mx-1' href><i><FaTwitter /></i></a>
<a className='fb-ico btn btn-sm-square btn-primary mx-1' href><i><FaInstagram /></i></a>
      </div>
     </div>

     <div><h5 className='Names mt-3'>Instructor Name</h5>
           <p className='desig mb-2'>Designation</p></div>
    </Card>
</Col>
<Col lg={3} md={6} className='wow fadeInUp' data-wow-delay="0.7s" style={{animationDelay:'0.7s', animationName:'fadeInUp', visibility:'visible'}}>
<Card className='sec5-cards overflow-hidden'>
<div className="instruct-img overflow-hidden"><Card.Img variant="top" src={Team4} className='expert w-100 h-100' /></div>

     <div className='social-media position-relative d-flex justify-content-center' style={{marginTop:"-24px"}}>
      <div className='s5-Ico d-flex justify-content-center pt-2 px-1'>
        <a className='fb-ico btn btn-sm-square btn-primary mx-1' href><i><FaFacebookF /></i></a>
<a className='fb-ico btn btn-sm-square btn-primary mx-1' href><i><FaTwitter /></i></a>
<a className='fb-ico btn btn-sm-square btn-primary mx-1' href><i><FaInstagram /></i></a>
      </div>
     </div>

     <div><h5 className='Names mt-3'>Instructor Name</h5>
           <p className='desig mb-2'>Designation</p></div>
    </Card>
</Col>

    </Row>
   </Container>
  </div>

  <div className='sec-5'>
   <Container className='sec5-con mt-0'>
    <Row g={4}>
      <Col lg={3} md={6} className='wow fadeInUp' data-wow-delay=".9s" style={{animationDelay:'0.9s', animationName:'fadeInUp', visibility:'visible'}}>
      <Card className='sec5-cards '>
        <div className="instruct-img overflow-hidden"><Card.Img variant="top" src={Team1} className='expert' /></div>
      <div className='social-media position-relative d-flex justify-content-center' style={{marginTop:"-24px"}}>
      <div className='s5-Ico d-flex justify-content-center pt-2 px-1'>
        <a className='fb-ico btn btn-sm-square btn-primary mx-1' href><i><FaFacebookF /></i></a>
<a className='fb-ico btn btn-sm-square btn-primary mx-1' href><i><FaTwitter /></i></a>
<a className='fb-ico btn btn-sm-square btn-primary mx-1' href><i><FaInstagram /></i></a>
      </div>
     </div>

     <div><h5 className='Names mt-3'>Instructor Name</h5>
           <p className='desig mb-2'>Designation</p></div>
    </Card>
       </Col>
   <Col lg={3} md={6} className='wow fadeInUp' data-wow-delay="1.0s" style={{animationDelay:'0.11s', animationName:'fadeInUp', visibility:'visible'}}>
      <Card className='sec5-cards'>
      <div className="instruct-img overflow-hidden"><Card.Img variant="top" src={Team2} className='expert' /></div>

     <div className='social-media position-relative d-flex justify-content-center' style={{marginTop:"-24px"}}>
      <div className='s5-Ico d-flex justify-content-center pt-2 px-1 mx-5'>
        <a className='fb-ico btn btn-sm-square btn-primary mx-1' href><i><FaFacebookF /></i></a>
<a className='fb-ico btn btn-sm-square btn-primary mx-1' href><i><FaTwitter /></i></a>
<a className='fb-ico btn btn-sm-square btn-primary mx-1' href><i><FaInstagram /></i></a>
      </div>
     </div>

     <div><h5 className='Names mt-3'>Instructor Name</h5>
           <p className='desig mb-2'>Designation</p></div>
    </Card>
  </Col>
<Col lg={3} md={6} className='wow fadeInUp' data-wow-delay="1.1s" style={{animationDelay:'0.13s', animationName:'fadeInUp', visibility:'visible'}}>
<Card className='sec5-cards'>
<div className="instruct-img overflow-hidden"><Card.Img variant="top" src={Team3} className='expert' /></div>

     <div className='social-media position-relative d-flex justify-content-center' style={{marginTop:"-24px"}}>
      <div className='s5-Ico d-flex justify-content-center pt-2 px-1'>
        <a className='fb-ico btn btn-sm-square btn-primary mx-1' href><i><FaFacebookF /></i></a>
<a className='fb-ico btn btn-sm-square btn-primary mx-1' href><i><FaTwitter /></i></a>
<a className='fb-ico btn btn-sm-square btn-primary mx-1' href><i><FaInstagram /></i></a>
      </div>
     </div>

     <div><h5 className='Names mt-3'>Instructor Name</h5>
           <p className='desig mb-2'>Designation</p></div>
    </Card>
</Col>
<Col lg={3} md={6} className='wow fadeInUp' data-wow-delay="1.2s" style={{animationDelay:'0.15s', animationName:'fadeInUp', visibility:'visible'}}>
<Card className='sec5-cards overflow-hidden'>
<div className="instruct-img overflow-hidden"><Card.Img variant="top" src={Team4} className='expert w-100 h-100' /></div>

     <div className='social-media position-relative d-flex justify-content-center' style={{marginTop:"-24px"}}>
      <div className='s5-Ico d-flex justify-content-center pt-2 px-1'>
        <a className='fb-ico btn btn-sm-square btn-primary mx-1' href><i><FaFacebookF /></i></a>
<a className='fb-ico btn btn-sm-square btn-primary mx-1' href><i><FaTwitter /></i></a>
<a className='fb-ico btn btn-sm-square btn-primary mx-1' href><i><FaInstagram /></i></a>
      </div>
     </div>

     <div><h5 className='Names mt-3'>Instructor Name</h5>
           <p className='desig mb-2'>Designation</p></div>
    </Card>
</Col>

    </Row>
   </Container>
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
export default Ourteam;