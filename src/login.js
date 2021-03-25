import { Component } from 'react';
import './App.css'; 
import Loader from "react-loader-spinner";
 



class Login extends Component{
  constructor(props){
    super(props)
    this.state = {
      user : '',
      pass : '',
      showName : false,
      data : '',
      loading : false,
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
      showName: true, 
    }); 
    if(this.state.user === ""  || this.state.pass === ""){
        alert ('Fields are required');
        return;
    } else{    
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
          data : responseJson,
          loading : true
        })
            this.closeLoaderIn5Seconds();
            return this.props.history.push({ pathname: '/dashboard', state: { detail: responseJson}});
        }else {
            alert('Login Failed! Check Username and Password')
        }
      }))     
      .catch((err) => { console.log(err); });
    }
  }

    closeLoaderIn5Seconds = () => {
        setTimeout(() => {
           
            this.setState({
                showLoader: false
            });
        }, 5000);
    };

 

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
            {this.state.loading && (
                <Loader type="Puff" color="#00BFFF" height={100} width={100} />
            )}
      </div>
    );
  }
}


export default Login;
 