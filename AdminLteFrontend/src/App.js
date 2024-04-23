import Home from "./components/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import { AuthProvider } from "./context/AuthContext";
import Login from "./components/Login.js";
import Register from "./components/Register.js";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <AuthProvider>
          <Header />
          <SideNav />
          <Routes>
            {/* <Route path="/" element={<Layout />}> */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          <Footer />
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
