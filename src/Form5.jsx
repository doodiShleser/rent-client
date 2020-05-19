import React, {Component} from 'react'
import './index.css';
import Input from "./components/Input";


class Form5 extends Component
{
  
    handleInput = (e) => {
        let value = e.target.value;
        let name = e.target.name;

        this.props.handleInputForm(name,value);
    }
    render()
    {
        return(
            <div>
                <div className = "text-center">
                    <div >
                        <h2>הסוד הוא בדברים הקטנים.</h2>
                        <h2>איזו תכולה נשארת בדירה שלך ואילו ליקויים קיימים בה?</h2>
                    </div>
                </div>
                <form className="container-fluid text-right" onSubmit={this.handleFormSubmit}>
                    <div className="row">
                        <div className="col-8">
                            <Input
                            inputType={"text"}
                            title={"דברים שנשארים בדירה"}
                            name={"detailes_in"}
                            placeholder={this.props.data["detailes_in"]}
                            handleChange={this.handleInput}
                            />{" "}   
                            {/* detailes_in */}
                        </div>
                        <div className="col-8">
                            <Input
                            inputType={"text"}
                            title={"ליקויים לתיקון תוך 14 יום"}
                            name={"Faults14"}
                            placeholder={this.props.data["Faults14"]}
                            handleChange={this.handleInput}
                            />{" "}
                            {/* Faults in the apartment to fix */}
                        </div>
                        <div className="col-8">
                            <Input
                            inputType={"text"}
                            title={"ליקויים קבועים בדירה"}
                            name={"Faults"}
                            placeholder={this.props.data["Faults"]}
                            handleChange={this.handleInput}
                            />{" "}
                            {/* Faults in the apartment */}
                        </div>
                    </div>

            </form>
          </div>
        );
    }
}



export default Form5;