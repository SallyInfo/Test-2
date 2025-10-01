import { Routes, Route } from 'react-router-dom';
import MainLayout from './Layouts/MainLayouts.jsx';
import AuthLayouts from "./Layouts/AuthLayouts.jsx"
import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
import Contact from "./pages/contact/Contact.jsx"
import AllProducts from "./pages/products/AllProducts.jsx";
import OneProduct from './pages/products/components/OneProduct.jsx';
import Login from './pages/login/Login.jsx';
import Signin from './pages/login/Signin.jsx';
import "./assets/styles/Layout.css";
import '../src/assets/styles/main.css';
// import ScrollUp from "././components/custom/ScrollUp.jsx";

function App() {
  return (
  <>
            {/* <ScrollUp />   */}
    <Routes>
      <Route element={<AuthLayouts />}>
            <Route path="/sign-in" element={<Signin />} />
            <Route path="/login" element={<Login />} /> 
      </Route>
      
          <Route element={<MainLayout />}>
            <Route path='/' element={<Home />} />
            <Route path='/about/' element={<About />} />
            <Route path='/contact/' element={<Contact />} />
            <Route path='/allproducts/' element={<AllProducts/>} />
            <Route path="/oneproduct/:id" element={<OneProduct />} />

             <Route path="*" element={<h1 className='f-cen p16' style={{color:"red"}}>404 Page Not Found</h1>} />
          </Route>

        </Routes>
    </>
    
  );
}

export default App;