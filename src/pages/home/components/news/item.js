import { Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function Item({ item }) {
	return (
		<Box>
			<img src={item.img} alt={item.title} />
			<Typography variant="h5">{item.title}</Typography>
			<Typography variant="caption">{item.date}</Typography>
		</Box>
	)
}