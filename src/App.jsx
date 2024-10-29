import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Contactus from "./pages/contact_us";
// import Blog_page from "./pages/blog_page";
// import Faq_page from "./pages/faq_page";
// import Testimonials_page from "./pages/testimonials_page";
import Pricing_plan from "./pages/pricing_plan";
// import OurTeam_page from "./pages/ourTeam_page";
// import Book_appointment_page from "./pages/book_appointment_page.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      children: [{ index: true, element: <Pricing_plan /> }],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
