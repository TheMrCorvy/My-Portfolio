import React from "react"

import {
	Pagination as ReactstrapPagination,
	PaginationItem,
	PaginationLink,
	Container,
	Row,
} from "reactstrap"

import classnames from "classnames"

const Pagination = ({ options, updatePage }) => {
	const handlePageChange = (e, newPage) => {
		e.preventDefault()
		if (newPage === 0 || newPage > options.totalPages) return

		updatePage(newPage)
	}

	return (
		<Container>
			<Row className="justify-content-center">
				<ReactstrapPagination
					className="pagination pagination-info"
					listClassName="pagination-info"
				>
					<PaginationItem>
						<PaginationLink
							aria-label="Previous"
							href="#pablo"
							onClick={(e) => handlePageChange(e, options.currentPage - 1)}
						>
							<span aria-hidden={true}>
								<i aria-hidden={true} className="tim-icons icon-double-left" />
							</span>
						</PaginationLink>
					</PaginationItem>

					{[...Array(options.totalPages)].map((page, index) => (
						<PaginationItem
							className={classnames({
								"active show": options.currentPage === index + 1,
							})}
							onClick={(e) => handlePageChange(e, index + 1)}
							key={index}
						>
							<PaginationLink>{index + 1}</PaginationLink>
						</PaginationItem>
					))}

					<PaginationItem>
						<PaginationLink
							aria-label="Next"
							href="#pablo"
							onClick={(e) => handlePageChange(e, options.currentPage + 1)}
						>
							<span aria-hidden={true}>
								<i aria-hidden={true} className="tim-icons icon-double-right" />
							</span>
						</PaginationLink>
					</PaginationItem>
				</ReactstrapPagination>
			</Row>
		</Container>
	)
}

export default Pagination
