import React from "react";

function About() {
	return (
		<div>
			<section className="about" data-section="about">
				<div className="narrow-content">
					<div className="row">
						<div className="col-md-12">
							<div
								className="row row-bottom-padded-sm"
								// data-animate-effect="fadeInLeft"
							>
								<div className="col-md-12">
									<div className="about-desc">
										<span className="heading-meta">About Me</span>
										<h2 className="heading">Who Am I?</h2>
										<p>
											I am a full stack web developer with public relations
											education and a certificate in full stack development from
											University of California Irvine, with an understanding of
											Javascript, CSS, Node.js, MySQL, Express, MongoDB, and
											React while still looking to expand my knowledge base.
											Recently, I developed an inventory management application
											with four other team members and implemented the database
											functionality, authentication of users, and version
											control on github. I am looking forward to being a driven
											member of a quality first team that can provide user
											approved web experiences.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="about">
				<div className="narrow-content">
					<div className="row">
						<div
							className="col-md-6 col-md-offset-3 col-md-pull-3"
							// data-animate-effect="fadeInLeft"
						>
							<span className="heading-meta">What I do?</span>
							<h2 className="heading">Here are some of my expertise</h2>
						</div>
					</div>
					<div className="row row-pt-md">
						<div className="col-md-4 text-center">
							<div className="services color-1">
								<span className="icon">
									<i className="icon-bulb" />
								</span>
								<div className="desc">
									<h3>Web Development </h3>
									<p>
										I have experience building websites and web applications
										using JavaScript, React, HTML, and CSS.
									</p>
								</div>
							</div>
						</div>
						<div className="col-md-4 text-center">
							<div className="services color-3">
								<span className="icon">
									<i className="icon-phone3" />
								</span>
								<div className="desc">
									<h3>Teamwork and Communication</h3>
									<p>
										With a Bachelor's Degree in Communications, I have a good
										understanding about working in a team and looking for what
										makes a good user experience.
									</p>
								</div>
							</div>
						</div>
						<div className="col-md-4 text-center">
							<div className="services color-5">
								<span className="icon">
									<i className="icon-data" />
								</span>
								<div className="desc">
									<h3>New Languages</h3>
									<p>
										I am continually learning new languages and am excited to
										try new things.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default About;
