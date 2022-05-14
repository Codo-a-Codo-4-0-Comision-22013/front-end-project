// import logo from './DATA/logo-gif3.gif';
// import './App.css';

// function App() {
//   return (
//     <body>
//       <div className="App">
//         <div className="App-body">
//           <h1>Bienvenido a PronQatar 2022</h1> 
//           <img src={logo} className="App-logo" alt="logo" />
//           <form className='formulario'>
//             <input className='usuario'
//             type="mail"
//             name="mail"
//             placeholder='Ingrese su usuario/email' />
//             <input className='contraseña'
//             type="password"
//             name="contraseña"
//             placeholder='Ingrese su contraseña'
//               />
//             <input className='boton' 
//             type="submit" value="Ingresar" />
//           </form>
//         </div>    
//       </div>
//     </body>
//   );
// }

// export default App;

import React, { useState } from 'react'
import { Grid, Container, Paper, Typography, TextField, Button, CssBaseline } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import logo from './assets/images/qatar-world-cup-2022-2.jpg'
import { createTheme } from '@material-ui/core/styles';

// const theme = createTheme({
//   palette: {
//     primary: {
//       // light: will be calculated from palette.primary.main,
//       main: '#ff4400',
//       // dark: will be calculated from palette.primary.main,
//       // contrastText: will be calculated to contrast with palette.primary.main
//     },
//     secondary: {
//       light: '#0066ff',
//       main: '#0044ff',
//       // dark: will be calculated from palette.secondary.main,
//       contrastText: '#ffcc00',
//     },
//     // Used by `getContrastText()` to maximize the contrast between
//     // the background and the text.
//     tonalOffset: 0.2,
//   },
// });
    

const useStyles = makeStyles(theme => ({

    palette: {
      primary: {
        // light: will be calculated from palette.primary.main,
        main: '#ff4400',
        // dark: will be calculated from palette.primary.main,
        // contrastText: will be calculated to contrast with palette.primary.main
      },
      secondary: {
        light: '#0066ff',
        main: '#0044ff',
        // dark: will be calculated from palette.secondary.main,
        contrastText: '#ffcc00',
      },
      // Used by `getContrastText()` to maximize the contrast between
      // the background and the text.
      tonalOffset: 0.2,
    },

	root: {
    palette: {
      primary: {
        main: '#961229',
        contrastText: '#fff',
      },
      secondary: {
        main: '#51514b',
        contrastText: '#fff',
      },
    },
		
		// backgroundImage: `url(${logo})`,
		// backgroundRepeat: 'no-repeat',
		// backgroundSize: 'cover',
		// backgroundPosition: 'center',
		// height: '100vh',
    
	},
	container: {	
		
		   
		// opacity: '0.1',
		height: '100%',
   		// marginTop: theme.spacing(20),
     	[theme.breakpoints.down(400 + theme.spacing(2) + 2)]: {
			marginTop: 0,
			width: '100%',
			height: '100%'
		},
	},
	div: {
		display: 'flex',
		flexDirection: 'column',
		backgroundImage: `url(${logo})`,
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'contain',
		marginTop: theme.spacing(20)
		// height: '50vh',
		
    //  	[theme.breakpoints.down(400 + theme.spacing(2) + 2)]: {
	// 		marginTop: 0,
	// 		width: '100%',
	// 		height: '100%'
	// },
	// avatar: {
	// 	margin: theme.spacing(1),
	// 	backgroundColor: theme.palette.primary.main
	},	
	form: {
		
				
    	// marginleft: theme.spacing(5),
		width: '100%',
		marginTop: theme.spacing(40)
	},
	button: {
		margin: theme.spacing(3, 0, 2)
	}
}));

const App = () => {
	const [body, setBody] = useState({ nickname: '', password: '' })
	const classes = useStyles()


	const handleChange = e => {
		setBody({
			...body,
			[e.target.name]: e.target.value
		})
	}

	const onSubmit = () => {
		console.log(body)
	}

	return (
		<Grid container component='main' className={classes.root}>
			<CssBaseline />
			<Container component={Paper} elevation={0} maxWidth='xs' className={classes.container}>
				<div className={classes.div}>
					{/* <Avatar className={classes.avatar}>
						<LockOutlinedIcon />
					{/* </Avatar> */}
				{/* <Typography component='h1' variant='h5'>Sign In</Typography>	 */} 

				
					<form className={classes.form}>
						<TextField
							fullWidth
							autoFocus
							color='palette.secondary.dark'
							margin='normal'
							variant='outlined'
							label='Usuario'
							name='nickname'
							value={body.nickname}
							onChange={handleChange}
						/>
						<TextField
							fullWidth
							type='password'
							color='palette.secondary.dark'
							margin='normal'
							variant='outlined'
							label='Contraseñ a'
							name='password'
							value={body.password}
							onChange={handleChange}
						/>
						<Button
							fullWidth
							variant='contained'
							color='dark'
							className={classes.button}
							onClick={() => onSubmit()}
						>
							Sign In
						</Button>
					</form>
				</div>
			</Container>
		</Grid>
	)
}

export default App
