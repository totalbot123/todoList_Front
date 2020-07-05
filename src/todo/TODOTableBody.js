import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import "./TODOTable.css";

class TODOTableBody extends Component {
	state = {
		inputChange: ""
	};

	render() {
		const removeTODO = this.props.functionSet.removeTODO;
		const editTODO = this.props.functionSet.editTODO;
		const showModal = this.props.functionSet.showTODO;
		let todoItemList = this.props.todoList.map((item, index) => (
			<tr key={index}>
				<td className="small-column">{index + 1}</td>
				<td>
					{item.quest}
					<Button className="float-right" variant="danger" size="sm" onClick={() => removeTODO(item.id)}>
						Remove
					</Button>
					<Button
						className="float-right"
						variant="success"
						size="sm"
						onClick={() => {
							let modalConfig = {
								submitAction: editTODO,
								TODOItem: {
									id: item.id,
									quest: item.quest,
									tabId: item.tabId
								}
							};
							showModal("Edit", modalConfig);
						}}
					>
						Edit
					</Button>
				</td>
			</tr>
		));
		return <tbody>{todoItemList}</tbody>;
	}
}

export default TODOTableBody;
