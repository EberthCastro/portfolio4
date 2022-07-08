import Me2 from "../../images/port.jpg"
import "./about.css"


const About = () => {
  return (
    
    <div className="a">
        
        <div className="a-left">
            <div className="a-left-text">
                <h3 className="a-text1">About me</h3>
                <h4 className="a-text2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium esse quas sed vero distinctio perferendis eveniet ducimus, consectetur repellat enim! Assumenda culpa eaque doloremque cupiditate, velit iste voluptatibus amet architecto?</h4>
                
            </div>
                <div className="a-buttons">
                    <button className="a-buttons-hire">Hire me!</button>
                    <button className="a-buttons-project">See my Project</button>
                </div>
        </div>
        
        <div className="a-right">
            <div className="a-right-card">
                <img src={Me2} alt="" className="a-img" /> 
            </div>

        </div>
    </div>
  )
}

export default About


