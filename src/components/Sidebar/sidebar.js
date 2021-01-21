import React from "react";
import "./sidebarStyle.css";
import Profile from "../../images/profile_pic1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGithub,
	faTwitter,
	faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

function Sidebar() {
	return (
		<div>
			<div>
				<nav
					href="#navbar"
					className="nav-toggle nav-toggle"
					data-toggle="collapse"
					data-target="#navbar"
					aria-controls="navbar"
				>
					<i />
				</nav>
				<aside id="aside" className="border fullheight">
					<div className="text-center">
						<div
							className="author-img"
							style={{ backgroundImage: `url(${Profile})` }}
						/>
						<h1 id="logo">
							<a href="index.html">Spencer Smith</a>
						</h1>
						<span className="email">
							<FontAwesomeIcon icon={faEnvelope} />
							smith.spence13@gmail.com
						</span>
					</div>
					<nav id="main-menu" role="navigation" className="navbar">
						<div id="navbar" className="collapse">
							<ul>
								<li className="active">
									<a href="#home" data-nav-section="home">
										Introduction
									</a>
								</li>
								<li>
									<a href="#about" data-nav-section="about">
										About
									</a>
								</li>
								<li>
									<a href="#projects" data-nav-section="projects">
										Projects
									</a>
								</li>
								{/* <li>
									<a href="#" data-nav-section="blog">
										Blog
									</a>
								</li> */}
								{/* <li>
									<a href="#timeline" data-nav-section="timeline">
										Timeline
									</a>
								</li> */}
							</ul>
						</div>
					</nav>
					<nav className="clearfix">
						<div className="center">
							<ul id="social-menu">
								<li>
									<a
										href="https://twitter.com/b1acksmyth"
										target="_blank"
										rel="noopener noreferrer"
									>
										<FontAwesomeIcon icon={faTwitter} />
									</a>
								</li>
								<li>
									<a
										href="https://www.linkedin.com/in/spencer-smith-7b68461a6/"
										target="_blank"
										rel="noopener noreferrer"
									>
										<FontAwesomeIcon icon={faLinkedin} />
									</a>
								</li>
								<li>
									<a
										href="https://github.com/spencer-alan"
										target="_blank"
										rel="noopener noreferrer"
									>
										<FontAwesomeIcon icon={faGithub} />
									</a>
								</li>
							</ul>
						</div>
					</nav>
					<div className="footer">
						<p>
							<small>Something coming soon !!</small>
						</p>
					</div>
				</aside>
			</div>
		</div>
	);
}

export default Sidebar;
