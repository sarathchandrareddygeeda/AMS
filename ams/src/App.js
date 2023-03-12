
import {Routes,Route} from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Nav from './components/Nav';
import Product from './components/Product';
import About from './components/About';
import { ThemeProvider } from './components/themeContext';
import BikeParts from './components/BikeParts'
import Register from './components/Register';
function App() {
  return (
    <>
    <ThemeProvider>
    <Nav />
    <Routes>
      <Route path="/"  element={<Home />} /> 
      <Route path="login" element={<Login />} />
      <Route path="bikes" element={<Product />} />
      <Route path="about" element={<About />} />
      <Route path="spareparts" element={<BikeParts />} /> 
      <Route path="register" element={<Register />} /> 
   </Routes>
   </ThemeProvider>
  </>
  );
}

export default App;