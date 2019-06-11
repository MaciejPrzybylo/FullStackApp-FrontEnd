import React from 'react';
import axios from 'axios';
import { Button,Row,Container,Col } from 'react-bootstrap';

export default class TaskList extends React.Component {
	state = {
		tasks : [],
	}

	componentDidMount() {
		axios.get(`http://localhost:9090/api/v3/tasks`)
		.then(res => {
			const tasks = res.data
			this.setState({tasks});
		})
	}


	render(){
		return (
			<ul class="list-group">
			{this.state.tasks.map(task => 
				<li class="list-group-item" key={task.tid}> 
				<Container>
				<Row>
				<Col xs={1}>Task id: {task.tid} </Col>
				<Col xs={11}> {task.name} </Col>
				
				</Row>

				</Container>
				</li>)}
			</ul>
			)
	}
}