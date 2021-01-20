import React from "react";
import "./projectStyle.css";
import Pexels from "../../images/pexels-negative-space-160107.jpg";

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
									backgroundImage: `url(${Pexels})`,
								}}
							>
								<div className="desc">
									<div className="con">
										<h3>
											<a href="work.html">Shelf Keeper</a>
										</h3>
										<span>Web Application</span>
										<p className="icon">
											<span>
												<a href="#">
													<i className="icon-share3" />
													View Project
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
									backgroundImage: `url(${Pexels})`,
								}}
							>
								<div className="desc">
									<div className="con">
										<h3>
											<a href="work.html">Road Trip Planner</a>
										</h3>
										<span>Web Application</span>
										<p className="icon">
											<span>
												<a href="#">
													<i className="icon-share3" />
													View Project
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
									backgroundImage: `url(${Pexels})`,
								}}
							>
								<div className="desc">
									<div className="con">
										<h3>
											<a href="work.html">Google Book Search</a>
										</h3>
										<span>Illustration</span>
										<p className="icon">
											<span>
												<a href="#">
													<i className="icon-share3" />
													View Project
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
