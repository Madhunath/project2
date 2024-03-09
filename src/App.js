// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import Main from './myproject/Main';
import './myproject/CSS/Main.css';
import './myproject/CSS/About.css';
import './myproject/CSS/Notfound.css';
import './myproject/CSS/Contact.css';
import './myproject/CSS/Animation.css';
import './myproject/CSS/Course.css';
import './myproject/CSS/Readmore.css';
import About from './myproject/About';
import Courses from './myproject/Courses';
import Ourteam from './myproject/Ourteam';
import Testimoniall from './myproject/Testimoniall';
import Notfound from './myproject/Notfound';
import Contact from './myproject/Contact';
import Navigationbar from './myproject/Navigationbar';
import Cart from './myproject/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Readmore from './myproject/Readmore';




function App() {
  return (
<BrowserRouter>
     <div className="App">
     <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Heebo&family=Nunito&display=swap" rel="stylesheet"/>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Heebo:wght@500&family=Nunito:wght@800&display=swap" rel="stylesheet"></link>
   
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@500;700&display=swap" rel="stylesheet"></link>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@600&display=swap" rel="stylesheet" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@800&display=swap" rel="stylesheet"></link>
     
   
      <Navigationbar />
    <Routes>
      <Route path="/" element={ <Main/> } />
      <Route path="about" element={ <About/> } />
      <Route path="courses" element={ <Courses/> } />
      <Route path="ourteam" element={ <Ourteam/> } />
      <Route path="testimoniall" element={ <Testimoniall/> } />
      <Route path="notfound" element={ <Notfound/> } />
      <Route path="contact" element={ <Contact/> } />
      <Route path="cart" element={<Cart />} />
      <Route path="readmore" element={<Readmore />} />
     </Routes> 
    </div>
    </BrowserRouter>
  );
}

export default App;
