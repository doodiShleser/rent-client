import React, {Component } from 'react';
import axios from 'axios';
import '../index.css';
const API_BASE_URL = "http://rent-serverenv.eba-wn3cgdsr.eu-west-1.elasticbeanstalk.com/login";
const API_EXISTS_URL = "http://rent-serverenv.eba-wn3cgdsr.eu-west-1.elasticbeanstalk.com/userExists";
class LoginForm extends Component  {
    constructor(props){
        super(props);
        this.state = {
            email : "",
            password : "",
            successMessage: null,
        }
    }
    handleChange = (e) => {
        const {id , value} = e.target;
        this.setState(prevState => ({
            ...prevState,
            [id] : value
        }));

    }

    handleSubmitClick = (e) => {
        e.preventDefault();
        const payload={
            "email":this.state.email,
            "password":this.state.password,
        }
        let self = this;
        axios.post(API_EXISTS_URL, {email: self.state.email} )
        .then(function (response) {              
            if(response.status === 200){
                if (response.data["Exists"]){
                    self.setState(prevState => ({
                        ...prevState,
                        successMessage : 'Login successful. Redirecting to home page..'
                    }))
                    self.props.setUserName(self.state.email);                   
                    self.props.history.push('/Last');
                }
                else{
                    alert("עדיין אינך רשום")
                }
            }
        }).catch(function (error) {
            console.log(error);
        }); 
    }
    redirectToHome = () => {
        //props.updateTitle('Home')
        this.props.history.push('/home');
    }
    redirectToRegister = () => {
        this.props.history.push('/register'); 
        //props.updateTitle('Register');
    }
    render(){
    return(
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}> 
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
            <form>
                <div className="form-group text-left">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" 
                       className="form-control" 
                       id="email" 
                       aria-describedby="emailHelp" 
                       placeholder="Enter email" 
                       value={this.state.email}
                       onChange={this.handleChange}
                />
                <small id="emailHelp" className="form-text text-muted">
                    We'll never share your email with anyone else.
                </small>
                </div>
                <div className="form-group text-left">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" 
                       className="form-control" 
                       id="password" 
                       placeholder="Password"
                       value={this.state.password}
                       onChange={this.handleChange} 
                />
                </div>
                <div className="form-check">
                </div>
                <button 
                    type="submit" 
                    className="btn btn-primary"
                    onClick={this.handleSubmitClick}
                >Submit</button>
            </form>
            <div className="alert alert-success mt-2" style={{display: this.state.successMessage ? 'block' : 'none' }} role="alert">
                {this.state.successMessage}
            </div>
            <div className="registerMessage">
                <span>Dont have an account? </span>
                <span className="loginText" onClick={() => this.redirectToRegister()}>Register</span> 
            </div>
        </div>
        </div>
    )}
}

export default LoginForm;