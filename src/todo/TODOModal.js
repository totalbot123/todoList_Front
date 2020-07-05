import React, { Component } from "react";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

class TODOModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			show: this.props.show,
			todoInput: this.props.modalConfig.TODOItem.quest,
			modalConfig: this.props.modalConfig
		};
	}

	static getDerivedStateFromProps(props, state) {
		if (props.show !== state.show) {
			return {
				show: props.show,
				todoInput: props.modalConfig.TODOItem.quest,
				modalConfig: props.modalConfig
			};
		}
		return null;
	}

	hideModal = () => {
		this.props.modalConfig.hideModal();
	};

	inputChange = (event) => {
		this.setState({ todoInput: event.target.value });
	};

	render() {
		let submitAction = this.state.modalConfig.submitAction;
		return (
			<Modal show={this.state.show} onHide={this.hideModal} animation={false}>
				<Modal.Header closeButton>
					<Modal.Title>Add TODO Item</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div className="form-group">
						<input
							type="text"
							value={this.state.todoInput}
							placeholder="Learn about..."
							className="form-control"
							onChange={this.inputChange}
						/>
					</div>
				</Modal.Body>
				<Modal.Footer>
					<Button
						variant="primary"
						onClick={() => {
							let data = {
								id: this.state.modalConfig.TODOItem.id,
								quest: this.state.todoInput,
								tabId: this.state.modalConfig.TODOItem.tabId
							};
							submitAction(data);
							this.hideModal();
						}}
					>
						Save
					</Button>
					<Button variant="danger" onClick={() => this.hideModal()}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		);
	}
}

export default TODOModal;
