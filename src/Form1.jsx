import React, {Component} from 'react'
import './index.css';
import Input from "./components/Input";
import Select from "./components/Select";


class Form1 extends Component
{
    constructor(props) {
        super(props);
    
        this.state = {
          roomOptions: [...Array(11).keys()],
        };
    }
    
    handleInput = (e) => {
        let value = e.target.value;
        let name = e.target.name;
        console.log("here is" , name, this.props.data);
        
        this.props.handleInputForm(name,value);
    }
    render()
    {
        return(
            <div>
                <div className = "text-center">
                    <div >
                        <h2>אני אלווה אותך בבניית החוזה.</h2>
                    </div>
                    <div >
                        <h2>מה כתובת הנכס המושכר?</h2>
                    </div>
                </div>
                <form className="container-fluid text-right" onSubmit={this.handleFormSubmit}>
                    <div className="row">
                        <div className="col-6">
                            <Input
                            inputType={"text"}
                            title={"עיר"}
                            name={"city"}
                            placeholder={this.props.data["city"]}
                            handleChange={this.handleInput}
                            />{" "}   
                            {/* city  */}
                        </div>
                        <div className="col-6">
                            <Input
                            inputType={"text"}
                            title={"רחוב"}
                            name={"street"}
                            placeholder={this.props.data["street"]}
                            handleChange={this.handleInput}
                            />{" "}
                            {/* street  */}
                        </div>
                        <div className="col-6">
                            <Input
                            inputType={"number"}
                            name={"street_number"}
                            placeholder={this.props.data["street_number"]}
                            title={"מספר בית"}
                            handleChange={this.handleInput}
                            />{" "}
                            {/* Address */}
                        </div>
                        <div className="col-6">
                            <Input
                            inputType={"number"}
                            name={"department_number"}
                            title={"מספר דירה"}
                            placeholder={this.props.data["department_number"]}
                            handleChange={this.handleInput}
                            />{" "}
                            {/* department */}
                        </div>
                        <div className="col-12">
                            <Select
                            title={"מספר חדרים"}
                            name={"rooms"}
                            options={this.state.roomOptions}
                            placeholder={this.props.data["rooms"]}
                            handleChange={this.handleInput}
                            />{" "}
                            {/* rooms Selection */}
                        </div>
                    </div>
            </form>
          </div>
        );
    }
}



export default Form1;