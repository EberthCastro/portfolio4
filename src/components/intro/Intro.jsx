import "./intro.css"
import Me from "../../images/SagFam2.jpg"
import fig from "../../images/figma512.png"
import git from "../../images/github512.png"
import css from "../../images/CSS512.png"
import js from "../../images/JavaScript512.png"
import react from "../../images/react512.png"


const intro = () => {
  return (
    <div className="i">
        
        <div className="i-left">
            <div className="i-left-wrapper">
                <h3 className="i-welcome1">Welcome to my site</h3>
                <h1 className="i-name">Hi, I`m Isaac</h1>
                <div className="i-name-second">
                    <h1 className="i-name-second-1">Frontend</h1>
                    <h1 className="i-name-second-2">Dev.</h1>
                </div>
                
                <h3 className="i-welcome2">This is a little website that help you to find what you are looking and more!</h3>
                <div className="i-title">
                    <div className="i-title-wrapper">
                        <div>
                            <img src={fig} alt="" href=""  className="i-icons"/>
                        </div>
                    
                        
                        <img src={git} alt="" href=""  className="i-icons"/>
                        <img src={css} alt="" href=""  className="i-icons-css"/>
                        <img src={js} alt="" href=""  className="i-icons"/>
                        <img src={react} alt="" href=""  className="i-icons"/>

                    </div>
                </div>
                <div >
                    <h1></h1>
                    
                </div>
                <div className="i-buttons">
                    <button className="i-buttons-hire">Hire me!</button>
                    <button className="i-buttons-project">See my Project</button>
                </div>

            </div>
            
        </div>
        <div className="i-right">            
                <img src={Me} alt="" className="i-img"/>            
        </div>

    </div>
  )
}

export default intro

