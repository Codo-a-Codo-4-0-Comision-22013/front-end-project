import React from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';


export const ColorModeContext = React.createContext({
	toggleColorMode: () => { },
	mode: 'light'
});

export function ColorModeContextProvider({ children }) {
	const [mode, setMode] = React.useState('light');
	const colorMode = React.useMemo(
		() => ({
			toggleColorMode: () => {
				setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
			},
			mode
		}),
		[mode],
	);
	

	const theme = React.useMemo(
		() =>
			createTheme({
				palette: {
					mode,
				},
			}),
		[mode],
	);

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				{children}
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}
export const useColorMode = () => React.useContext(ColorModeContext);