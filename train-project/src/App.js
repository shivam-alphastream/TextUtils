import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {

  return (
    <>
     <Router>
     <Navbar title = "Text Utils"/>

     <div className='container my-3'> 
     {/* <Switch>
          <Route exact path="/about">
            <About />     
          </Route>
          <Route exact path="/">
            <TextForm heading="enter some text"></TextForm>
          </Route>
      </Switch> */}

      <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/" element={<TextForm heading="enter some text"></TextForm>} />
      </Routes>

     </div>  
     </Router>
    </>
  );
}

export default App;
