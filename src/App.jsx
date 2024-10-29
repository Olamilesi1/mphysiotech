// import "./App.css";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Pricing_plan from "./pages/pricing_plan";


// function App() {
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       children: [{ index: true, element: <Pricing_plan /> }],
//     },
//   ]);
//   return (
//     <div>
//       <RouterProvider router={router} />
//     </div>
//   );
// }

// export default App;


import Pages from "./components/Pages";
import { BrowserRouter as Router } from "react-router-dom";


function App() {
  return (
    <div>
      <Router> 
      <Pages />
      </Router>
    </div>
  );
}

export default App;