import React, {Component} from 'react'
import './index.css';
import Input from "./components/Input";
import Toggle from 'react-toggle'


class Form7 extends Component
{
    constructor(props) {
        super(props);
    
        this.state = {
            nurmbeOptions: [...Array(3).keys()],
            dateOptions: [ 2,10,15,20],

            newToggle:{
                tma_b: false,
                reduced_b: false,
                insurance_b: false,
                free_b : false,
                extension_option: [ "לא",
                    "כן"],}
        };
    }
    
    handleInput = (e) => {
        let value = e.target.value;
        let name = e.target.name;
        console.log(name);
        
        this.props.handleInputForm(name,value);
    }

    handleToggle = (e) =>{
        let name = e.target.name+"_b";
        let value = e.target.value;
        this.setState(
            prevState => ({
              newToggle: {
                ...prevState.newToggle,
                [name] : !this.state.newToggle[name],
              }
            }),
            //() => this.props.handleInputForm(name,value)
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
                        <h2>יופי, רוצה להתייחס לאחת מהאפשרויות הבאות?:</h2>
                    </div>
                </div>
                <form className="container-fluid text-right" onSubmit={this.handleFormSubmit}>
                    <div className = "row">
                        <div className="col-8 text-righ"> הבנין מיועד לתמ"א 38? </div>
                        <div className="col-4 text-left">
                            <label>
                                <span> כן</span>
                                <Toggle
                                    name = {"tma"}
                                    icons = {false}
                                    //value ={this.state.newToggle.extension_option[Number(this.state.newToggle.tma_b)]}
                                    value = {!this.state.newToggle.tma_b}
                                    onChange = {this.handleToggle}/>
                                <span>לא</span>
                            </label>
                        </div>
                    </div>
                    <div  style = {{ display : (this.state.newToggle.tma_b ? 'block' : 'none')}}>
                        <div className="row ">
                            <div className="col-8 text-center " > שכ"ד מופחת בזמן העבודות? </div>
                            <div className="col-4 text-left">
                                <label>
                                    <span> כן</span>
                                    <Toggle
                                        name = {"reduced"}
                                        icons = {false}
                                        //value = {this.state.newToggle.extension_option[Number(this.state.newToggle.reduced_b)] }
                                        value = {!this.state.newToggle.reduced_b}
                                        onChange = {this.handleToggle}/>
                                    <span>לא</span>
                                </label>
                            </div>

                            <div className="col-10 " style = {{ display : (this.state.newToggle.reduced_b ? 'block' : 'none')}}>
                                <Input
                                    inputType={"text"}
                                    title={'הכנס סכום שכ"ד מופחת'}
                                    name={"tma_reduced"}
                                    placeholder={"1000"}
                                    handleChange={this.handleInput}
                                    />{" "}   
                                    {/* tma_check  */}
                            </div>
                        </div>
                    </div>

                    <div className = "row">
                        <div className="col-8 text-righ"> התחייבות בחוזה לעריכת ביטוחים? </div>
                        <div className="col-4 text-left">
                            <label>
                                <span> כן</span>
                                <Toggle
                                    name = {"insurance"}
                                    icons = {false}
                                    //value = {this.state.newToggle.extension_option[Number(this.state.newToggle.insurance_b)]}
                                    value = {!this.state.newToggle.insurance_b}
                                    onChange = {this.handleToggle}/>
                                <span>לא</span>
                            </label>
                        </div>
                    </div>

                <div className = "row">
                    <div className="col-8 text-righ"> רוצה להוסיף משהו בטקסט חופשי? </div>
                    <div className="col-4 text-left">
                        <label>
                            <span> כן</span>
                            <Toggle
                                name = {"free"}
                                icons = {false}
                                //value = {this.state.newToggle.extension_option[Number(this.state.newToggle.free_b)]}
                                value = {!this.state.newToggle.free_b}
                                onChange = {this.handleToggle}/>
                            <span>לא</span>
                        </label>
                    </div>
                    <div className="col-12" style = {{ display : (this.state.newToggle.free_b ? 'block' : 'none')}}>
                        <Input
                        inputType={"text"}
                        title={""}
                        name={"free_text"}
                        placeholder={"לדוגמא: אסור לשוכרים לקדוח בקרמיקה"}
                        handleChange={this.handleInput}
                        />{" "}   
                        {/*free_text */}
                    </div>
                </div>

            </form>
          </div>
        );
    }
}



export default Form7;