
import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import RentsureApp from "./RentsureApp";
import LoginForm from "./components/LoginForm";
import Last from "./Last";
import history from './history';
import RegistrationForm from "./components/RegistrationForm";

export default class Routes extends Component {
    constructor(props){
        super(props);
        this.state ={
            userName: ""
        }
    }
    setUserName = (name) =>{
        this.setState({
            userName: name
        });
    }
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/register"  component={RegistrationForm} />
                    <Route path="/" exact component={() => <LoginForm history = {history} setUserName = {this.setUserName}/>} />
                    <Route path="/RentsureApp"  component={() => <RentsureApp history = {history} user = {this.state.userName}/>} />
                    <Route path="/Last" component={() => <Last history = {history} user = {this.state.userName}/>} />
                </Switch>
            </Router>
        )
    }
}