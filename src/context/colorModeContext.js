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
				breakpoints: {
					values: {
						xs: 0,
						sm: 600,
						md: 900,
						lg: 1400,
						xl: 1536,
					}
				}
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
