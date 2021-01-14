import React from "react";
import "./App.css";
import Sidebar from "./components/sidebar.js";
import About from "./components/about.js";
import Introduction from "./components/introduction.js";
import Projects from "./components/projects.js";

function App() {
	return (
		<div id="colorlib-page" className="App">
			<div id="container-wrap">
				<Sidebar />
				<div id="colorlib-main">
					<Introduction />
					<About />
					<Projects />
				</div>
			</div>
		</div>
	);
}

export default App;
