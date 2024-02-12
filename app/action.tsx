'use server'

import { AnimeProp, Card } from "@/components/Card"

export const  fetchAnime = async (page: number) => {
	const response = 
		await fetch(
			`https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`
		)

	const data = await response.json()

	return data.map((item: AnimeProp, idx: number) => (
		<Card
			key={idx} 
			anime={item}
			index={idx}
		/>
	))
}