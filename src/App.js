import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Router from "routes/routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
