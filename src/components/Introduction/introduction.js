import React from "react";
import "./introStyle.css";
import Carousel from "react-bootstrap/Carousel";
import Profile from "../../images/profile_pic1.jpg";

function Introduction(props) {
	return (
		<div>
			<section id="hero" data-section="home">
				<Carousel>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src={{ Profile }}
							alt="Resume Slide"
						/>
						<Carousel.Caption>
							<h3>Hi, my name is Spencer!</h3>
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
						<img
							className="d-block w-100"
							src={{ Profile }}
							alt="Resume Slide"
						/>
						<Carousel.Caption>
							<h3>Hi, my name is Spencer!</h3>
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
				</Carousel>
			</section>
		</div>
	);
}

export default Introduction;
