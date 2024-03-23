import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";
import Rootpage from "./pages/rootpage";
import Homepage from "./pages/Homepage";
import Menupage from "./pages/Menupage";
import "./index.css";

function App() {
  return (
    <>
      <Menupage />
      {/* <RouterProvider router={routes} /> */}
    </>
  );
}

export default App;
