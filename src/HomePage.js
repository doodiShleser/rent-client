import React, { Component } from 'react'
import './index.css';
import Form1 from "./Form1.jsx";
import Form2 from "./Form2.jsx";
import Form3 from "./Form3.jsx";
import Form4 from "./Form4.jsx";
import Form5 from "./Form5.jsx";
import Form6 from "./Form6.jsx";
import Form7 from "./Form7.jsx";
import Button from "./components/Button";
import history from './history';



class HomePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            key: 0,
            data: [ 
                {   "name": "properties",         
                    "city": this.props.data.city,
                    "street": this.props.data.street,
                    "street_number": this.props.data.street_number,
                    "department_number": this.props.data.department_number,
                    "rooms": this.props.data.rooms,
                },
    
                {
                    "name": "agreements",
                    "entry_date": this.props.data.start_time,
                    "end_date": this.props.data.end_time,
                    "extra_time": this.props.data.extra_time,
                },
    
                {
                    "name": "pay_detailes",
                    "pay": this.props.data.pay,
                    "people": this.props.data.people,
                    "biling_date": this.props.data.biling_date,
                    "other_extension": this.props.data.other_extension,
                },
    
                {
                    "name" :"collateral",
                    "security_check": this.props.data.security_check,
                    "bank_guarantee": this.props.data.bank_guarantee,
                    "security_deposit": this.props.data.security_deposit,
                    "promissory_note" : this.props.data.promissory_note,
                    "bank_cheque": this.props.data.bank_cheque,
                },
    
                {
                    "name" : "about",
                    "detailes_in": this.props.data.detailes_in,
                    "Faults14": this.props.data.Faults14,
                    "Faults": this.props.data.Faults,
                },
    
                {
                    "name" : "rules",
                    "pets": this.props.data.pets,
                    "paint": this.props.data.paint,
                    "parking": this.props.data.parking,
                    "warehouse": this.props.data.warehouse,
                },
    
                {
                    "name" : "additions",
                    "tma": this.props.data.tma,
                    "reduced": this.props.data.reduced,
                    "tma_reduced": this.props.data.tma_reduced,
                    "insurance": this.props.data.insurance,
                    "free_text": this.props.data.free_text,
                },
            ]
        };
    }

    handleNvEnter = (e) => {
        console.log('button was clicked', this.state.key);
        let url = "";
        let settings = "";
        if(this.state.key <= 6){
            url = "https://rent-serverenv.eba-wn3cgdsr.eu-west-1.elasticbeanstalk.com//all";
            settings = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state.data[this.state.key]),
            };
        }
        else{

            url = "https://rent-serverenv.eba-wn3cgdsr.eu-west-1.elasticbeanstalk.com/send";
            settings = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({user : this.props.userName}),
            };
        }
        fetch(url, settings).then(function (response) {
             console.log("hiiiiiiii senddddd", response);
            if (response.ok) {
                console.log('Click was recorded');
                return;
            }
            throw new Error('Request failed.');
        })
            .catch(function (error) {
                console.log(error);
            });
    }
    goLast = () => {
        history.push('/Last'); 
    }
    handleInput = (name, value) => {
        this.props.handleInputHome(name, value);
    }
    handleChange = (value) => {
        this.props.handleChangeHome(value);
    }
    handleSubmit = (e) => {
        this.onUpdateItem(this.state.key);
        this.setState({   
                key : this.state.key + 1,
            });
        
        console.log("newdata: ", this.state.data[this.state.key]);
        this.handleNvEnter(e);
        //console.log("KEY:::", this.state.key);
        
        if(this.state.key === 7 )
        {
               this.goLast();
        }
            
        


    }
    handleRetry = () => {
        this.setState(        
            prevState => ({
                ...prevState.data,
                key : this.state.key - 1,
            })
        );
    }

    onUpdateItem = i => {
         
        const update= this.state.data.map((item, j) => {
            if (j === i) { 
               // console.log(j)  ;           
                for(let prop in item)
                {
                 //   console.log(prop, this.props.data[prop]);
                    if(prop !== "name")
                        item[prop] =  this.props.data[prop];
                }
             }
            return item;
          });
        this.setState(
            {date: update}
        )
        console.log("onUpdateItem "  , update[i]);
        console.log("onUpdateItem "  , this.state.data[i]);
    }

    render() {
        let forms = [
            <Form1 data = {this.state.data[0]} handleInputForm={this.handleInput} />,
            <Form2 data = {this.state.data[1]} handleInputForm={this.handleInput} />,
           <Form3 data = {this.state.data[2]} handleInputForm={this.handleInput} handleChangeForm={this.handleChange} />,
           <Form4 data = {this.state.data[3]} handleInputForm={this.handleInput} />,
           <Form5 data = {this.state.data[4]} handleInputForm={this.handleInput} />,
           <Form6 data = {this.state.data[5]} handleInputForm={this.handleInput} />,
           <Form7 data = {this.state.data[6]} handleInputForm={this.handleInput} />,
        ];
        let currentForm = forms[this.state.key];

        return (
            <div className="container text-center">
                <img name="icon" src="/genery-man-icons.jpg" alt={""} className="row-align-center"></img>
                {currentForm}
                <div className="row d-flex justify-content-around">
                    <div className="col-3">
                        <Button
                            hidden={this.state.key === 0 ? true : false}
                            action={this.handleRetry}
                            type={"secondary"}
                            title={"חזור"}
                            style={buttonStyle}
                        />{" "}
                        {/* Clear the form */}
                    </div>
                    <div className="col-3">
                        <Button
                            action={this.handleSubmit}
                            type={"primary"}
                            title={"המשך"}
                            style={buttonStyle}
                        />{" "}
                        {/*Submit */}
                    </div>
                </div>
            </div>
        )
    }
}

const buttonStyle = {
    margin: "10px 10px 10px 10px"
};
export default HomePage;