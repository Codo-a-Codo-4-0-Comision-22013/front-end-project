import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function Sponsors() {

	const logos = [
		"imgs/sponsors/adidas-logo.webp",

		"imgs/sponsors/cocacola-logo.webp",

		"imgs/sponsors/dalian-logo.webp",

		"imgs/sponsors/hyundai-logo.webp",
		"imgs/sponsors/visa_94x71.webp",

		"imgs/sponsors/webimage-fwc2022_fp_qatar-co_lbgr.png.webp",
		"imgs/sponsors/webimage-Vector-Qatar-Energy-logo.png.webp"
	]

	const patrocinadores = [
		"imgs/sponsors/webimage-fwc2022_sp_Budweiser_co_lbgr.png.webp",
		"imgs/sponsors/webimage-fwc2022_sp_Hisense_co_lbgr.png.webp",
		"imgs/sponsors/Byjus-logo.webp",
		"imgs/sponsors/Crypto-com-logo.webp",
		"imgs/sponsors/fwc2022_sp_Mengniu_co_lbgr.webp",
		"imgs/sponsors/webimage-Adobe-Illustrator-Artwork.png.webp",
	]

	return (
		<Stack direction="column" alignItems="center" >

			<Typography variant="h5" fontWeight="bold" mb={2}> FIFA SOCIOS </Typography>
			<Stack
				direction="row"
				justifyContent="center"
				alignItems="center"
				spacing={9}
				flexWrap="wrap"
				mb={8}
			>
				{logos.map((logo, i) =>
					<Box key={i}>
						<img src={logo} />
					</Box>
				)}

			</Stack>
			<Typography variant="h5" fontWeight="bold" mb={3}>COPA MUNDIAL DE LA FIFA™ PATROCINADORES</Typography>
			<Stack
				direction="row"
				justifyContent="center"
				alignItems="center"
				spacing={9}
				flexWrap="wrap"
			>
				{patrocinadores.map((p, i) =>
					<Box key={i}>
						<img src={p} />
					</Box>
				)}

			</Stack>


		</Stack>
	)
}
