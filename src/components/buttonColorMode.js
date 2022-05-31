import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useContext } from 'react';
import { ColorModeContext } from '../context/colorModeContext';

export default function ButtonColorMode() {

	const { mode, toggleColorMode } = useContext(ColorModeContext);
	return (
		<>
			<IconButton onClick={toggleColorMode} color="inherit">
				{mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
			</IconButton>
		</>
	);
}

