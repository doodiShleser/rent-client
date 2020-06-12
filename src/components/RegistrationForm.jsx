import React, {Component} from 'react';
import axios from 'axios';
import '../index.css';

const API_EXISTS_URL = "http://rent-serverenv.eba-wn3cgdsr.eu-west-1.elasticbeanstalk.com/userExists";
const API_REGISTER_URL = "http://rent-serverenv.eba-wn3cgdsr.eu-west-1.elasticbeanstalk.com/register";

class RegistrationForm extends Component  {
    constructor(props){
        super(props);
        this.state = {
            email : "",
            password : "",
            confirmPassword: "",
            successMessage: null,
            validation: {
                email: true,
                password: false
            }
        }
    }
    setValidation = (ok) =>{  
         this.setState(prevState => ({
             ...prevState,
             validation: {
                 email : ok ? false : true}
     }));
    }
    handleChange = (e) => {
        const {id , value} = e.target 
        this.setState(prevState => ({
            ...prevState,
            [id] : value
        }))
        if(id === "email")
        {
            let self = this;
            axios.post(API_EXISTS_URL, {email: value} )
            .then(function (response) {              
                if(response.status === 200){
                    self.setValidation(response.data["Exists"]);
                }
            }).catch(function (error) {
                console.log(error);
            }); 
        }
    }
    handleSubmitClick = (e) => {
        e.preventDefault();
        //console.log(this.state.email,this.state.password, this.state.confirmPassword);

        if(this.state.validation.email){
            if(this.state.password === this.state.confirmPassword) {
                this.sendDetailsToServer()    
            } else {
                alert('Passwords do not match');
            }
        }

    }
    redirectToHome = () => {
        //this.props.updateTitle('Home')
        this.props.history.push('/home');
    }
    redirectToLogin = () => {
        //this.props.updateTitle('Login')
        this.props.history.push('/'); 
    }
    sendDetailsToServer = () => {
        if(this.state.email.length && this.state.password.length) {
            //this.props.showError(null);
            const payload={
                "email":this.state.email,
                "password":this.state.password,
            }
            let self = this;
            axios.post(API_REGISTER_URL, payload)
                .then(function (response) {
                    if(response.status === 200){
                        self.setState(prevState => ({
                            ...prevState,
                            successMessage : 'Registration successful. Redirecting to home page..'
                        }))
                        self.redirectToLogin();
                        //this.props.showError(null)
                    } else{
                        //this.props.showError("Some error ocurred");
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });    
        } else {
            //this.props.showError('Please enter valid username and password')    
        }
        
    }
    render(){
        let required = <span style = {{color: "red"}} >*</span>
        return(
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}> 
            <div className="card col-12 col-lg-4 login-card mt-2 hv-center ">
                <form>
                    <div className="form-group text-left">
                    <div>
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    {this.state.email.length === 0 ? required : ""}
                    </div>
                    <input type="email" 
                        className="form-control" 
                        id="email" 
                        aria-describedby="emailHelp" 
                        placeholder="Enter email" 
                        value={this.state.email}
                        onChange={this.handleChange}
                        />
                    <small id="emailValidator" className="form-text text-muted">
                        {this.state.validation.email ? "" : <span style = {{color: "red"}}>"email allready exists"</span>}
                    </small>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else</small>
                    </div>
                    <div className="form-group text-left">
                        <div>
                        <label htmlFor="exampleInputPassword1">Password</label>
                        {this.state.password.length === 0 ? required : ""}
                        </div>
                        <input type="password" 
                            className="form-control" 
                            id="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.handleChange} 
                        />
                    </div>
                    <div className="form-group text-left">
                        <div>
                        <label htmlFor="exampleInputPassword1">Confirm Password</label>
                        {this.state.confirmPassword.length === 0 ? required : ""} 
                        </div>
                        <input type="password" 
                            className="form-control" 
                            id="confirmPassword" 
                            required
                            value={this.state.confirmPassword}
                            placeholder="Confirm Password"
                            onChange={this.handleChange}
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="btn btn-primary"
                        onClick={this.handleSubmitClick}>
                        Register
                    </button>
                </form>
                <div className="alert alert-success mt-2" style={{display: this.state.successMessage ? 'block' : 'none' }} role="alert">
                {this.state.successMessage}
            </div>
            <div className="mt-2">
                <span>Already have an account? </span>
                <span className="loginText" onClick={() => this.redirectToLogin()}>Login here</span> 
            </div>
            </div>
            </div>
 
        )
        }
}
export default RegistrationForm;