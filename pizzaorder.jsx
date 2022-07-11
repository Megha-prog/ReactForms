import React from "react";
import "./pizza.css";
import p1 from '../images/p1.jpg'
import p2 from '../images/p2.jpg'
import p3 from '../images/p3.jpg'
export default class PizzaOrder extends React.Component
{
    constructor()
    {
        super();
        this.state={
            name:'',
            phone:0,
            cb1:'',
            unit1:0,
            qty1:0,
            total1:0,
            cb2:'',
            unit2:0,
            qty2:0,
            total2:0,
            cb3:'',
            unit3:0,
            qty3:0,
            total3:0,
            total4:0,
          
           
        };
        
    }
    InputData=(e)=>{
        e.preventDefault();
        this.setState({[e.target.name]:e.target.value});
         
        
    }
    Cb1Change=(e)=>{
        
        this.setState({qty1:e.target.value}, () => { 
           
            let price1=document.getElementById("unit1").value;
        
      
        
        let total=parseFloat(this.state.qty1)*parseFloat(price1);
        this.setState({total1:total});
        });
    
        
    }
    Cb2Change=(e)=>{
        this.setState({qty2:e.target.value}, () => { 
            
            let price2=document.getElementById("unit2").value;
        
      
        
        let total=parseFloat(this.state.qty2)*parseFloat(price2);
        this.setState({total2:total});
        });
    }
    Cb3Change=(e)=>{
        this.setState({qty3:e.target.value}, () => { 
            
            let price3=document.getElementById("unit3").value;
        
      
        
        let total=parseFloat(this.state.qty3)*parseFloat(price3);
        this.setState({total3:total});
        });
         
    }
    Calculate=(e)=>{
        e.preventDefault();
        let finaltotal=parseFloat(this.state.total1)+parseFloat(this.state.total2)+parseFloat(this.state.total3);
        this.setState({total4:finaltotal});
        localStorage.setItem("Name",this.state.name);
        localStorage.setItem("phonenumber",this.state.phone);
        localStorage.setItem("totalamt",this.state.total4);
        alert("Data Stored");
    }
    render()
    {
        return(
            <div>
                <h1><i>Pizza Order Form</i></h1>
<form name="order">&nbsp;&nbsp;
    Customer Name <input style={{height: "25px"}} type="text" name="name" required onInput={this.InputData}/>&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
    Customer Phone Number <input style={{height: "25px"}} type="text" name="phone" required onInput={this.InputData}/>
<br/>
<br/>
<br/>
    <table align="center">
        <tbody>
        <tr>
            <th> Pizza</th>
            <th > Pizza Choice</th>
            <th></th>
            <th> Quantity</th>
            <th> Unit Price</th>
            <th> Total Price</th>
        </tr>
        <tr>
            <td style={{border: "dashed"}}> <img src={p1} alt="" width="200" height="200"/></td>
            <td><input type="checkbox"  value="bigitaly" name="cb1"  onChange={this.InputData}/> Big Italy </td> 
            <td></td>
            <td><input type="text"  name="qty1"   onChange={this.Cb1Change}/></td>
            <td><input type="text" id="unit1" name="unit1" value="210"  /></td>
            <td> <input type="number" name="total1"  value={this.state.total1} readOnly /> </td>
        </tr>
        <tr>
            <td style={{border: "dashed"}}> <img src={p2} alt="" width="200" height="200"/></td>
            <td><input type="checkbox"  value="meat" name="cb2" onChange={this.InputData}  /> Meat Lover </td> 
            <td></td>
            <td><input type="text"  name="qty2" onChange={this.Cb2Change}/></td>
            <td><input type="number" id="unit2" value="250.00" readOnly/></td>
            <td > <input type="number" name="total2"  value={this.state.total2} readOnly/> </td>
        </tr>
        <tr>
            <td style={{border: "dashed"}}> <img src={p3} alt="" width="200" height="200"/></td>
            <td><input type="checkbox"  value="veggie" name="cb3" onChange={this.InputData} /> veggie Lover </td> 
            <td></td>
            <td><input type="text" name="qty3" onChange={this.Cb3Change} /></td>
            <td><input type="number" id="unit3" value="199.00" readOnly /></td>
            <td> <input type="number" name="total3"  value={this.state.total3} readOnly /> </td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>Total Order Value :</td>
            <td> <input type="text" name="total4" readOnly value={this.state.total4}/> </td>
        </tr>
        <tr>
           <td></td>
           <td> <input type="button" value="Calculate Order total" onClick={this.Calculate}/></td>
           <td></td> 
            <td> <input type="reset" value="Reset Order"/></td> 
        </tr>
        </tbody>
    </table>
</form>
            </div>
            
        )
    }
}