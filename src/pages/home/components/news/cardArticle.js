import { Stack, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";

export default function CardArticle({ item }) {

	return (
		item ?
			<Container disableGutters>
				<img style={{ borderTopLeftRadius: "6px", borderTopRightRadius: "6px" }} src={item.img} alt={item.title} />
				<Stack component={"span"} mx={2} direction="column" >
					<Typography variant="subtitle2" mt={2}>Copa Mundial de la FIFA Catar 2022™</Typography>
					<Typography variant="h6">{item.title}</Typography>
					<Typography variant="caption">{item.date}</Typography>
				</Stack>
			</Container>
			: null
	)
}