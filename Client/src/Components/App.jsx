import Home from "../Pages/Home";
import Navbar from "./Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // useLocation,
} from "react-router-dom";
import MyProfile from "../Pages/MyProfile";
import Chat from "../Pages/Chat";
import NotFound from "../Pages/NotFound";
import ProtectedRoute from "./ProtectedRoute";
import { AuthContextProvider } from "../Providers/AuthContext";
import Login from "./Login";
import Register from "./Register";
import Footer from "./Footer";
import TermsOfUse from "../Pages/TermsOfUse";
import PrivacyPolicy from "../Pages/PrivacyPolicy";

function App() {
  // const location = useLocation();
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [location]);
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
              <Route path="/Chat" element={<Chat />} />
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
