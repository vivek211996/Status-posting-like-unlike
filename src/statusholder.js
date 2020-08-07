import React, { Component } from "react";
import axios from "axios";
import Txtbox from './txtbox.js';
import Like from "./Likes.js"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./status.css"

export default class Statusholder extends Component {
    state ={
        Status:[],
    };

    componentDidMount = () => {
        axios
        .get("https://5f142b812710570016b37c94.mockapi.io/api/login/Status")
        .then((response) => {
            this.setState({
                Status:response.data,
                
            });
        })
        .catch((err) => console.log(err));
    
    }; 

    addStatus = (newStatus) => {
        console.log(newStatus);
        axios
        .post("https://5f142b812710570016b37c94.mockapi.io/api/login/Status", newStatus)
        .then((response) => {
            this.setState({
                Status: [...this.state.Status,response.data],
            });
        });
    };  

    // // likestatus = (Status) => {
    // //     console.log(Status);
    // //     // console.log(Status.Likes+1)
    // //     // var b=Status.Likes+1
    // //     // this.render()
    // //     // {
    // //     // document.getElementById("nlikes").value = b;
    // //     // }

    //     axios
    //     .put(`http://localhost:3001/Status/${Status.Likes}`)
    //     .then((response) => {
    //        const update =this.state.Status.filter(item =>
    //         {})
    //        })
    //        this.setState({Status:update})
    //     }


render(){
    return(
        <div class="col-xl-8" >
            
            <Txtbox onAdd ={this.addStatus}></Txtbox>
      
          {this.state.Status.map(x=>{
              return(
                <div className="div2">
                  <label key ={x.Title}></label>
              <label>{x.Title}</label>
              
              <Like/>
              </div>
             
             )

          })}
     
      
    </div>

    )
}

}
