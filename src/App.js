import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import Blogs from "./pages/Blogs/Blogs";
import Home from "./pages/Home/Home/Home";
import Login from "./pages/Login/Login";
import ServiceDetails from "./pages/Services/ServiceDetails/ServiceDetails";
import Services from "./pages/Services/Services";
import Signup from "./pages/Signup/Signup";
import TermCondition from "./pages/TermCondition/TermCondition";
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import MyReviews from "./pages/MyReviews/MyReviews";
import UpdateReview from "./pages/MyReviews/UpdateReview/UpdateReview";


function App() {
    return (
        <>
        <Toaster/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/:id" element={<ServiceDetails />} />
                <Route path="/my-reviews" element={<MyReviews />} />
                <Route path="/my-reviews/update/:id" element={<UpdateReview />} />
                <Route path="/blog" element={<Blogs />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/term-condition" element={<TermCondition />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            </Routes>
        </>
    );
}

export default App;
