import './skills.css'
import Javascript from '../../../Images/javascript-logo.jpg'
import Html from '../../../Images/html-logo.jpg'
import Css from '../../../Images/css-logo.jpg'
import Animation from '../../../Images/sequence-logo.jpg'
import SEO from '../../../Images/google-logo.jpg'
import Axe from '../../../Images/axe-logo.png'
import Performance from '../../../Images/lighthouse-logo.jpg'
const Skills= () => {
    return (
        <div className="skills-container" id='Skills'>
                <div className='title skill-title'>
                    <span >My Stack | Toolbox</span>
                    <div className='underline'></div>
                </div>

                <div className='skills'>
                    <div className='sk-left'>
                     <div>
                        <span className='l-title'>Skills</span>
                     </div>
                        <div className='sk'>
                            <img src={Javascript
                            } alt=''/>
                            <span className=''>Javascript(Vanilla, React)</span>
                        </div>
                        <div>
                            <img src={Html} alt=''/>
                            <span>Semantic HTML</span>
                        </div>
                        <div>
                            <img src={Css} alt=''/>
                            <span>Responsive CSS</span>
                        </div>
                        <div>
                            <img src={Performance} alt=''/>
                            <span>Performance</span>
                        </div>
                        <div>
                            <img src={Animation} alt=''/>
                            <span>Animation</span>
                        </div>
                        <div>
                            <img src={Axe} alt=''/>
                            <span>Accesibility & Best Practises</span>
                        </div>
                        <div>
                            <img src={SEO} alt=''/>
                            <span>SEO</span>
                        </div>
                    </div>

                    <div className='s-right'>
                       <div className='front-end'>
                       <span>FrontEnd</span>
                            <div >
                                <div className='language'>
                                 <span>HTML/CSS</span><span>85%</span> 
                                </div>
                                <div className='knowldge htcs'/>
                                <div className='background'></div>
                            </div> 
                            <div >
                                <div className='language'>
                                 <span>Javascript</span><span>75%</span> 
                                </div>
                                <div className='knowldge js'/>
                                <div className='background'></div>
                            </div>
                            <div >
                                <div className='language'>
                                   <span> React</span><span>70%</span>
                                </div>
                                <div className='knowldge react'/>
                                <div className='background'></div>
                            </div>
                        </div>  
                         
                         <div className='back-end'>
                         <span>BackEnd</span>
                            <div>
                                <div className='language'>
                                  <span>Node Js</span> <span>30%</span>
                                 </div>
                                <div className='knowldge node'/>
                                <div className='background'></div>
                            </div>   
                            <div >
                                <div className='language'> 
                                 <span>Firebase</span> <span>10%</span>
                                </div>
                                <div className='knowldge firebase'/>
                                <div className='background'></div>
                            </div>
                            <div >
                                <div className='language'> 
                                  <span>SQL</span> <span>20%</span>
                                </div>
                                <div className='knowldge sql'/>
                                <div className='background'></div>
                            </div>
                         </div>
                </div>
                </div>
                
        </div>
    )
}

export default Skills
