import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Contactus from "./pages/contact_us";
import Blog_page from "./pages/blog_page";
// import Footer from "./components/footer";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      children: [{ index: true, element: <Blog_page /> }],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
