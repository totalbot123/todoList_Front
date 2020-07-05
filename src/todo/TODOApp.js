import React, { Component } from "react";

import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import TODOList from "./TODOList.js";

class TODOApp extends Component {
	render() {
		return (
			<Tabs defaultActiveKey="learn" id="uncontrolled-tabId-example">
				<Tab eventKey="learn" title="TO Learn">
					<TODOList tabId="0" />
				</Tab>
				<Tab eventKey="custom" title="Custom">
					<TODOList tabId="1" />
				</Tab>
				<Tab eventKey="projects" title="TODO Projects">
					<TODOList tabId="2" />
				</Tab>
				<Tab eventKey="current" title="TODO Current Project">
					<TODOList tabId="3" />
				</Tab>
			</Tabs>
		);
	}
}

export default TODOApp;
