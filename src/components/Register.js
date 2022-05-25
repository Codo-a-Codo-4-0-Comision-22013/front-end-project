import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Alert } from "./Alert";
import { Grid, Container, Paper, TextField, Button, CssBaseline } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import logo from '../assets/images/qatar-world-cup-2022-2.jpg'

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
		margin: theme.spacing(3, 0, 2)
	}
}));


export function Register() {
  const { signup } = useAuth();

  const classes = useStyles();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signup(user.email, user.password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  // return (
  //   <div className="w-full max-w-xs m-auto text-black">
  //     {error && <Alert message={error} />}

  //     <form
  //       onSubmit={handleSubmit}
  //       className="bg-white shadow-md rounded px-8 pt-6 pb-6 mb-4"
  //     >
  //       <div className="mb-4">
  //         <label
  //           htmlFor="email"
  //           className="block text-gray-700 text-sm font-bold mb-2"
  //         >
  //           Email
  //         </label>
  //         <input
  //           type="email"
  //           onChange={(e) => setUser({ ...user, email: e.target.value })}
  //           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  //           placeholder="youremail@company.tld"
  //         />
  //       </div>

  //       <div className="mb-4">
  //         <label
  //           htmlFor="password"
  //           className="block text-gray-700 text-sm font-bold mb-2"
  //         >
  //           Password
  //         </label>
  //         <input
  //           type="password"
  //           onChange={(e) => setUser({ ...user, password: e.target.value })}
  //           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  //           placeholder="*************"
  //         />
  //       </div>

  //       <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
  //         Register
  //       </button>
  //     </form>
  //     <p className="my-4 text-sm flex justify-between px-3">
  //       Already have an Account?
  //       <Link to="/login" className="text-blue-700 hover:text-blue-900">
  //         Login
  //       </Link>
  //     </p>
  //   </div>
  // );
  return (
		<Grid container component='main' className={classes.root}>
			<CssBaseline />
			<Container component={Paper} elevation={0} maxWidth='xs' className={classes.container}>
				<div className={classes.div}>

					{error && <Alert message={error} />}

					<form className={classes.form} >

						<TextField
							fullWidth
							autoFocus
							color='palette.secondary.dark'
							margin='normal'
							variant='outlined'
							label='Email'
							name='email'
              type='email'
							value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
						/>
						<TextField
							fullWidth
							type='password'
							color='palette.secondary.dark'
							margin='normal'
							variant='outlined'
							label='Contraseñ a'
							name='password'
							value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
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
							Registrese
						</Button>
					           
					</form>
				</div>
			</Container>
		</Grid>
	);
}
