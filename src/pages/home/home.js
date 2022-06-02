import { Stack } from "@mui/material";
import Banner from "./components/banner";
import Counter from "./components/counter";
import Sponsors from "./components/sponsors";

export default function Home() {
	return (
		<Stack width="100%" direction="column" spacing={4}>
			<Banner />
			<Counter />
			<Sponsors />
		</Stack>
	)
}
