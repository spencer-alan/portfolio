import React from "react";
import "./projectStyle.css";
import ShelfKeeper from "../../images/shelf-keeper-home.png";
import RoadTrip from "../../images/roadtrip-planner-home.png";
import GoogleBook from "../../images/google-react-screenshot.png";

function Projects() {
	return (
		<div>
			<section id="projects" className="work" data-section="projects">
				<div className="narrow-content">
					<div className="row">
						<div className="col-md-6 col-md-offset-3 col-md-pull-3">
							<span className="heading-meta">My Work</span>
							<h2 className="heading">Recent Projects</h2>
						</div>
					</div>
					<div className="row">
						<div className="col-md-4">
							<div
								className="project"
								style={{
									backgroundImage: `url(${ShelfKeeper})`,
								}}
							>
								<div className="desc">
									<div className="con">
										<h3>
											<a
												href="https://shelf-keeper.herokuapp.com/"
												target="_blank"
												rel="noopener noreferrer"
											>
												Shelf Keeper
											</a>
										</h3>
										<span>Web Application</span>
										<span classname="projectDesc">
											This is a React item management application for
											businesses. It uses a jsonwebtoken to authenticate users
											for secure access to the site, and uses MongoDB as the
											information storage, Express for the server, and Node.js
											as the architecture.
										</span>
										<p className="icon">
											<span>
												<a
													href="https://github.com/spencer-alan/project-3"
													target="_blank"
													rel="noopener noreferrer"
												>
													View Github
												</a>
											</span>
											{/* <span>
												<a href="#">
													<i className="icon-eye" /> 100
												</a>
											</span>
											<span>
												<a href="#">
													<i className="icon-heart" /> 49
												</a>
											</span> */}
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div
								className="project"
								style={{
									backgroundImage: `url(${RoadTrip})`,
								}}
							>
								<div className="desc">
									<div className="con">
										<h3>
											<a
												href="https://calm-hamlet-11643.herokuapp.com/"
												target="_blank"
												rel="noopener noreferrer"
											>
												Road Trip Planner
											</a>
										</h3>
										<span>Web Application</span>
										<span classname="projectDesc">
											This is a Javascript based web application that allows
											users to make notes for places they have travelled to. It
											uses MongoDB to keep track of the notes made by users and
											uses REST API with the full CRUD operations for note
											taking.
										</span>
										<p className="icon">
											<span>
												<a
													href="https://github.com/spencer-alan/project-2"
													target="_blank"
													rel="noopener noreferrer"
												>
													View Github
												</a>
											</span>
											{/* <span>
												<a href="#">
													<i className="icon-eye" /> 100
												</a>
											</span>
											<span>
												<a href="#">
													<i className="icon-heart" /> 49
												</a>
											</span> */}
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div
								className="project"
								style={{
									backgroundImage: `url(${GoogleBook})`,
								}}
							>
								<div className="desc">
									<div className="con">
										<h3>
											<a
												href="https://github.com/spencer-alan/google-books-search"
												target="_blank"
												rel="noopener noreferrer"
											>
												Google Book Search
											</a>
										</h3>
										<span>Illustration</span>
										<p className="icon">
											<span>
												<a
													href="https://react-books-googleapi.herokuapp.com/"
													target="_blank"
													rel="noopener noreferrer"
												>
													View Github
												</a>
											</span>
											{/* <span>
												<a href="#">
													<i className="icon-eye" /> 100
												</a>
											</span>
											<span>
												<a href="#">
													<i className="icon-heart" /> 49
												</a>
											</span> */}
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* <div className="row">
						<div className="col-md-12">
							<p>
								<a href="#" className="btn btn-primary btn-lg btn-load-more">
									Load more <i className="icon-reload" />
								</a>
							</p>
						</div>
					</div> */}
				</div>
			</section>
		</div>
	);
}

export default Projects;
