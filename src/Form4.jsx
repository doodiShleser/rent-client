import React, {Component} from 'react'
import './index.css';
import Input from "./components/Input";
import Toggle from 'react-toggle'


class Form4 extends Component
{
    constructor(props) {
        super(props);
    
        this.state = {
            nurmbeOptions: [...Array(3).keys()],
            dateOptions: [ 2,10,15,20],

            newToggle:{
                security_check_b: false,
                bank_guarantee_b: false,
                security_deposit_b: false,
                promissory_note_b : false,
                bank_cheque_b: false,
                extension_option: ["לא",
                    "כן"],}
        };
    }
    
    handleInput = (e) => {
        let value = e.target.value;
        let name = e.target.name;

        this.props.handleInputForm(name,value);
    }
    handleToggle = (e) =>{
        let name = e.target.name+"_b";
        this.setState(
            prevState => ({
              newToggle: {
                ...prevState.newToggle,
                [name] : !this.state.newToggle[name],
              }
            }),
            () => console.log(this.state.newToggle)
          ); 
             
    }
    render()
    {
        return(
            <div>
                <div className = "text-center">
                    <div >
                        <h2>בטחונות מעבר לתשלום שכ"ד:</h2>
                    </div>
                </div>
                <form className="container-fluid text-right" onSubmit={this.handleFormSubmit}>
                    <div className = "row">
                        <div className="col-8 text-righ"> צ'ק ביטחון </div>
                        <div className="col-4 text-left">
                            <label>
                                <span> כן</span>
                                <Toggle
                                    name = {"security_check"}
                                    //value = {!this.state.newToggle.security_check_b}
                                    value = {this.state.newToggle.extension_option[Number(this.state.newToggle.security_check_b)]}
                                    icons={false}
                                    onChange = {this.handleToggle}/>
                                <span>לא</span>
                            </label>
                        </div>

                        <div className="col-6"  style = {{ display : (this.state.newToggle.security_check_b ? 'block' : 'none')}}>
                            <Input
                                inputType={"text"}
                                title={"על סך"}
                                name={"security_check"}
                                placeholder={"1000"}
                                handleChange={this.handleInput}
                                />{" "}   
                                {/* security_check  */}
                        </div>
                    </div>

                    <div className = "row">
                        <div className="col-8 text-righ"> ערבות בנקאית </div>
                        <div className="col-4 text-left">
                            <label>
                                <span> כן</span>
                                <Toggle
                                    name = {"bank_guarantee"}
                                    value = {this.state.newToggle.extension_option[Number(this.state.newToggle.bank_guarantee_b)]}
                                    icons={false}
                                    onChange = {this.handleToggle}/>
                                <span>לא</span>
                            </label>
                        </div>

                        <div className="col-6"  style = {{ display : (this.state.newToggle.bank_guarantee_b ? 'block' : 'none')}}>
                            <Input
                                inputType={"text"}
                                title={"על סך"}
                                name={"bank_guarantee"}
                                placeholder={"1000"}
                                handleChange={this.handleInput}
                                />{" "}   
                                {/* bank_guarantee  */}
                        </div>
                    </div>

                <div className = "row">
                    <div className="col-8 text-righ"> פיקדון </div>
                    <div className="col-4 text-left">
                        <label>
                            <span> כן</span>
                            <Toggle
                                name = {"security_deposit"}
                                value = {this.state.newToggle.extension_option[Number(this.state.newToggle.security_deposit_b)]}
                                icons={false}
                                onChange = {this.handleToggle}/>
                            <span>לא</span>
                        </label>
                    </div>
                    <div className="col-6" style = {{ display : (this.state.newToggle.security_deposit_b ? 'block' : 'none')}}>
                        <Input
                        inputType={"text"}
                        title={"על סך"}
                        name={"security_deposit"}
                        placeholder={"1000"}
                        handleChange={this.handleInput}
                        />{" "}   
                        {/* security_deposit  */}
                    </div>
                </div>

                <div className = "row">
                    <div className="col-8 text-righ"> שטר חוב </div>
                    <div className="col-4 text-left">
                        <label>
                            <span> כן</span>
                            <Toggle
                                name = {"promissory_note"}
                                value = {this.state.newToggle.extension_option[Number(this.state.newToggle.promissory_note_b)]}
                                icons={false}
                                onChange = {this.handleToggle}/>
                            <span>לא</span>
                        </label>
                    </div>

                    <div className="col-6" style = {{ display : (this.state.newToggle.promissory_note_b ? 'block' : 'none')}} >
                        <Input
                            inputType={"text"}
                            title={"על סך"}
                            name={"promissory_note"}
                            placeholder={"1000"}
                            handleChange={this.handleInput}
                            />{" "}   
                            {/* promissory_note  */}
                    </div>
                </div>

                <div className = "row">
                    <div className="col-8 text-righ"> צ'ק בנקאי </div>
                    <div className="col-4 text-left">
                        <label>
                            <span> כן</span>
                            <Toggle
                                name = {"bank_cheque"}
                                value = {this.state.newToggle.extension_option[Number(this.state.newToggle.bank_cheque_b)]}
                                icons={false}
                                onChange = {this.handleToggle}/>
                            <span>לא</span>
                        </label>
                    </div>

                    <div className="col-6"  style = {{ display : (this.state.newToggle.bank_cheque_b ? 'block' : 'none')}} >
                        <Input
                            inputType={"text"}
                            title={"על סך"}
                            name={"bank_cheque"}
                            placeholder={"1000"}
                            handleChange={this.handleInput}
                            />{" "}   
                            {/* bank_cheque  */}
                    </div>
                </div>

            </form>
          </div>
        );
    }
}



export default Form4;