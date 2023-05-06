import { Routes, Route, Router } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Product from "./components/Product";
import About from "./components/About";
import { ThemeProvider } from "./components/themeContext";
import BikeParts from "./components/BikeParts";
import Register from "./components/Register";
import Card from "./components/Card";
import NoPage from "./components/NoPage";
import Cart from "./components/Cart";
import Services from "./components/Services"
import User from "./admin/User";
import Dashboard from "./components/Dashboard";
import CustInfo from "./components/CustInfo";
import { ToastContainer } from "react-toastify";
import Customer from "./admin/Customer"
import Servicing from "./admin/Servicing"
import Producti from "./admin/AdminProduct"
import AddSpare from "./components/AddSpare"
import UploadSelect from "./components/UploadSelect";
function App() {

  return (
    <>
      <ThemeProvider>
     
        
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="bikes" element={<Product />} />
          <Route path="about" element={<About />} />
          <Route path="spareparts" element={<BikeParts />} />
          <Route path="register" element={<Register />} />
          <Route path="upload" element={<Card />} />
          <Route path="uploadspare" element={<AddSpare />} />
          <Route path="uploadselect" element={<UploadSelect />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<NoPage />} />
          <Route path="services" element={<Services />} />
          <Route path="admin-user" element={<User />} />
          <Route path="dash" element={<Dashboard />} />
          <Route path="custinfo" element={<CustInfo />} />
          <Route path="customers" element={<Customer />} />
          <Route path="serviceinfo" element={<Servicing />} />
          <Route path="productinfo" element={<Producti />} />
          </Routes>
        <ToastContainer/>
      </ThemeProvider>
    </>
  );
}

export default App;
