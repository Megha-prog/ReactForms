import React from "react";
export default class ReunionForm extends React.Component
{
    constructor()
    {
        super();
        this.state={
            fname:'',
            lname:'',
            choice:'',
            phone:'',
            choice1:'',
            choice2:'',
            que:'',
        }
    }
        getData=(e)=>
        {
            e.preventDefault();
            this.setState({[e.target.name]:e.target.value})
        }
        printData=(e)=> {
            e.preventDefault();
            //alert(this.state.fname);
            if(this.state.fname==="")
            {
                alert("Name can Not be Empty");
                return;
            }
            if(this.state.phone==="")
            {
                alert("Phone Number can not be empty");
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
render()
{
    return(
            <div className="container-fluid" style={{backgroundColor:"pink",color:"black"}}>
            <form  style={{backgroundColor:"yellow",color:"black"}}>
            <h1 style={{ backgroundColor:"red",fontFamily:"sans-serif",fontStyle:"strong",color:"white" }} >Reunion Form</h1>
            <hr />
            <center><p >Time to see some good memories || See You Soon !!</p></center> 
            <hr />
            <hr />
                <table className="table table-hover">
            <tbody>
            <tr>
              <td>Would you like to join us</td>
                <td><input type="radio" name="choice" value="yes" onChange={this.getData} required/> Yes
                <input type="radio" name="choice" value="no" onChange={this.getData} required/> No </td>
                </tr>
                <tr>
                <td>Enter Name</td>
                <td><input type="text" name="fname" placeholder="First Name" onInput={this.getData}  /><input type="text" name="lname" placeholder="Last Name"  onInput={this.getData} /></td>
                <td><span className="invalid-feedback">Enter Correct Details</span></td>
                </tr>
                <tr>
                <td>Enter Phone Number</td>
                <td><input type="number" name="phone" required onInput={this.getData} /></td>
                <td><span className="invalid-feedback">Enter phone</span></td>
                </tr>
                <tr>
                <td>Your Meal Preference</td>
                <td><input type="radio" name="choice1" value="veg" onChange={this.getData}/> Veg
                <input type="radio" name="choice1" value="nonveg" onChange={this.getData}/> Non Veg </td>
                </tr>
                <tr>
                <td>What Kind of Game</td>
                <td><input type="checkbox" name="choice2" value="indoor" onChange={this.getData}/> Indoor
                <input type="checkbox" name="choice2" value="board" onChange={this.getData}/> Board
                <input type="checkbox" name="choice2" value="Ball_games" onChange={this.getData}/> Ball Games
                <input type="checkbox" name="choice2" value="outdoor" onChange={this.getData}/> OutDoor </td>
                </tr>
                <tr>
                <td>Do You have any Questions ?</td>
                <td><textarea type="text" name="que" required onInput={this.getData} /></td>
                </tr>
                
                
            <tr>
                <td colSpan={2}>
                <center><button type="button" onClick={this.printData}>SUBMIT</button></center>
                </td>
            </tr>
            
                </tbody>
                </table>
                </form>
                </div>
    )
}
}