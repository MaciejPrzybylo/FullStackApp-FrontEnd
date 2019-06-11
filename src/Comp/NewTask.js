import React from 'react';
import axios from 'axios';
import { Button,InputGroup,FormControl } from 'react-bootstrap';

export default class PersonList extends React.Component {
	state = {
		name: {},
	}

	handleChange = event => {
		this.setState({ name: event.target.value });
	}

	handleSubmit = event => {
		
		axios.post(`http://localhost:9090/api/v3/tasks`, { name : this.state.name })
		.then(res => {
			console.log(res);
			console.log(res.data);
		})
	}

	render() {
		return (
			<div>
			<form onSubmit={this.handleSubmit}>
			<InputGroup  className="mb-3">
			<FormControl
			type="text" name="name" onChange={this.handleChange}
			placeholder="Enter New Task"
			aria-label="Recipient's username"
			aria-describedby="basic-addon2"
			/>
			<InputGroup.Append>
			<Button type="submit" variant="outline-secondary">Add</Button>
			</InputGroup.Append>
			</InputGroup>
			</form>
			
	
			</div>
			)
	}
}