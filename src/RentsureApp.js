import React, {Component} from 'react'
import './index.css';
import HomePage from "./HomePage";
import Contract from "./Contract";

class RentsureApp extends Component
{
    constructor(props) {
        super(props);
    
        this.state = {

          othersList : "",

           options  : [
            'ארנונה',
            'גז',
             'חשמל',
            'אינטרנט',
            'מים',
             'חימום',
             'ועד בית ודמי ניהול',
            'טלויזיה בלוין/כבלים'
        ],
          newUser: {
            city: "",
            street: "",
            street_number: "",
            department_number: "",
            rooms: "",

            entry_date: new Date().toISOString().slice(0,10),
            end_date: new Date().toISOString().slice(0,10),
            extra_time: "",

            pay: "",
            people: "",
            biling_date: "",
            other_extension: "",

            security_check: "",
            bank_guarantee: "",
            security_deposit: "",
            promissory_note : "",
            bank_cheque: "",

            detailes_in: "",
            Faults14: "",
            Faults: "",

            pets: "",
            paint: "",
            parking: "",
            warehouse: "",
            
            tma: "",
            reduced: "",
            tma_reduced: "",
            insurance: "",
            free_text: "",
          },
        };
    }

    setOthers(val) {
        
      let extensions = "";


      
      //let i = 0;
      for(let i in val)
      {       
           
          if( val[i] === 'y')
              extensions += this.state.options[i]+',';
          i++;
      }
      if (extensions.length > 0){
        this.setState({
            othersList : extensions.substr(0,extensions.length-1)
        });}
  }

    handleChange = (value) => {
      this.setOthers(value);
      this.setState(
        prevState => ({
          newUser: {
            ...prevState.newUser,
            other_extension : value
          }
        }),)
  }
    
      handleInput = (name,value) => {
        this.setState(
          prevState => ({
            newUser: {
              ...prevState.newUser,
              [name]: value
            }
          }),
          () => console.log(this.state.newUser)
        );
    }

    render()
    {
        return(
            <div>
                <div className = "container row-align-center">
                    <div className="row">
                        <div className = "col-6">
                            <HomePage userName = {this.props.user}  data = {this.state.newUser} handleInputHome = {this.handleInput} handleChangeHome = {this.handleChange} />
                        </div>
                        <div className = "col-6">
                            <Contract x = {this.state.othersList} data = {this.state.newUser}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default RentsureApp;

