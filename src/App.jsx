import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Main from "./pages/Main";
import AllJobs from "./pages/AllJobs";

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route index element = { <Home/> }></Route>
          <Route path="/register" element = { <Register/> }></Route>
          <Route path="/signIn" element = { <SignIn/> }></Route>
          <Route path="/dashboard" element = { <Main/> }></Route>
          <Route path="/dashboard/stats" element = { <Main/> }></Route>
          <Route path="/dashboard/allJobs" element = { <AllJobs/> }></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
