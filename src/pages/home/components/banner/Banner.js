import { Container, Stack, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import { Box } from "@mui/system";
import CounterBanner from "./CounterBanner";

export default function Banner() {
	return (
		<ContainerBanner>
			<img src="imgs/Banner.jpg" width="100%" height="400px" />
			<TextBanner top="70px" variant="h5">21 de noviembre - 17 de diciembre</TextBanner>
			<TextBanner top="110px" variant="h1">Copa Mundial de la FIFA Catar 2022™</TextBanner>
			<CounterLayout>
				<CounterBanner />
			</CounterLayout>
		</ContainerBanner >

	)
}

const TextBanner = styled(Typography)({
	position: "absolute",
	left: "30px",
});

const ContainerBanner = styled('div')({
	color: 'white',
	width: "100%",
	position: "relative",
	display: "inline-block"
});

const CounterLayout = styled('div')({
	position: 'absolute',
	top: '60%',
	left: '55%',
	transform: 'translate(-50 %, -50 %)'
});

