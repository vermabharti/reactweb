import React, { Component } from 'react'

class Dashboard extends Component {
    render(){
    return(
        <div>
            <h1>Welcome to DVDMS Central Dashboard {this.props.username}</h1>
        </div>
    );
}
}
export default Dashboard;