import About from "./About/About";
import Navbar from "../Navbar/Navbar";
import Home from "./Intro/Home";
import './BrowSec.css'
import Services from "./services/Services";

const Browser = ({isOpen, toggle}) =>{
    return (
       <div className="b-container" style={{width:isOpen ? "" : ""}}>
        <Home />
        <About />
        <Services />
        </div>
    )
}

export default Browser;