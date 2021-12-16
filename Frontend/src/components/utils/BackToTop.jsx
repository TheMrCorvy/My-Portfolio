import React, { useEffect, useState } from "react"
import { Button } from "reactstrap"

const BackToTop = () => {
	const [visible, setVisible] = useState(false)

	useEffect(() => {
		document.addEventListener("scroll", () => {
			if (window.scrollY >= 1000) {
				setVisible(true)
			} else {
				setVisible(false)
			}
		})
	}, [])

	const scrollUp = () => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth",
		})
	}

	return (
		<Button
			color="warning"
			style={{
				position: "fixed",
				bottom: visible ? "1rem" : "-5rem",
				right: "1rem",
				zIndex: 40000,
				transition: "0.5s",
			}}
			className="btn-round"
			onClick={scrollUp}
		>
			<i className="tim-icons icon-double-left" style={{ transform: "rotate(90deg)" }}></i>
		</Button>
	)
}

export default BackToTop
