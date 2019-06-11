import React from 'react';
import axios from 'axios';
import { Button,InputGroup,FormControl } from 'react-bootstrap';

export default class DelTask extends React.Component {
  state = {
    id: '',
  }

  handleChange = event => {
    this.setState({ id: event.target.value });
  }

  handleSubmit = event => {
  

    axios.delete(`http://localhost:9090/api/v3/tasks/${this.state.id}`)
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
      placeholder="Delete Task with ID:"
      aria-label="delete task"
      aria-describedby="basic-addon2"
      />
      <InputGroup.Append>
      <Button type="submit" variant="outline-secondary">Delete</Button>
      </InputGroup.Append>
      </InputGroup>
      </form>
      
  
      </div>
    )
  }
}