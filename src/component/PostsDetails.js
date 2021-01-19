import React,{Component} from 'react';
const url="http://localhost:8888/Languages"

class PostsDetails extends Component {
  constructor() {
    super()

    this.state = {
      topicd: ""
    }
  }
  componentDidMount() {
    fetch(`${url}/${this.props.match.params.id} `, { method: "GET" }).then((response) => response.json())
      .then((data) => {
        this.setState({
          topicd: data
        })
      })
  }

  render() {
    return (

      <div className="panel panel-danger">
        <div className="panel-heading">Panel Post Details Header</div>
        <div className="panel-body"><h2>{this.state.topicd.name}</h2>
          <p>{this.state.topicd.details}</p>
        </div>
      </div>
    )
  }
}
  export default PostsDetails;