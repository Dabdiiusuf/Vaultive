import Home from "../Pages/Home";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyProfile from "../Pages/MyProfile";
import NotFound from "../Pages/NotFound";
import ProtectedRoute from "./ProtectedRoute";
import { AuthContextProvider } from "../Providers/AuthContext";
import Login from "./Login";
import Register from "./Register";
import Footer from "./Footer";
import TermsOfUse from "../Pages/TermsOfUse";
import PrivacyPolicy from "../Pages/PrivacyPolicy";

function App() {
  return (
    <AuthContextProvider>
      <div className="w-screen h-screen overflow-x-hidden bg-gray-900">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/Profile" element={<MyProfile />} />
            </Route>
            <Route path="/TermsOfUse" element={<TermsOfUse />} />
            <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </AuthContextProvider>
  );
}

export default App;
