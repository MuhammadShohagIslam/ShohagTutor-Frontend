import { Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog/Blog";
import Home from "./pages/Home/Home/Home";
import Login from "./pages/Login/Login";
import Services from "./pages/Services/Services";
import Signup from "./pages/Signup/Signup";


function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </>
    );
}

export default App;
