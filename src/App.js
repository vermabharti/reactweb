import { Component } from 'react';
import './App.css';
import { Redirect } from 'react-router';



class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      user : '',
      pass : '',
      showName : false,
      data : ''
    } 
  }

  

  displayNameHandlerUser = (e) => {
    let updatedName = e.target.value;
    this.setState({ user: updatedName});
    //console.log(updatedName);  
  }

  displayNameHandlerPass = (e) => {
    let updatedName = e.target.value;
    this.setState({ pass: updatedName });
    //console.log(updatedName);  
  }

  handleSubmit =  (e) => {    
    e.preventDefault();
    this.setState({
      showName: true
    });  
    fetch('https://cors-anywhere.herokuapp.com/https://cdashboard.dcservices.in/HISUtilities/services/restful/DataService/DATAJSON/DashboardUserAuthentication', {
      method: 'POST',
      headers: {
        'authorization': 'Basic ' + btoa('mobileUser:mob123'),
        'content-type': 'text/plain'
      },
      body: JSON.stringify({ "primaryKeys": [this.state.user, this.state.pass] }),
    })
    .then((response) => response.json()
      .then((responseJson) => {
        if(!responseJson.msg){         
        this.setState({
          data : responseJson
        })
        return <Redirect to = "/dashboard"/>
        }else {
          alert('enter credientials')
        }
      }))     
      .catch((err) => { console.log(err); });
  }

 

  render(){
    return(
      <div className='App'>
        <form onSubmit={this.handleSubmit}>
        <h2>Login Form</h2>
        <label>Enter username</label>
          <input type='text' name='username' onChange={this.displayNameHandlerUser} value={this.state.user} /><br/>
        <label>Enter password</label>
          <input type='text' name='password' onChange={this.displayNameHandlerPass} value={this.state.pass}/><br/>
          <button type='submit' onClick={this.handleSubmit}>Submit</button>
          {this.state.showName && this.state.data && <p>Welcome {this.state.data.dataValue[0][1]}</p> }
        </form>
      </div>
    );
  }
}


export default App;
 