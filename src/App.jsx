import Navbar from "./components/intro/Navbar";
import Contact from "./components/contact/Contact";
import Project from "./components/project/Project";
import About from "./components/about/About";
import Intro from "./components/intro/Intro";


const App = () => {
    return (
        <div>
            <Navbar/>
            <Intro/>            
            <About/>            
            <Project/>
            <Contact/>
        </div>
    );
};

export default App;
