import { Stack, Typography } from "@mui/material";
import { useState } from "react";

export default function Counter() {

	const [timer, setTimer] = useState({})

	let countDown = new Date("2022-11-21").getTime()

	var x = setInterval(function () {

		// Get today's date and time
		var now = new Date().getTime();

		// Find the distance between now and the count down date
		var distance = countDown - now;

		// Time calculations for days, hours, minutes and seconds
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);
		setTimer({ days, hours, minutes, seconds })
	}, 1000);
	return (
		<Stack pb={8} direction="row" alignItems="center" spacing={3} justifyContent="center" >
			<Typography fontWeight="bold" variant="h5" >EL TORNEO COMIENZA EN</Typography>
			<svg width="90" height="11" fill="none" xmlns="http://www.w3.org/2000/svg" class="ff-countdown-sponsored_icon__xy0PN"><path d="M83.152 5.5l3.424 3.422L90 5.5l-3.424-3.422L83.152 5.5zm-20.788 0l3.913 3.911L70.19 5.5l-3.913-3.911L62.364 5.5zm-20.788 0l4.524 4.522L50.625 5.5 46.1.978 41.576 5.5zm-20.788 0l5.014 5.011L30.815 5.5 25.802.489 20.788 5.5zM0 5.5L5.503 11l5.502-5.5L5.503 0 0 5.5z" fill="#000F2C"></path></svg>
			<Stack direction="row" alignItems="baseline">
				<Typography fontWeight="bold" variant="h3">{timer.days}</Typography>
				<Typography ml={2} fontWeight="bold" variant="h5">DÍAS</Typography>
			</Stack>
			<svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" class="ff-countdown-sponsored_icon__xy0PN"><path d="M13.6 5.689V2.4h-3.289L8 0 5.6 2.4H2.311v3.289L0 8l2.311 2.4v3.289H5.6L8 16l2.311-2.311H13.6V10.4L16 8l-2.4-2.311z" fill="#000F2C"></path></svg>
			<Stack direction="row" alignItems="baseline">
				<Typography fontWeight="bold" variant="h3">{timer.hours}</Typography>
				<Typography ml={2} fontWeight="bold" variant="h5">HORAS</Typography>
			</Stack>
			<svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" class="ff-countdown-sponsored_icon__xy0PN"><path d="M13.6 5.689V2.4h-3.289L8 0 5.6 2.4H2.311v3.289L0 8l2.311 2.4v3.289H5.6L8 16l2.311-2.311H13.6V10.4L16 8l-2.4-2.311z" fill="#000F2C"></path></svg>
			<Stack direction="row" alignItems="baseline">
				<Typography fontWeight="bold" variant="h3">{timer.minutes}</Typography>
				<Typography ml={2} fontWeight="bold" variant="h5">MINUTOS</Typography>
			</Stack>
			<svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" class="ff-countdown-sponsored_icon__xy0PN"><path d="M13.6 5.689V2.4h-3.289L8 0 5.6 2.4H2.311v3.289L0 8l2.311 2.4v3.289H5.6L8 16l2.311-2.311H13.6V10.4L16 8l-2.4-2.311z" fill="#000F2C"></path></svg>
			<Stack direction="row" alignItems="baseline">
				<Typography fontWeight="bold" variant="h3">{timer.seconds}</Typography>
				<Typography ml={2} fontWeight="bold" variant="h5">SEGUNDOS</Typography>
			</Stack>
		</Stack>
	)
}
