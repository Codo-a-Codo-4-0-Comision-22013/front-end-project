import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "./components/Login";
import { Register } from "./components/register";
import { Home } from "./components/home";
import NavBar from "./components/navBar";
import { ProtectedRoute } from "./components/protectedRoute";
import { AuthProvider } from "./context/authContext";
import { ColorModeContextProvider } from "./context/colorModeContext";
import {ThemeProvider, createTheme} from "@material-ui/core/styles/index";


function App() {
	const theme = createTheme({
		palette: {
			primary: {
				main: '#9a0e31',
				
				
	},
			secondary: {
			main: '#797979',

	},
	},
	});


	return (
		<ThemeProvider theme={theme}>
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
		</ThemeProvider>
	);
}

export default App;
