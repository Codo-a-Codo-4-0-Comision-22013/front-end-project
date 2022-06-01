import { Box, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { styled } from '@mui/material/styles';

export default function CounterBanner() {

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
		<Stack direction="row">
			<BoxTimer>
				<Typography variant="h4">{timer.days}</Typography>
				<Typography variant="caption">DAYS</Typography>
			</BoxTimer>
			<BoxTimer>
				<Typography variant="h4">{timer.hours}</Typography>
				<Typography variant="caption">HOURS</Typography>
			</BoxTimer>
			<BoxTimer>
				<Typography variant="h4">{timer.minutes}</Typography>
				<Typography variant="caption">MINUTES</Typography>
			</BoxTimer>
			<BoxTimer>
				<Typography variant="h4">{timer.seconds}</Typography>
				<Typography variant="caption"> SECONDS</Typography>
			</BoxTimer>
		</Stack>
	)
}

const BoxTimer = styled(Typography)({
	width: "70px",
	textAlign: "center"
});
