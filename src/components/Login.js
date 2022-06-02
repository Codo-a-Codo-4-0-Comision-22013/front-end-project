import React, { useState } from 'react'
import { Grid, Container, Paper, TextField, Button, CssBaseline } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import logo from '../assets/images/qatar-world-cup-2022-2.jpg'
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { Alert } from "./alert";



const useStyles = makeStyles(theme => ({

	palette: {
		primary: {
			// light: will be calculated from palette.primary.main,
			main: 'red',
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

	},
	

	form: {
		
		
		// marginleft: theme.spacing(5),
		width: '100%',
		marginTop: theme.spacing(40)
	},
		button: {
		margin: theme.spacing(2.5, 0, 0)
	},

	p: {
		marginTop: theme.spacing(40),
		marginBottom: theme.spacing(3, 0, 2),

		fontSize: '0.75rem',
		textAlign: 'center'
	},

	register: {
		marginTop: theme.spacing(3, 0, 2),
		textAlign: 'center',
		padding: '30px 0 0 0',
	},

}));



export function Login() {
	const [user, setUser] = useState({
		email: "",
		password: "",
	});

	const { login, loginWithGoogle, resetPassword } = useAuth();

	const [error, setError] = useState("");

	const navigate = useNavigate();

	const classes = useStyles();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");
		try {
			await login(user.email, user.password);
			navigate("/");
		} catch (error) {
			setError(error.message);
		}
	};

	const handleChange = ({ target: { value, name } }) =>
		setUser({ ...user, [name]: value });

	const handleGoogleSignin = async () => {
		try {
			await loginWithGoogle();
			navigate("/");
		} catch (error) {
			setError(error.message);
		}
	};

	// const handleResetPassword = async (e) => {
	// 	e.preventDefault();
	// 	if (!user.email) return setError("Write an email to reset password");
	// 	try {
	// 	await resetPassword(user.email);
	// 	setError('We sent you an email. Check your inbox')
	// 	} catch (error) {
	// 	setError(error.message);
	// 	}
	// };

	return (
<<<<<<< HEAD
		<Grid container component='main' className={classes.root}>
			<CssBaseline />
			<Container component={Paper} elevation={0} maxWidth='xs' className={classes.container}>
				<div className={classes.div}>

					{error && <Alert message={error} />}

					<form className={classes.form} >

						<TextField
							fullWidth
							autoFocus
							color='palette.primary.dark'
							margin='normal'
							variant='outlined'
							label='Email'
							name='email'
							value={user.email}
							onChange={handleChange}
						/>
						<TextField
							fullWidth
							type='password'
							color='palette.primary.dark'
							margin='normal'
							variant='outlined'
							label='Contraseñ a'
							name='password'
							value={user.password}
							onChange={handleChange}
						/>
						<Button
							fullWidth
							variant='contained'
							color='dark'
							className={classes.button}
							type='submit'
							// onClick={() => onSubmit()}
							onClick={handleSubmit}
						>
							Ingresar
						</Button>
						{/* <a
           				 className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
           				 href="#!"
            				onClick={handleResetPassword}
         				>
          				  Forgot Password?
         				</a> */}

						<Button
							fullWidth
							variant='contained'
							color='dark'
							className={classes.button}
							type='submit'
							onClick={handleGoogleSignin}
						>
							Registro con Google
						</Button>


						<p
							fullWidth
							className={classes.register}
						>
							No tiene cuenta?
							<Link to="/register"
							>
								Registrese
							</Link>
						</p>


					</form>
				</div>
			</Container>
		</Grid>
	);
=======
		
			<Grid container component='main' className={classes.root}>
				<CssBaseline />
				<Container component={Paper} elevation={0} maxWidth='xs' className={classes.container}>
					<div className={classes.div}>

						{error && <Alert message={error} />}

						<form className={classes.form} >

							<TextField
								fullWidth
								autoFocus
								margin='normal'
								variant='outlined'
								label='Email'
								name='email'
								value={user.email}
								onChange={handleChange}
							/>
							<TextField
								fullWidth
								type='password'
								margin='normal'
								variant='outlined'
								label='Contraseñ a'
								name='password'
								value={user.password}
								onChange={handleChange}
							/>
							<Button
								fullWidth
								variant='contained'
								color='dark'
								className={classes.button}
								type='submit'
								// onClick={() => onSubmit()}
								onClick={handleSubmit}
							>
								Ingresar
							</Button>
							{/* <a
							className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
							href="#!"
								onClick={handleResetPassword}
							>
							Forgot Password?
							</a> */}
							
							<Button
								fullWidth
								variant='contained'
								color='dark'
								className={classes.button}
								type='submit'
								onClick={handleGoogleSignin}
							>
								Registro con Google
							</Button>
							
							
								<p 
									fullWidth
									className={classes.register}
									>
									No tiene cuenta?  
									<Link to="/register"
									>
									Registrese
									</Link>
								</p>
							

						</form>
					</div>
				</Container>
			</Grid>
		
	);	
>>>>>>> origin/main
}

