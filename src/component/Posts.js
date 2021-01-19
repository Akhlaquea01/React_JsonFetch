import React,{Component} from 'react';
import PostView from "./PostViwes"

const url="http://localhost:8888/Languages"

class Posts extends Component{
  constructor() {
    super()

    this.state = {
      topics:""
    }
  }
  componentDidMount() {
    fetch(url, { method: "GET" }).then((res) => res.json())
      .then((data) => {
        this.setState({
          topics:data
        })
    })
}

  render() {
    return (
      <div className="panel panel-success">
        <div className="panel-heading">Panel Posts Header</div>
        <div className="panel-body">
          <div className="jumbotron">
              <PostView topicdata={this.state.topics}></PostView>
          </div>
        </div>
      </div>
    )
  }
}
export default Posts;