import React, {Component} from 'react'
import './index.css';
import Input from "./components/Input";
import Select from "./components/Select";
import Toggle from 'react-toggle'

class Form3 extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            nurmbeOptions: [...Array(3).keys()],
            dateOptions: [ 2,10,15,20],
            others: "nnnnnnnn",
            newToggle:{
                check: false,
                extension_option: [ "לא",
                     "כן"],}
        };
    }

    updateOthers = (id,val) => {
         this.setState({
           others: this.state.others.substr(0,id)+ val + this.state.others.substr(id+1,8)
         },() => {
             //console.log(this.state.others);
             
             this.props.handleChangeForm(this.state.others); })
       }
    
    filter = (obj, predicate) => 
        Object.keys(obj)
          .filter( key => predicate(obj[key]) );

    handleInput = (e) => {
        let value = e.target.value;
        let name = e.target.name;
        this.props.handleInputForm(name,value);
    }

    handleChange = (e) => {
        let value = e.target.checked;
        let name = e.target.name;
        let id = Number(e.target.id);
        let newValue = value ? 'y' : 'n';
        this.updateOthers(id,newValue);
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
    }
    render()
    {
        return(
            <div>
                <div className = "text-center">
                    <div >
                        <h2>נשמע טוב, אז כמה עולה התענוג?</h2>
                    </div>
                </div>
                <form className="container-fluid text-right" onSubmit={this.handleFormSubmit}>
                    <div className="row">
                            <div className=" inner-addon left-addon  col-12">
                                <Input
                                inputType={"text"}
                                //title={"הכנס סכום שכירות כולל"}
                                name={"pay"}
                                placeholder={this.props.data["pay"]}
                                handleChange={this.handleInput}
                                />{" "}  
                                <i className="glyphicon glyphicon-user"></i> 
                                {/* pay  */}

                            </div>

                            <div className="col-6">
                                <Select
                                title={"מס' שוכרים"}
                                name={"people"}
                                options={this.state.nurmbeOptions}
                                placeholder={this.props.data["people"]}
                                handleChange={this.handleInput}
                                />{" "}
                                {/* peopleNumber Selection */}
                            </div>
                            <div className="col-6">
                                <Select
                                title={"תאריך לחיוב"}
                                name={"biling_date"}
                                options={this.state.dateOptions}
                                placeholder={this.props.data["billing_date"]}
                                handleChange={this.handleInput}
                                />{" "}
                                {/* billingDate Selection */}
                            </div>
                        </div>
                        <div className = "row">
                            <div className="col-8 text-righ"> תשלומים נוספים כלולים בשכ"ד? </div>
                            <div className="col-4 text-left">
                                <label>
                                    <span> כן</span>
                                    <Toggle
                                        name = {"other_extension"}
                                        icons = {false}
                                        value = {this.state.newToggle.extension_option[Number(this.state.newToggle.check)]}
                                        onChange = {this.handleToggle}/>
                                    <span>לא</span>
                                </label>
                            </div>
                        </div>
                        <div style = {{ display : (this.state.newToggle.check ? 'block' : 'none')}}>
                            <div className = "form-group row "> 
                                <div className="form-check col-4">
                                    <input className="form-check-input " type="checkbox"
                                     name="ארנונה" id={0} onChange={this.handleChange}/>
                                    <label className="form-check-label mr-3" for="arnona"> ארנונה</label>
                                </div>
                                <div className="form-check col-4">
                                    <input class="form-check-input " type="checkbox" name="גז" id={1} onChange={this.handleChange}/>
                                    <label class="form-check-label mr-3" for="gas">גז</label>
                                </div>
                                <div className="form-check col-4">
                                    <input className="form-check-input " type="checkbox" name="חשמל" id={2} onChange={this.handleChange}/>
                                    <label className="form-check-label mr-3 " for="electric">חשמל</label>
                                </div>
                                <div className="form-check col-4">
                                    <input className="form-check-input " type="checkbox" name="אינטרנט" id={3} onChange={this.handleChange}/>
                                    <label className="form-check-label mr-3" for="net">אינטרנט</label>
                                </div>
                                <div class="form-check col-4">
                                    <input className="form-check-input " type="checkbox" name="מים" id={4} onChange={this.handleChange}/>
                                    <label className="form-check-label mr-3" for="water">מים</label>
                                </div>
                                <div className="form-check col-4">
                                    <input className="form-check-input " type="checkbox" name="חימום" id={5} onChange={this.handleChange}/>
                                    <label className="form-check-label mr-3" for="heat">חימום</label>
                                </div>
                                <div class="form-check col-6">
                                    <input className="form-check-input " type="checkbox" id={6} name="ועד בית ודמי ניהול"onChange={this.handleChange}/>
                                    <label className="form-check-label mr-3" for="committee">ועד בית ודמי ניהול</label>
                                </div>
                                <div className="form-check col-6">
                                    <input className="form-check-input " type="checkbox" id={7} name="טלויזיה בלוין/כבלים"onChange={this.handleChange}/>
                                    <label className="form-check-label mr-3" for="cabel">טלויזיה בלוין/כבלים</label>
                                </div>
                            </div>
                        </div>
                </form>
          </div>
        );
    }
}



export default Form3;