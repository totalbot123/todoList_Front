import React, { Component } from "react";
import "./TODOTable.css";

class TODOTableHeader extends Component {
	state = {};
	render() {
		return (
			<thead>
				<tr>
					<th className="small-column">#</th>
					<th>TODO Item</th>
				</tr>
			</thead>
		);
	}
}

export default TODOTableHeader;
