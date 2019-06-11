  import React from 'react';
  import axios from 'axios';
  import { Button,InputGroup,FormControl } from 'react-bootstrap';

  export default class UpdateTask extends React.Component {
    state = {
      id: '',
      name:'',
    }


    handleChange = event => {
      this.setState({ id: event.target.value })
    }
    handleBiggerChange = event => {
      this.setState({name: event.target.value})
    }

    handleSubmit = event => {
      event.preventDefault();

      axios.put(`http://localhost:9090/api/v3/tasks/${this.state.id}`,{ name : this.state.name })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
    }

    render() {
      return (
        <div>
        <form onSubmit={this.handleSubmit}>
        <InputGroup className="mb-3">
        <InputGroup.Prepend>
        <InputGroup.Text>ID and New Task Name</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
        type="text" name="id" onChange={this.handleChange}
        placeholder="ID"
        aria-label="delete task"
        aria-describedby="basic-addon2"
        />
        <FormControl
        type="text" name="name" onChange={this.handleBiggerChange}
        placeholder="Updated Task"
        aria-label="delete task"
        aria-describedby="basic-addon2"
        />
        <InputGroup.Append>
        <Button type="submit" variant="outline-secondary">Update</Button>
        </InputGroup.Append>
        </InputGroup>
        </form>

        </div>
        )
    }
  }