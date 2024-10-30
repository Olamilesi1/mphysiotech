import { Routes, Route } from "react-router-dom"
import BlogPage from '../pages/BlogPage'
import Appointment from '../pages/Appointment'
import Contact from '../pages/Contact'
import Faq from '../pages/Faq'
import OurTeam from '../pages/OurTeam'
import PricingPlan from '../pages/PricingPlan'
import Product from '../pages/Product'
import Testimonials from '../pages/Testimonials'
import UserLogin from '../pages/UserLogin'
import UserSignUp from '../pages/UserSignUp'


function Pages () {
    return (
        <div>
<Routes>
<Route path="/" element={<BlogPage/>}/>
<Route path="/book-an-appointment" element={<Appointment/>}/>
<Route path="/contact-us" element={<Contact/>}/>
<Route path="/our-team" element={<OurTeam/>}/>
<Route path="/pricing-plan" element={<PricingPlan/>}/>
<Route path="/product" element={<Product/>}/>
<Route path="/testimonials" element={<Testimonials/>}/>
<Route path="/faq" element={<Faq/>}/>
<Route path="/user-login" element={<UserLogin/>}/>
<Route path="/user-signup" element={<UserSignUp/>}/>
</Routes>
        </div>
    )
}

export default Pages