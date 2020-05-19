import React, {Component} from 'react'
import './index.css';
import Axios from 'axios';
import Table from 'react-bootstrap/Table';

class Last extends Component{
    constructor(props){
        super(props);
        this.state = {
            user : this.props.user,
            table : []
        }
    }
    
    getContracts = () => {    
        let self = this;
        let url = "http://localhost:3000/"+this.state.user;
        console.log(url,typeof url);
        
        Axios.get(url)
        .then(response => {
            let userData = [];
            for( let i in response.data)
            {
                let curr = response.data[i];
                userData.push(
                <tr>
                <td> <button onClick = {() => alert(curr["id"]) }>{curr["id"]}</button></td>
                <td>{curr["city"]}</td>
                <td>{curr["street"]}</td>
                <td>{curr["street_number"]}</td>
                <td>{curr["department_number"]}</td>
                <td>{curr["rooms"]}</td>
                </tr>);
            }
            self.setState({
                table: userData 
            });
        console.log("end to render");
        
        })
        .catch(error => {
          console.log(error);
        });        
    }
render(){
    return(
        <div className = "row">
            <div className= "col-3" style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}> 
                <div >
                    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '10vh'}}>
                        <span className="m-1"> שלום </span>  <span className="m-1">{`${this.state.user}`} </span> 
                    </div>
                    <div>
                        <button onClick = {() =>this.props.history.push('/rentsureApp')}>יצירת חוזה חדש</button>
                        <button  onClick = {this.getContracts}>click to show</button>
                    </div>
                </div>
            </div>
            <div className= "col-9">
            <Table responsive>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>עיר</th>
                    <th>רחוב</th>
                    <th>מספר בית</th>
                    <th>מספר דירה</th>
                    <th>מספר חדרים</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.table}
                </tbody>
                </Table>
            </div>

        {/* <div> {this.state.table}</div> */}
    </div>
)}

};
export default Last;