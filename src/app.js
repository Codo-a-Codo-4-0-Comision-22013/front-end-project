import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "./components/login";
import { Register } from "./components/register";
import NavBar from "./components/navBar";
import { ProtectedRoute } from "./components/protectedRoute";

import { AuthProvider } from "./context/authContext";
import { ColorModeContextProvider } from "./context/colorModeContext";
import Home from "./pages/home/home";


function App() {
	return (
		<ColorModeContextProvider>
			<div className="app-container">
				<AuthProvider>
					{/* <div className="sidebar-container">
						<NavBar name="loco gatti" avatar="imgs/profile_picture.jpg" />
					</div> */}

					<Routes>
						<Route path="/login" element={<Login />} />
						<Route
							path="/"
							element={
								<ProtectedRoute>
									<Home />
								</ProtectedRoute>
							}
						/>
						<Route path="/register" element={<Register />} />
					</Routes>

				</AuthProvider>
			</div>
		</ColorModeContextProvider>
	);
}

export default App;
