import React, {Component} from 'react'
import './index.css';


class Contract extends Component
{

    tma_val()
    {
        if(this.props.data.reduced === "לא" || this.props.data.tma === "לא" )
        {
            return "";
        }
        else return this.props.data.tma_reduced;
    }

    render()
    {
        return(
            <div>
                <div className = "container row-align-center">
                    <div className = "col ">
                        <div className="row ">
                            <label>עיר:</label>
                            <p>  {this.props.data.city} </p>
                        </div>
                        <div className="row">
                            <label>רחוב:</label>
                            <p>{this.props.data.street}</p>
                        </div>
                        <div className="row">
                            <label>מספר בית:</label>
                            <p>{this.props.data.street_number}</p>
                        </div>
                        <div className="row">
                            <label>מספר דירה:</label>
                            <p>{this.props.data.department_number}</p>
                        </div>
                        <div className="row">
                            <label>מספר חדרים:</label>
                            <p>{this.props.data.rooms}</p>
                        </div>
                        <div className="row">
                            <label>תאריך כניסה: </label>
                            <p>{this.props.data.entry_date}</p>
                        </div>
                        <div className="row">
                            <label>תאריך יציאה:</label>
                            <p>{this.props.data.end_date}</p>
                        </div>
                        <div className="row">
                            <label>אופציה להארכת חוזה:</label>
                            <p>{ this.props.data.extra_time }</p>
                        </div>
                        <div className="row">
                            <label>דמי שכירות:</label>
                            <p>{this.props.data.pay}</p>
                        </div>
                        <div className="row">
                            <label>מס' שוכרים:</label>
                            <p>{this.props.data.people}</p>
                        </div>
                        <div className="row">
                            <label>תאריך לחיוב:</label>
                            <p>{this.props.data.biling_date}</p>
                        </div>
                        <div className="row">
                            <label>תשלומים נוספים כלולים בשכ"ד:</label>
                            <p>{this.props.x}</p>
                        </div>

                        <div className="row">
                            <label>צ'ק פיקדון: </label>
                            <p>{this.props.data.security_check}</p>
                        </div>
                        
                        <div className="row">
                            <label>ערבות בנקאית: </label>
                            <p>{this.props.data.bank_guarantee}</p>
                        </div>

                        
                        <div className="row">
                            <label>פיקדון: </label>
                            <p>{this.props.data.security_deposit}</p>
                        </div>

                        
                        <div className="row">
                            <label>שטר חוב: </label>
                            <p>{this.props.data.promissory_note}</p>
                        </div>

                        
                        <div className="row">
                            <label>צ'ק בנקאי: </label>
                            <p>{this.props.data.bank_cheque}</p>
                        </div>
                        
                                                
                        <div className="row">
                            <label>דברים שנשארים בדירה: </label>
                            <p>{this.props.data.detailes_in}</p>
                        </div>

                        <div className="row">
                            <label>ליקויים לתיקון תוך 14 יום: </label>
                            <p>{this.props.data.Faults14}</p>
                        </div>

                        <div className="row">
                            <label>ליקויים קבועים בדירה: </label>
                            <p>{this.props.data.Faults}</p>
                        </div>
                        
                        <div className="row">
                            <label>חיות מחמד: </label>
                            <p>{this.props.data.pets}</p>
                        </div>

                        
                        <div className="row">
                            <label>צביעה בסיום: </label>
                            <p>{this.props.data.paint}</p>
                        </div>

                        
                        <div className="row">
                            <label>החרגת חניה: </label>
                            <p>{this.props.data.parking}</p>
                        </div>

                        
                        <div className="row">
                            <label>החרגת מחסן: </label>
                            <p>{this.props.data.warehouse}</p>
                        </div>


                        <div className="row">
                            <label>הבנין מיועד לתמא 38? </label>
                            <p>{this.props.data.tma}</p>
                        </div>

                        <div className="row">
                            <label>הפחתה בזמן תמא 38: </label>
                            <p>{this.tma_val()}</p>
                        </div>

                        <div className="row">
                            <label>התחייבות בחוזה לעריכת ביטוחים?  </label>
                            <p>{this.props.data.insurance}</p>
                        </div>

                        <div className="row">
                            <label>טקסט חופשי: </label>
                            <p>{this.props.data.free_text}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Contract;