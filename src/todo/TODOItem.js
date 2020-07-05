import React, { Component } from "react";

class TODOItem extends Component {
	state = {};
	render() {
		const tableRows = this.props.todoList.map((item) => (
			<tr>
				<td>{item}</td>
			</tr>
		));
		return tableRows;
	}
}

export default TODOItem;
