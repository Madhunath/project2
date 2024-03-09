import React from 'react';
import 'animate.css';
import { useEffect } from 'react';
import WOW from 'wowjs';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Cat4 from './img/cat-4.jpg';
import Cat1 from './img/cat-1.jpg';
import Cat2 from './img/cat-2.jpg';
import Cat3 from './img/cat-3.jpg';
import Course1 from './img/course-1.jpg';
import Course2 from './img/course-2.jpg';
import Course3 from './img/course-3.jpg';
import { FaStar } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import Testimonial1 from './img/testimonial-1.jpg';
import Testimonial2 from './img/testimonial-2.jpg';
import Testimonial3 from './img/testimonial-3.jpg';
import Testimonial4 from './img/testimonial-4.jpg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaYoutube } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaArrowUpLong } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../action/cartAction';

function Courses(){

  useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();
  }, []);

  const dispatch = useDispatch();
  const courses1 = useSelector(state => state.courses1);

  
  const testimonials = [
    { id: 1, imageSrc: Testimonial1, name:'Client Name', profession:'Profession', details:'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.' },
    { id: 2, imageSrc: Testimonial2, name:'Client Name', profession:'Profession', details:'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.' },
    { id: 3, imageSrc: Testimonial3, name:'Client Name', profession:'Profession', details:'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.' },
    { id: 4, imageSrc: Testimonial4, name:'Client Name', profession:'Profession', details:'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.' },
  ];

  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: 0,
    slidesToShow: 3,
    speed: 500,
    focusOnSelect: true,
    dots: true,
    customPaging: () => <div className="custom-indicator"></div>,
    responsive: [
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 2,
          centerPadding: '0',
        },
      },
    ],
  };

    return(
        <div>
         
          
          
<div>
  <Container fluid className='navpage-con py-5 mb-5 page-header'>
  <Container className='py-5'>
  <div class="row justify-content-center">
                <div className="col-lg-10 text-center">
                    <h1 className="display-3 text-white animated slideInDown">Courses</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center">
                            <li className="breadcrumb-item"><a className="text-white" href="/">Home</a></li>
                            <li className="breadcrumb-item"><a className="text-white" href="#sd">Pages</a></li>
                            <li className="breadcrumb-item text-white active" aria-current="page">Courses</li>
                        </ol>
                    </nav>
                </div>
            </div>
  </Container>

  </Container>
</div>
                                    {/* COURSE CATEGORIES */}

    <div className='sec3'>
    <Container className='sec3-con'>
    <div className='wow zoomIn' data-wow-delay="0.1s" style={{animationDelay:'0.1s', animationName:'zoomIn', visibility:'visible'}}>
    <div className='sec3-title'><div className='d-inline position-relative'><div className='cat-line1 position-absolute'></div><div className='cat-line2 position-absolute'></div><h6 className='sec4-h6 mb-2'>CATEGORIES</h6><div className='cat-line3 position-absolute'></div><div className='cat-line4 position-absolute'></div></div>
    <h1 className='sec4-h1 mt-0'>Courses Categories</h1></div>
      </div>
  <Row className='sec3-imgs g-3'>
  <Col lg={7} md={6}>
    <Row className='imgss g-3'>
     <Col lg={12} md={12} className='wow zoomIn' data-wow-delay="0.1s" style={{animationDelay:'0.1s', animationName:'zoomIn', visibility:'visible'}}>
      <a href='/' className='category1 position-relative d-block overflow-hidden'>
        <img src={Cat1} alt="" className='cat1img img-fluid'/>
        <div className='bg-white text-center position-absolute bottom-0 end-0 px-3 py-2' style={{margin:"1px"}}>
        <h5 className='cat-name'>Web Design</h5>
        <h6 className='cat-coursename'>49 Courses</h6></div></a>
    </Col>
    <Col lg={6} md={12} className='wow zoomIn' data-wow-delay="0.3s" style={{animationDelay:'0.3s', animationName:'zoomIn', visibility:'visible'}}>
      <a href='/' className='category2 position-relative d-block overflow-hidden '>
        <img src={Cat2} alt="" className='cat2img img-fluid'/>
        <div className='bg-white text-center position-absolute bottom-0 end-0 px-3 py-2' style={{margin:"1px"}}>
        <h5 className='cat-name'>Graphic Design</h5>
        <h6 className='cat-coursename'>49 Courses</h6></div></a>
    </Col>
    <Col lg={6} m={12} className='wow zoomIn' data-wow-delay="0.5s" style={{animationDelay:'0.5s', animationName:'zoomIn', visibility:'visible'}}>
      <a href='/' className='category3 position-relative d-block overflow-hidden '>
       <img src={Cat3} alt="" className='cat3img img-fluid'/>
       <div className='bg-white text-center position-absolute bottom-0 end-0 py-2 px-3' style={{margin:"1px"}}>
       <h5 className='cat-name'>Video Editing</h5>
        <h6 className='cat-coursename'>49 Courses</h6></div></a>
    </Col>
   </Row>
  </Col>
 <Col lg={5} md={6} style={{minHeight:"350px", animationDelay:'0.7s', animationName:'zoomIn', visibility:'visible'}} className='g-3 wow zoomIn' data-wow-delay="0.7s">
  <a href='/' className='category4 position-relative d-block overflow-hidden h-100'> 
 <img src={Cat4} alt="" className='cat4img img-fluid w-100 h-100' style={{obiectFit:'cover'}} />
  <div className='bg-white text-center position-absolute bottom-0 end-0 px-3 py-2' style={{margin:"1px"}}>
  <h5 className='cat-name'>Online Marketing</h5>
   <h6 className='cat-coursename'>49 Courses</h6></div></a>
 
  </Col>
  </Row>
  </Container>
  </div>
                                            {/* POPULAR COURSES */}
                            
  <div className='section-4 w-100'>
  <Container className='sec4-con w-100'>
<div className='sec4-title wow fadeInUp text-center' data-wow-delay="0.1s" style={{animationDelay:'0.1s', animationName:'fadeInUp', visibility:'visible'}}>
      <div className='d-inline position-relative'><div className='course-line3 position-absolute'></div><div className='course-line4 position-absolute'></div><h6 className='sec4-h6 mb-0'>COURSES</h6><div className='course-line1 position-absolute'></div><div className='course-line2 position-absolute'></div></div>
      <h1 className='sec4-h1 mt-1'>Popular Courses</h1>  </div>
      <ul className="course-list mx-0 px-0">

        {courses1.map(course => (
          <li key={course.id} className="course-card">
  <Row g={4} className='popularc'>
<Col lg={4} md={6} className='cards-col wow fadeInUp mx-2 ' data-wow-delay="0.1s" style={{animationDelay:'0.1s', animationName:'fadeInUp', visibility:'visible', width:'100%'}}>
    <Card className='sec4-cards text-center'>
    <div className="popular-course overflow-hidden">
    <img src={course.image} alt={course.name} className="course-img position-reletive img-fluid w-100" /></div>
      <div className='btn-sec w-100 position-absolute justify-content-center mb-4'>
      <Link to='/Readmore' className='card-btn1 flex-shrink-0 btn btn-sm btn-primary px-3 border-end'>Read More</Link>
      <Link to='/Contact' className='card-btn2 flex-shrink-0 btn btn-sm btn-primary px-3 border-start'>Join Now</Link>
   </div>
        <h3 className='course-price mt-2' style={{fontWeight:"bold"}}>₹{course.price}</h3>
          <div className='star mb-3'><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
            <span className='rate'> (4.5)</span></div>
            <div className="course-details ">
                <span className="course-name ">{course.name}</span><br />
                <button className='addtocart-btn mt-3 mb-3'style={{width:"70%"}} onClick={() => dispatch(addToCart(course))}>Add to Cart</button> </div>
    <div className='card-footer border-top d-flex p-0'>
      <small className="c-footer flex-fill text-center border-end py-2">
         <FaUserTie className='Ico' /> {course.instructor}
         </small>
     <small className="c-footer flex-fill text-center border-end py-2">
         <FaClock className='Ico'/> 1.49 Hrs
         </small>
     <small className="c-footer flex-fill text-center border-end py-2">
         <FaUser className='Ico'/> 30 Students
         </small>
        </div>
     </Card>
  </Col>
  </Row>

      </li>
        ))}
      </ul>
</Container>
</div>
  
                                                {/* TESTIMONIAL */}

  <div className='sec-6'>
  <Container className='sec6-con'>
  <div className='wow fadeInUp' data-wow-delay="0.1s" style={{animationDelay:'0.1s', animationName:'fadeInUp', visibility:'visible'}}>
    <div className='d-inline position-relative'><div className='ins-line1 position-absolute'></div><div className='ins-line2 position-absolute'></div> <h6 className='sec4-h6 mb-1'> TESTIMONIAL </h6><div className='ins-line3 position-absolute'></div><div className='ins-line4 position-absolute'></div></div>
        <h1 className='sec4-h1 mb-4'>Our Students Say!</h1></div>

  <div className="carousel-container w-100 wow fadeInUp" data-wow-delay="0.1s" style={{animationDelay:'0.1s', animationName:'fadeInUp', visibility:'visible'}}>
      <Slider {...settings}> 
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <img src={testimonial.imageSrc} alt={`Testimonial ${testimonial.id}`} className=' border rounded-circle p-2 mx-auto mb-3' style={{height:"80px", width:"80px",}} />

            <div className="details-container">
              <h5 className='testi-name'>{testimonial.name}</h5>
              <p className='testi-profession'>{testimonial.profession}</p>
              <div className='testi-p p-2 py-4 px-3'><p className='testi-txt'>{testimonial.details}</p></div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
</Container>
    </div>

                                                 {/* FOOTER */}
 <div className='Footer wow fadeIn' data-wow-delay="0.1s" style={{animationDelay:'0.1s',animationName:'fadeInUp', visibility:'visible'}}>
  <Container fluid className='foot-con1 pt-5'>
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
        </div>
    )
}

export default Courses;