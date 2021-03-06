import React from "react"
import { Link } from "react-router-dom"
import { Container, Row, Col } from "reactstrap"

const MyDescrption = () => {
	return (
		<section className="section section-basic wrapper ">
			<Container>
				<Row className="row-grid justify-content-center">
					<Col xs="12">
						<div className="pl-md-5">
							<h1>How would I describe myself?</h1>
							<ul>
								<li className="mt-4">
									<p>
										I am a young programmer with a great ability to learn, and
										motivated by the curiosity to know how the things work.
									</p>
								</li>
								{/* <li className="mt-4">
									<p>
										I have been studying the languages of English and Japanese,
										more for fun than anything else. I{"'"}ve always been
										fascinated to find the similarities and differences between
										the languages.
									</p>
								</li> */}
								<li className="mt-4">
									<p>
										I have a very powerful imagination. I am always thinking of
										new creative ways to solve the problems.
									</p>
									<p>I am an expert thinking outside the box.</p>
								</li>
								<li className="mt-4">
									<p>
										I am a very patient and organized person. I always keep my
										desk clean and free of unnecessary things.
									</p>
								</li>
								{/* <li className="mt-4">
									<p>
										I am a big lover of cats, you may have noticed that by the
										image of my cat here aside.
									</p>
								</li> */}
								<li className="mt-4">
									<p>
										I could never fully describe myself without saying that I am
										a huge fan of
										<Link
											className="font-weight-bold text-info mt-5 mx-3"
											to="animes"
											onClick={() =>
												window.scrollTo({
													top: 0,
													left: 0,
												})
											}
										>
											Japanese Anime
										</Link>
										. That{"'"}s one of my favorite things in the world.
									</p>
								</li>
								{/* <li className="mt-4">
									<p>
										I am very passionate about the things that I am passionate
										about, be it something related to programming, or one of my
										hobbies, or whatever. I have to say that, the things that I
										like, I like them a lot.
									</p>
								</li> */}
							</ul>
						</div>
					</Col>
					{/* <Col
						style={{
							marginTop: "5vw",
						}}
						xs="6"
						sm="4"
						xl="3"
						id="leonard"
					>
						<img
							alt="an image of my cat"
							className="img-raised"
							src="/images/about-me/leonard.jpg"
						/>
					</Col> */}
				</Row>
			</Container>

			{/* <UncontrolledTooltip placement="top" target="leonard" delay={0}>
				You might think this is an image of God, but its actually my cat, Leonard
			</UncontrolledTooltip> */}
		</section>
	)
}

export default MyDescrption
