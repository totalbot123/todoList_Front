import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import TODOTableHeader from "./TODOTableHeader.js";
import TODOTableBody from "./TODOTableBody.js";
import TODOModal from "./TODOModal.js";
import TODOAddItem from "./TODOAddItem.js";

class TODOTable extends Component {
	state = {
		showModal: false,
		modalConfig: {
			TODOItem: {
				id: -1,
				quest: "",
				tabId: -1
			},
			submitAction: () => {}
		}
	};

	showModal = (type = "Add", modalConfig) => {
		if (type === "Edit") {
			this.setState({ showModal: true });
		} else {
			this.setState({ showModal: true });
		}
		modalConfig = Object.assign({ hideModal: this.hideModal }, modalConfig);
		this.setState({ modalConfig: modalConfig });
	};

	hideModal = () => {
		this.setState({ showModal: false });
	};

	render() {
		let functionSet = {
			showTODO: this.showModal,
			editTODO: this.props.editTODO,
			removeTODO: this.props.removeTODO
		};
		return (
			<>
				<Table striped bordered hover>
					<TODOTableHeader />
					<TODOTableBody todoList={this.props.todoList} tabId={this.props.tabId} functionSet={functionSet} />
				</Table>
				<TODOAddItem
					className="float-right"
					showModal={this.showModal}
					tabId={this.props.tabId}
					addTODO={this.props.addTODO}
				/>
				<TODOModal show={this.state.showModal} modalConfig={this.state.modalConfig} />
			</>
		);
	}
}

export default TODOTable;
