import { Stack } from "@mui/material";
import Banner from "./components/banner";
import Counter from "./components/counter";
import News from "./components/news/news";
import Sponsors from "./components/sponsors";

export default function Home() {
	return (
		<Stack width="100%" direction="column" spacing={4} alignItems="center">
			<Banner />
			<Counter />
			<News />
			<Sponsors />

		</Stack>
	)
}
