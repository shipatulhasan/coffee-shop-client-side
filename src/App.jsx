import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Routes/Router";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="max-w-screen-2xl mx-auto bg-black">
      <RouterProvider router={router} />
      <Toaster />
    </div>
  );
}

export default App;
