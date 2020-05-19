import React, {Component} from 'react'
import './index.css';
import Toggle from 'react-toggle'


class Form6 extends Component
{
    constructor(props) {
        super(props);
    
        this.state = {

            newToggle:{
                pets_check: false,
                paint_check: false,
                parking_check: false,
                warehouse_check: false,
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
        let name = e.target.name+"_check";
        this.setState(
            prevState => ({
              newToggle: {
                ...prevState.newToggle,
                [name] : !this.state.newToggle[name],
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
                        <h2>אוטוטו מסיימים, אבל לא לפני שנדבר על כמה כללי אצבע להתנהלות בנכס שלך</h2>
                    </div>
                </div>
                <form className="container-fluid text-right" onSubmit={this.handleFormSubmit}>
                    <div className = "row">
                        <div className="col-8 text-righ"> ניתן להחזיק חיות מחמד בדירה? </div>
                        <div className="col-4 text-left">
                            <label>
                                <span> כן</span>
                                <Toggle
                                    name = {"pets"}
                                    icons = {false}
                                    //value = {this.state.newToggle.extension_option[Number(this.state.newToggle.pets_check)]}
                                    value = {!this.state.newToggle.pets_check}
                                    onChange = {this.handleToggle}/>
                                <span>לא</span>
                            </label>
                        </div>
                    </div>

                    <div className = "row">
                        <div className="col-8 text-righ"> צביעת הדירה בסיום החוזה? </div>
                        <div className="col-4 text-left">
                            <label>
                                <span> כן</span>
                                <Toggle
                                    name = {"paint"}
                                    //value = {this.state.newToggle.extension_option[Number(this.state.newToggle.paint_check)]}
                                    value = {!this.state.newToggle.paint_check}
                                    icons={false}
                                    onChange = {this.handleToggle}/>
                                <span>לא</span>
                            </label>
                        </div>
                    </div>

                    <div className = "row">
                        <div className="col-8 text-righ"> החרגת חניה מהחוזה? </div>
                        <div className="col-4 text-left">
                            <label>
                                <span> כן</span>
                                <Toggle
                                    name = {"parking"}
                                    //value = {this.state.newToggle.extension_option[Number(this.state.newToggle.parking_check)]}
                                    value = {!this.state.newToggle.parking_check}
                                    icons={false}
                                    onChange = {this.handleToggle}/>
                                <span>לא</span>
                            </label>
                        </div>
                    </div>

                    <div className = "row">
                        <div className="col-8 text-righ"> החרגת מחסן מהחוזה? </div>
                        <div className="col-4 text-left">
                            <label>
                                <span> כן</span>
                                <Toggle
                                    name = {"warehouse"}
                                    //value = {this.state.newToggle.extension_option[Number(this.state.newToggle.warehouse_check)]}
                                    value = {!this.state.newToggle.warehouse_check}
                                    icons={false}
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



export default Form6;