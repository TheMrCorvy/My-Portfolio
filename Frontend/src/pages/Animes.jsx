import React, { useEffect, useState } from "react"

import { Row, Container, Alert, Col } from "reactstrap"

import ListAnimes from "../components/sections/animes/ListAnimes"
import Pagination from "../components/sections/animes/Pagination"
import SetOrder from "../components/sections/animes/SetOrder"
import BreadCrumbs from "../components/utils/BreadCrumbs"
import useApi from "../hooks/useApi"

const Animes = () => {
	const [animeList, setAnimeList] = useState([])
	const [isAuthorized, setIsuthorzed] = useState(false)
	const [options, setOptions] = useState({
		order: "DESC",
		sortBy: "position",
	})

	const [paginationOptions, setPaginationOptions] = useState({
		currentPage: 1,
		prevPage: null,
		nextPage: 2,
		totalPages: null,
	})

	const callApi = useApi

	useEffect(() => {
		if (localStorage.getItem("token")) {
			setIsuthorzed(true)
		}
		getAnimes(options.order, paginationOptions.currentPage)
	}, [])

	const getAnimes = (order, page) => {
		const req = {
			method: "GET",
			endpoint: `/animes/${options.sortBy}/${order}?page=${page}`,
		}

		callApi(req).then((data) => {
			setAnimeList(data.animes.docs)

			setPaginationOptions({
				...paginationOptions,
				currentPage: data.animes.page,
				prevPage: data.animes.prevPage,
				nextPage: data.animes.nextPage,
				totalPages: data.animes.totalPages,
			})
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

		getAnimes(oldOrder === "DESC" ? "ASC" : "DESC", paginationOptions.currentPage)
	}

	const updatePage = (newPage) => {
		setAnimeList([])

		getAnimes(options.order, newPage)
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

			<Container className="pb-5 mb-5">
				{animeList.length !== 0 && (
					<Pagination options={paginationOptions} updatePage={updatePage} />
				)}

				<Row className="justify-content-center">
					{animeList.length !== 0 ? (
						<ListAnimes isAuthorized={isAuthorized} animes={animeList} />
					) : (
						<Col xs="12" md="6" lg="4">
							<Alert color="danger">Now loading... Please wait...</Alert>
						</Col>
					)}
				</Row>

				{animeList.length !== 0 && (
					<Pagination options={paginationOptions} updatePage={updatePage} />
				)}
			</Container>
		</>
	)
}

export default Animes
