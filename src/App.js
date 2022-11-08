import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import Blogs from "./pages/Blogs/Blogs";
import Home from "./pages/Home/Home/Home";
import Login from "./pages/Login/Login";
import ServiceDetails from "./pages/Services/ServiceDetails/ServiceDetails";
import Services from "./pages/Services/Services";
import Signup from "./pages/Signup/Signup";
import TermCondition from "./pages/TermCondition/TermCondition";


function App() {
    return (
        <>
        <Toaster/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/:id" element={<ServiceDetails />} />
                <Route path="/blog" element={<Blogs />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/term-condition" element={<TermCondition />} />
                <Route path="/privacy-policy" element={<TermCondition />} />
            </Routes>
        </>
    );
}

export default App;
