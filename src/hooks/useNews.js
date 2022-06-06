import { useEffect, useState } from "react";
import NewsService from "../services/newsService";

export default function useNews() {

	const newsService = new NewsService()
	const newsAux = []
	const [news, setNews] = useState([])
	const [loading, setloading] = useState(true)

	useEffect(() => {
		newsService.getAll().then(response => {

			response.forEach((doc) => {
				const item = {
					...doc.data()
				}
				newsAux.push(item)
			})
			setNews(newsAux)
			setloading(false)
		})
	}, [])

	return { news, loading }
}