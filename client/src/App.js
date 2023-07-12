import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Home from "./pages/Home";
import Auth from "./pages/Auth";
import useToken from "./hooks/useToken";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";
import { useSelector } from "react-redux";

function App() {
  const [token] = useToken();
  const { modal } = useSelector((state) => state.modal);
  return (
    <div>
      <Toaster position="top-right" />
      <BrowserRouter>
        {token?.token && <Navbar />}
        {modal && <Modal />}
        <Routes>
          <Route
            path="/"
            element={/*!token?.token ? <Link to={"/auth"} /> :*/ <Home />}
          />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
