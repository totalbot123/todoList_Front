import React, { Component } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import TODOTable from "./TODOTable.js";

class TODOList extends Component {
	state = {
		todoList: []
	};

	componentDidMount() {
		this.questList();
	}

	questList = () => {
		let tabId = this.props.tabId;
		fetch("/todo/" + tabId)
			.then((res) => res.json())
			.then((result) => {
				this.setState({
					todoList: result
				});
			});
	};

	addTODO = (TODOItem) => {
		let data = {
			quest: TODOItem.quest,
			tabId: TODOItem.tabId
		};
		fetch("/todo", {
			method: "POST",
			headers: {
				Accept: "*/*",
				"Content-Type": "application/json",
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Credentials": true
			},
			body: JSON.stringify(data)
		})
			.then((resp) => resp.json())
			.then((result) => {
				this.setState({
					todoList: result
				});
			});
	};

	editTODO = (TODOItem) => {
		let data = {
			quest: TODOItem.quest,
			tabId: TODOItem.tabId
		};
		fetch("/todo/" + TODOItem.id, {
			method: "PUT",
			headers: {
				Accept: "*/*",
				"Content-Type": "application/json",
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Credentials": true
			},
			body: JSON.stringify(data)
		})
			.then((resp) => resp.json())
			.then((result) => {
				this.setState({
					todoList: result
				});
			});
	};

	removeTODO = (ID) => {
		fetch("/todo/" + ID, {
			method: "DELETE"
		}).then((response) => {
			if (response.ok) {
				this.setState(() => {
					const changedTODO = this.state.todoList.filter((value) => {
						return value.id !== ID;
					});

					return {
						todoList: changedTODO
					};
				});
			}
		});
	};

	render() {
		return (
			<Container>
				<Row className="justify-content-lg-center">{this.props.name}</Row>
				<Row className="justify-content-lg-center">
					<Col>
						<TODOTable
							todoList={this.state.todoList}
							tabId={this.props.tabId}
							addTODO={this.addTODO}
							removeTODO={this.removeTODO}
							editTODO={this.editTODO}
						/>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default TODOList;
