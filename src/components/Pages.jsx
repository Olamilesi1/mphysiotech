import { Routes, Route } from "react-router-dom"
import BlogPage from '../pages/BlogPage'
import Appointment from '../pages/Appointment'
import Contact from '../pages/Contact'
import Faq from '../pages/Faq'
import OurTeam from '../pages/OurTeam'
import PricingPlan from '../pages/PricingPlan'
import Testimonials from '../pages/Testimonials'


function Pages () {
    return (
        <div>
<Routes>
<Route path="/" element={<BlogPage/>}/>
<Route path="/book-an-appointment" element={<Appointment/>}/>
<Route path="/contact-us" element={<Contact/>}/>
<Route path="/our-team" element={<OurTeam/>}/>
<Route path="/pricing-plan" element={<PricingPlan/>}/>
<Route path="/testimonials" element={<Testimonials/>}/>
<Route path="/faq" element={<Faq/>}/>
</Routes>
        </div>
    )
}

export default Pages