import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/sidebar.js";
import About from "./components/About/about.js";
import Introduction from "./components/Introduction/introduction.js";
import Projects from "./components/Projects/projects.js";

function App() {
	return (
		<div id="colorlib-page" className="App">
			<div className="container-wrap">
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
