import git from "../../images/project-git.png"
import "./project.css"

const Project = () => {
  return (
    <div className="p">
        <div className="p-left">
            <h3 className="p-left-text">Project</h3>
        </div>
        <div className="p-right">
            <div className="p-right-leftarrow">
                <div>
                    <h3>Left A</h3>
                </div>
            </div>
            <div className="p-right-center">
                <div className="p-card-bg">
                    
                </div>
                <div className="p-card">
                    <img src={git} alt="" className="p-img"/>
                </div>
                <div className="p-card-text">
                    <h3>Project Tittle</h3>
                </div>
                <div className="p-card-button">
                    <button className="p-button-hire">Hire me!</button>
                </div>
            </div>
            <div className="p-right-arrowright">
                <div>
                    <h3>Right A</h3>
                </div>
                <div className="p-icons">
                    
                </div>

            </div>

            

        </div>
      
    </div>
  )
}

export default Project
