import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import SignIn from "./pages/SignIn"
import Home from "./pages/Home"
import Register from "./pages/Register"
import Stats from "./pages/Stats"
import Layout from "./pages/Layout"
import AllJobs from "./pages/AllJobs"
import UserProfile from "./pages/UserProfile"
import AddJob from "./pages/AddJob"

function App() {
	return (
		<div>
			<Router>
				<Routes>
					<Route index element={<Home />}></Route>
					<Route path="/register" element={<Register />}></Route>
					<Route path="/signIn" element={<SignIn />}></Route>
					<Route
						path="/stats"
						element={
							<Layout>
								<Stats />
							</Layout>
						}
					></Route>
					<Route
						path="/allJobs"
						element={
							<Layout>
								<AllJobs />
							</Layout>
						}
					></Route>
					<Route
						path="/addJob"
						element={
							<Layout>
								<AddJob />
							</Layout>
						}
					></Route>
					<Route
						path="/editJob/:id"
						element={
							<Layout>
								<AddJob isEdit={true} />
							</Layout>
						}
					></Route>
					<Route
						path="/profile"
						element={
							<Layout>
								<UserProfile />
							</Layout>
						}
					></Route>
				</Routes>
			</Router>
		</div>
	)
}

export default App
