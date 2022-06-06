import { Button, Grid, Stack, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import useNews from "../../../../hooks/useNews";

import CardArticle from "./cardArticle";
import More from "./more";

export default function News() {

	const { news, loading } = useNews()

	return (
		<Container>
			<Grid direction="row" container alignItems="flex-start" spacing={5}>
				<Grid item md={3}>
					<Stack direction="column"
						justifyContent="space-between"
						spacing={3}
						flexWrap="wrap"
					>
						<Typography variant="h4" fontWeight="bold">
							NOTICIAS
						</Typography>
						<Typography variant="subtitle1" >
							Entrevistas, noticias y reportajes de la Copa Mundial de la FIFA Catar 2022™.
						</Typography>
						<Typography variant="button">Lee todas las noticias de Catar 2022</Typography>
					</Stack>
				</Grid>
				<Grid item md={9}>
					<Grid container
						direction="row"
						spacing={3}
					>
						<Grid item md={6}>
							<CardArticle item={news[0]} />
						</Grid>
						<Grid item md={6}>
							<CardArticle item={news[1]} />
						</Grid>
						<Grid item md={4}>
							<CardArticle item={news[2]} />
						</Grid>
						<Grid item md={4}>
							<CardArticle item={news[3]} />
						</Grid>
						<Grid item md={4}>
							<CardArticle item={news[4]} />
						</Grid>
					</Grid>
					<More />
				</Grid>
			</Grid>
		</Container>
	)
}
