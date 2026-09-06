import Header from "./component/commonComponet/Header";
import Home from "./component/homePage/Home";
import About from "./component/aboutPage/About";
import Skills from "./component/skillPage/Skills";
import Project from "./component/projectPage/Project";
import Contact from "./component/contactPage/Contact";
import Footer from "./component/footer/Footer";


const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Skills />
      <Project/>
      <Contact/>
      <Footer/>
    </div>  
  );
};

export default App;
