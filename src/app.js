import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Home } from "./components/Home";
import NavBar from "./components/NavBar";
import { ProtectedRoute } from "./components/ProtectedRoute";

import { AuthProvider } from "./context/AuthContext";
import { ColorModeContextProvider } from "./context/ColorModeContext";


function App() {
	return (
		<ColorModeContextProvider>
			<div className="app-container">
				<AuthProvider>
					<div className="sidebar-container">
						<NavBar name="loco gatti" avatar="imgs/profile_picture.jpg" />
					</div>
					<div className="body-container">
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
					</div>
				</AuthProvider>
			</div>
		</ColorModeContextProvider>
	);
}

export default App;
