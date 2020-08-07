import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Txtbox extends Component{
state ={
    Title:"",
   // Likes:""
};

handlechange =(event) => {
    this.setState({
        Title:event.target.value,
        //Likes:event.target.value
    });
}

handlepost = (event) =>
{
    event.preventDefault();
    this.props.onAdd({
        Title:this.state.Title,
        //Likes:this.state.value
    });
    this.setState({
        Title: "",
       // Likes:""
    });
}
    
    render()
    {
   return(
   <form onSubmit={this.handlepost}>
  <div className="form-group row">
    <div className="col-sm-10">
      <input type="text" onChange={this.handlechange} className="form-control" id="inputTitle" placeholder="Whats on your mind?"></input>
    </div>
  </div>
  <div className="form-group row">
    <div className="col-sm-10 offset-sm-2">
      <button type="submit" className="btn btn-primary" >Post</button>
    </div>
  </div>
</form>
   )
    }
}