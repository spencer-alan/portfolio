import React from "react";
import "./introStyle.css";
import Carousel from "react-bootstrap/Carousel";
import Profile from "../../images/portfolio-pic-lake1.jpg";

function Introduction(props) {
	return (
		<div>
			<section id="home" class="hero" data-section="home">
				<Carousel indicators={false}>
					<Carousel.Item>
						<img className="d-block w-100" src={Profile} alt="Resume Slide" />
						<Carousel.Caption>
							<h3>
								Hi, <br /> my name is Spencer!
							</h3>
							<p>
								<a
									className="btn btn-primary btn-learn"
									href="https://docs.google.com/document/d/1qY_GJljkE0_EqfIFMCPQ6QKog0C8BlxYv3BVVnpDvOE/edit?usp=sharing"
									target="_blank"
									rel="noopener noreferrer"
								>
									View Resume
								</a>
							</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img className="d-block w-100" src={Profile} alt="Resume Slide" />
						<Carousel.Caption>
							<h3>Check out my latest projects here!</h3>
							<p>
								<a
									className="btn btn-primary btn-learn"
									href="https://github.com/spencer-alan"
									target="_blank"
									rel="noopener noreferrer"
								>
									Github Page
								</a>
							</p>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
			</section>
		</div>
	);
}

export default Introduction;
