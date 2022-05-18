import React, { useState } from 'react'
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

const Login = () => {
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

export default Login;
