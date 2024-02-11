import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/css/dashlite.css";
import "./assets/css/theme.css";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Customers from "./pages/Customers";
import Transactions from "./pages/Transactions";
import Email from "./pages/Email";
import Blog from "./pages/Blog";
import Archieves from "./pages/Archieves";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      {/* <Sidebar /> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Users" element={<Users />} />
        <Route path="/Customers" element={<Customers />} />
        <Route path="/Transactions" element={<Transactions />} />
        <Route path="/Email" element={<Email />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Archieves" element={<Archieves />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};
export default App;
