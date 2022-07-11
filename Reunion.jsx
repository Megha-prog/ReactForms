import React from 'react';
import { useState } from 'react';
export default function Reunion() {
    const [inputs, setInputs] = useState("");
    const GetData = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }
   
       const PrintData=(e)=>
        {
            e.preventDefault();
            alert(inputs.fname+ " ,"+ inputs.phone +" ,"+ inputs.choice+" ,"+ inputs.choice1+" ,"+ inputs.choice2 + " ,"+inputs.que );
            this.setState({[e.target.name]:e.target.value})
        
            if(this.state.fname==="")
            {
                //alert("Name can Not be Empty");
                return;
            }
            if(this.state.phone==="")
            {
                //alert("Phone Number can not be empty");
                return;
            }
            
            localStorage.setItem("CHOICE_ON_ATTENDING",this.state.choice);
            localStorage.setItem("FNAME",this.state.fname);
            localStorage.setItem("LNAME",this.state.lname);
            localStorage.setItem("PHONE",this.state.phone);
            localStorage.setItem("CHOICE_ON_MEALS",this.state.choice1);
            localStorage.setItem("CHOICE_ON_GAMES",this.state.choice2);
            localStorage.setItem("QUESTIONS",this.state.que);
                       alert("Date Stored in Local Storage !!");
        }

    
        
    return(
    <div className="container-fluid" style={{backgroundColor:"pink",color:"black"}}>
    <form  style={{backgroundColor:"pink",color:"black"}}>
    <h1 style={{ backgroundColor:"yellow",fontFamily:"sans-serif",fontStyle:"strong",color:"black" }} >Reunion Form</h1>
    <hr />
    <center><p >Time to see some good memories || See You Soon !!</p></center> 
    <hr />
    <hr />
        <table className="table table-hover">
    <tbody>
    <tr>
      <td>Would you like to join us</td>
        <td><input type="radio" name="choice" value="yes" onChange={GetData} required/> Yes
        <input type="radio" name="choice" value="no" onChange={GetData} required/> No </td>
        </tr>
        <tr>
        <td>Enter Name</td>
        <td><input type="text" name="fname" placeholder="First Name" onInput={GetData}  /><input type="text" name="lname" placeholder="Last Name"  onInput={GetData} /></td>
        <td><span className="invalid-feedback">Enter Correct Details</span></td>
        </tr>
        <tr>
        <td>Enter Phone Number</td>
        <td><input type="number" name="phone" required onInput={GetData} /></td>
        <td><span className="invalid-feedback">Enter phone</span></td>
        </tr>
        <tr>
        <td>Your Meal Preference</td>
        <td><input type="radio" name="choice1" value="veg" onChange={GetData}/> Veg
        <input type="radio" name="choice1" value="nonveg" onChange={GetData}/> Non Veg </td>
        </tr>
        <tr>
        <td>What Kind of Game</td>
        <td><input type="checkbox" name="choice2" value="indoor" onChange={GetData}/> Indoor
        <input type="checkbox" name="choice2" value="board" onChange={GetData}/> Board
        <input type="checkbox" name="choice2" value="Ball_games" onChange={GetData}/> Ball Games
        <input type="checkbox" name="choice2" value="outdoor" onChange={GetData}/> OutDoor </td>
        </tr>
        <tr>
        <td>Do You have any Questions ?</td>
        <td><textarea type="text" name="que" required onInput={GetData} /></td>
        </tr>
        
        
    <tr>
        <td colSpan={2}>
        <center><button type="button" onClick={PrintData}>SUBMIT</button></center>
        </td>
    </tr>
    
        </tbody>
        </table>
        </form>
        </div> 
        );
}
