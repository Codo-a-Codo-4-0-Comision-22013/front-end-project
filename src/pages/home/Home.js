import { Stack } from "@mui/material";
import Banner from "./components/banner/Banner";
import Sponsors from "./components/Sponsors";

export default function Home() {
	return (
		<Stack width="100%" direction="column" spacing={4}>
			<Banner />
			<Sponsors />
		</Stack>
	)
}
