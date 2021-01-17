import React from "react";

function Introduction(props) {
	return (
		<div>
			<section id="colorlib-hero" className="js-fullheight" data-section="home">
				<div className="flexslider js-fullheight">
					<ul className="slides">
						<li style={{ backgroundImage: "url(images/profile_pic1.jpg)" }}>
							<div className="overlay" />
							<div className="container-fluid">
								<div className="row">
									<div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
										<div className="slider-text-inner js-fullheight">
											<div className="desc">
												<h1>
													Hi! <br />
													I'm Spencer
												</h1>
												<p>
													<a
														className="btn btn-primary btn-learn"
														href="https://docs.google.com/document/d/1qY_GJljkE0_EqfIFMCPQ6QKog0C8BlxYv3BVVnpDvOE/edit?usp=sharing"
														target="_blank"
														rel="noopener noreferrer"
													>
														View Resume
														<i className="icon-download4" />
													</a>
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</li>
						<li style={{ backgroundImage: "url(images/profile_pic1.jpg)" }}>
							<div className="overlay" />
							<div className="container-fluid">
								<div className="row">
									<div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
										<div className="slider-text-inner">
											<div className="desc">
												<h1>
													I love building
													<br /> Projects !!
												</h1>
												<p>
													<a
														className="btn btn-primary btn-learn"
														href="https://github.com/spencer-alan"
														target="_blank"
														rel="noopener noreferrer"
													>
														View Projects <i className="icon-briefcase3" />
													</a>
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</section>
		</div>
	);
}

export default Introduction;