import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Home from "./pages/Home";

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route index element = { <Home/> }></Route>
          <Route path="/register" element = { <SignUp/> }></Route>
          <Route path="/signIn" element = { <SignIn/> }></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
