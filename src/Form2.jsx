import React, {Component} from 'react'
import './index.css';
import Input from "./components/Input";
import Toggle from 'react-toggle'



class Form2 extends Component
{
    constructor(props) {
        super(props);
    
        this.state = {
            newToggle:{
            check:  false,//this.props.data.extra_time === "לא" ? false : true ,
            extension_option: ["לא",
                "כן"
                ],}

        };
    }
    
    handleInput = (e) => {   
        let value = e.target.value;
        let name = e.target.name;
        console.log("check" , value);
        this.props.handleInputForm(name,value);
    }

    handleToggle = (e) =>{
        this.setState(
            prevState => ({
              newToggle: {
                ...prevState.newToggle,
                check : !this.state.newToggle.check,
              }
            }),
            () => console.log(this.state.newToggle)
          );  
          this.handleInput(e);       
        
    }

    render()
    {
        return(
            <div>
                <div className = "text-center">
                    <div >
                        <h2>אחלה מיקום,</h2>
                    </div>
                    <div >
                        <h2>ומה תקופת השכירות?</h2>
                    </div>
                </div>
                <form className="container-fluid text-right" onSubmit={this.handleFormSubmit}>
                    <div className="row">
                        <div className="col-6">
                            <Input
                            inputType={"date"}
                            title={"תאריך כניסה:"}
                            name={"entry_date"}
                            placeholder={this.props.data["entry_date"]}
                            handleChange={this.handleInput}
                            />{" "}   
                            {/* start period */}
                        </div>
                        <div className="col-6">
                            <Input
                            inputType={"date"}
                            title={"תאריך יציאה"}
                            name={"end_date"}
                            placeholder={this.props.data["end_date"]}
                            handleChange={this.handleInput}
                            />{" "}
                            {/* end period */}
                        </div>
                    </div>

                    <div className = "row">
                        <div className="col-8 text-righ"> אופציה להארכת השכירות?</div>
                        <div className="col-4 text-left">
                            <label>
                                <span> כן</span>
                                <Toggle
                                    name = {"extra_time"}
                                    icons = {false}
                                    //value = {this.state.newToggle.extension_option[Number(this.state.newToggle.check)]}
                                    value = {!this.state.newToggle.check}
                                    onChange = {this.handleToggle}/>
                                <span>לא</span>
                            </label>
                        </div>
                    </div>

            </form>
          </div>
        );
    }
}



export default Form2;