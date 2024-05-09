import { BrowserRouter, Routes, Route} from "react-router-dom"
import { Home } from "./Home";
import {Work} from "./Work"
import {References} from "./References"
import {About} from "./About"


export default function App(){
  return(
    <>
      <link rel="stylesheet" href="/CSS/App.css" />


      <div className="subpages">
        <p className="subpages">Angel Vazquez</p>

        <a href="/" className="subpages"><p className="pages">Home</p></a>
        <a href="/work" className="subpages"><p className="pages" id="work">Work</p></a>
        <a href="/references" className="subpages"><p className="pages" id="reference">References</p></a>
        <a href="/about" className="subpages"><p className="pages" id="about_me">About</p></a>
        
      </div>

      <div className="div_line"></div>


      <div className="main">
        <BrowserRouter>
          <Routes>
            <Route path="work" element={<Work/>} />
            <Route path="references" element={<References/>} />
            <Route path="about" element={<About/>} />
            <Route path="/" element={<Home/>} />
            {/* <Route component={NotFound} /> Render a 404 component for unknown routes */}
          </Routes>
        </BrowserRouter>
      </div>


      <div className="social">
        <a href="www.x.com" target="_blank"><img src="/Pictures/twitter.png" id="T" className="social"/></a>
        <a href="instagram.com" target="_blank"><img src="/Pictures/instagram.png" id="I" className="social"/></a>
        <a href="github.com" target="_blank"><img src="/Pictures/github.png" id="G" className="social"/></a>
        <a href="indeed.com" target="_blank"><img src="/Pictures/indeed.png" id="N" className="social"/></a>
      </div>

    </>
  )
}