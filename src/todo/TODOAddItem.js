import React, { Component } from "react";
import Button from "react-bootstrap/Button";

class TODOAddItem extends Component {
	render() {
		return (
			<Button
				className={this.props.className}
				variant="primary"
				onClick={() => {
					let modalConfig = {
						TODOItem: {
							quest: "",
							tabId: this.props.tabId
						},
						submitAction: this.props.addTODO
					};
					this.props.showModal("Add", modalConfig);
				}}
			>
				Add TODO Item
			</Button>
		);
	}
}

export default TODOAddItem;
