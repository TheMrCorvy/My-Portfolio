import React, { useEffect, useState } from "react"

import { Row, Container, Alert, Col } from "reactstrap"

import ListAnimes from "../components/sections/animes/ListAnimes"
import SetOrder from "../components/sections/animes/SetOrder"
import BreadCrumbs from "../components/utils/BreadCrumbs"
import useApi from "../hooks/useApi"

const Animes = () => {
	const [animeList, setAnimeList] = useState([])
	const [isAuthorized, setIsuthorzed] = useState(false)
	const [options, setOptions] = useState({
		order: "DESC",
		sortBy: "position",
		pagination: {
			currentPage: 1,
			prevPage: null,
			nextPage: 2,
			totalPages: null,
		},
	})

	const callApi = useApi

	useEffect(() => {
		if (localStorage.getItem("token")) {
			setIsuthorzed(true)
		}
		getAnimes()
	}, [])

	const getAnimes = () => {
		const req = {
			method: "GET",
			endpoint: `/animes/${options.sortBy}/${options.order}?page=${options.pagination.currentPage}`,
		}

		callApi(req).then((data) => {
			setAnimeList(data.animes.docs)

			console.log(options)

			// setOptions({
			// 	...options,
			// 	pagination: {
			// 		currentPage: data.animes.page,
			// 		prevPage: data.animes.prevPage,
			// 		nextPage: data.animes.nextPage,
			// 		totalPages: data.animes.totalPages,
			// 	},
			// })
		})
	}

	const toggleOrder = (oldOrder) => {
		if (oldOrder === "DESC") {
			setOptions({
				...options,
				order: "ASC",
			})
		} else {
			setOptions({
				...options,
				order: "DESC",
			})
		}

		setAnimeList([])

		getAnimes()
	}

	return (
		<>
			<BreadCrumbs
				title="Animes"
				steps={{
					"About Me": "about-me",
				}}
			/>

			<SetOrder order={options.order} updateOrder={toggleOrder}></SetOrder>

			<Container className="py-5 my-5">
				<Row className="justify-content-center">
					{animeList.length !== 0 ? (
						<ListAnimes isAuthorized={isAuthorized} animes={animeList} />
					) : (
						<Col xs="12" md="6" lg="4">
							<Alert color="danger">Now loading... Please wait...</Alert>
						</Col>
					)}
				</Row>
			</Container>
		</>
	)
}

export default Animes
