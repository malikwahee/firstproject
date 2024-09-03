import './App.css';
import './Maincomponet/Style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import Header from './Maincomponet/Header';
import Home from './Maincomponet/Home.jsx';
import About from './Maincomponet/About.jsx';
import Myskill from './Maincomponet/Myskill.jsx';
import Portfolio from './Maincomponet/Portfolio.jsx';
import Exprince from './Maincomponet/Exprince.jsx';
import Testemonel from './Maincomponet/Testemonel.jsx';
import Contact from './Maincomponet/Contact.jsx';
// import Fmain from './Maincomponet/Fmain.jsx';

function App() {
  return (
    <div className='bg-local'>
    <Header />
    <Home />
    <About />
    
    <Myskill />
    <Portfolio  />
    <Exprince />
    <Testemonel />
    <Contact />
    
    
    </div>
  );
}

export default App;
