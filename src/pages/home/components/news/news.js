import { Button, Grid, Stack, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { useState } from "react";
import NewsService from "../../../../services/newsService";
import Item from "./item";

export default function News() {

	const newsService = new NewsService()
	const newsAux = []
	const [news, setNews] = useState([])

	newsService.getAll().then(response => {

		response.forEach((doc) => {
			const item = {
				...doc.data()
			}
			newsAux.push(item)
		})
		setNews(newsAux)
	})

	return (
		<Container>


			<Grid container spacing={4}
				direction="row"
				alignItems="flex-start"
			>
				<Grid item md={2}>
					<Stack direction="column" spacing={3}>
						<Typography variant="h4" fontWeight="bold">
							NOTICIAS
						</Typography>
						<Typography variant="subtitle1" >
							Entrevistas, noticias y reportajes de la Copa Mundial de la FIFA Catar 2022™.
						</Typography>
						<Typography variant="button">Lee todas las noticias de Catar 2022</Typography>

					</Stack>
				</Grid>

				{news.map((item, i) =>
					<Grid item md={5}>
						<Item key={i} item={item} />
					</Grid>
				)}


			</Grid>
		</Container>
	)
}
