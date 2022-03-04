import { Router, Routes, Route, BrowserRouter } from "react-router-dom";
import React, {Component} from "react";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
// import Connect from "./Components/Connect";
import Footer from "./Components/Footer";
import Gallery from "./Components/Gallery"
import Contact from "./Components/Contact"

function App () {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/About" element={<About/>}/>
        <Route path="/Gallery" element={<Gallery/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
  
      
    </>
  )
}

export default App;

/*
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {activePage: 'aboutPage'}
  }

  handlePageChange = (activePage) => {
    this.setState({activePage: activePage})
  }

  render() {
    const {activePage} = this.state;

    return (
      <div className="App">
        {activePage = "aboutPage" && <About handlePageChange = {this.handlePageChange}/>}
        {activePage = "galleryPage" && <Gallery handlePageChange = {this.handlePageChange}/>}
        {activePage = "contactPage" && <Contact handlePageChange = {this.handlePageChange}/>}
      </div>
    )
  }
}
*/
