import React from "react";
import { useState } from "react";
export default function MultipleInput()
{
    const[inputs,setInputs]=useState("")
    const GetData=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setInputs(values=>({...values,[name]:value}))
        //... A component is changing the default value state to an uncontrolled state
        //in some UI we will call in OnChange, OnInput
​
    }
    const ShowData=(e)=>{
        e.preventDefault();
        alert(inputs.about + ","+inputs.apply + ","+inputs.view+" ,"+ inputs.username + " ," +inputs.move);
    }
    return(
    
        <div>
            <h2>Apply for Rent</h2>
        <form>
           <div>
            <label>How did you hear about Us</label>
            <select name="about" onChange={GetData}>
                <option value=""></option>
                <option value="Google">Google</option>
                <option value="Facebook">Facebook</option>
                <option value="Instagram">Instagram</option>
                <option value="Linkedin">Linkedin</option>
            </select>
            </div>
            <div>
            <label> i would like to apply for </label>
            <select name="apply" onChange={GetData}>
                <option value=""></option>
                <option value="Rent">Rent</option>
                <option value="Buy">Buy</option>
                <option value="Rent to own">Rent to own</option>
            </select>
            </div>
            <div>
                <label>Accommodation Infromation</label>
            </div>
            <div>
                <label>Which house are you interrested In</label>
                <input type="text" name="username" 
                 onChange={GetData}/>
            </div>
            <div>
                <label>When are you interested to view house</label>
                <input type="text" name="view"  onChange={GetData}/>
            </div>
            <div>
            <label>When are you looking to move</label>
                <input type="text" name="move"  onChange={GetData}/>
            </div>
            <div>
                <button type="button" onClick={ShowData}>Show</button>
            </div>
        </form>
        </div>
     )
}