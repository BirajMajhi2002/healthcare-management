import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Register from "./pages/Register";
import LoginPage from "./pages/Login";
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/"element={<HomePage/>}/>
    <Route path="/register"element={<Register/>} />
    <Route path="/login"element={<LoginPage/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
