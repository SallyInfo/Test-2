import { Routes, Route } from 'react-router-dom';
import MainLayout from './Layouts/MainLayouts';
import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
import Contact from "./pages/contact/Contact.jsx"
import "./assets/styles/Layout.css";
import '../src/assets/styles/main.css';

function App() {
  return (<>
    <Routes>
      
          <Route element={<MainLayout />}>
            <Route path='/' element={<Home />} />
            <Route path='/about/' element={<About />} />
             <Route path='/contact/' element={<Contact />} />
          </Route>

        </Routes>
    </>
    
  );
}

export default App;