import SplitPane from "../Components/SplitPane/SplitPane";
import Navbar from "../Components/Navbar/Navbar";
import Browser from "../Components/pages/Browser";
import { useState } from "react";
function Index() {
  const [isOpen, setOpen] = useState(true);
  const toggle = () => setOpen(!isOpen);
    return (
      <div>
        <div className='top-nav'>
            <div></div>
            <div></div>
        </div>
      <SplitPane
      left={
          <Navbar 
            isOpen = {isOpen}
            toggle ={toggle}
          />
        }
        isOpen  = {isOpen}
        toggle = {toggle}
        />
      </div>
    );
  }
  export default Index;