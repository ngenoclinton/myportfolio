import "./footer.css"
import {FaFacebook, FaTwitter, FaPinterest, FaInstagram, FaLinkedin, FaGithub} from 'react-icons/fa';

const Footer = () =>{
    return(
        <>
            <div className="footer-container">
                <div className="foo-container">
                    <div className="footer-section">
                        <div className="row justify-center">
                            <div className="footer-content">
                                <ul className="footer-circles">
                                    <li ><FaLinkedin className="footerIcon"/></li>
                                    <li ><FaGithub className="footerIcon"/></li>
                                    <li ><FaTwitter className="footerIcon"/></li>
                                    <li ><FaInstagram className="footerIcon"/></li>
                                    <li ><FaPinterest className="footerIcon"/></li>
                                </ul>
                                <div className="copy-right-content">
                                    <p className="copyright"> Copyright {new Date().getFullYear()} clintonkipkoechngeno@gmail.com | All Rights Reserved</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;