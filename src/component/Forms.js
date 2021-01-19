import React, { Component } from 'react';
const url="http://localhost:8888/Languages"


class Forms extends Component {
  constructor() {
    super()

    this.state = {
      name: '',
      details:''
    }
    this.handleChangeName= this.handleChangeName.bind(this)
    this.handleChangeDetails= this.handleChangeDetails.bind(this)
    this.handleSubmit= this.handleSubmit.bind(this)
  }
  handleChangeName(event) {
    this.setState({name:event.target.value})
  }
  handleChangeDetails(event) {
    this.setState({details:event.target.value})
  }
  handleSubmit() {
    var id = Math.floor(Math.random() * 1000);
    var data = {
      id: id,
      name: this.state.name,
      details:this.state.details
    }
    fetch(url, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(data)
    })
    .then(this.props.history.push('/posts'))
  }
  render() {
    return (
      <div className="panel panel-danger">
        <div className="panel-heading">Panel Forms Header</div>
        <div className="panel-body">
            <div className="forn-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" placeholder="Name of Topic" id="name" value={this.state.name} onChange={this.handleChangeName}/>
            </div>
            <div className="forn-group">
              <label htmlFor="details">Details</label>
              <input type="text" className="form-control" placeholder="Details of Topic" id="details" value={this.state.details} onChange={this.handleChangeDetails}/>
            </div>
            <button type="submit" className="btn btn-success" onClick={this.handleSubmit}>Submit</button>
        </div>
      </div>
    )
  }
}
export default Forms;