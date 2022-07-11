import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
export default class EmiCalculator extends React.Component {
  Calculate = (e) => {
    e.preventDefault();

    var loanAmount = document.getElementById("amount").value;
    var i_rate = document.getElementById("interest").value;
    var time = document.getElementById("tenure").value;

    if (loanAmount !== "" && i_rate !== "" && time !== "") {
     var months = time * 12;
     var  m_rate = i_rate / (12 * 100);
     var  numerator = Math.pow(1 + m_rate, months);
     var  denominator = numerator - 1;
     var  emi = (loanAmount * m_rate * (numerator / denominator)).toPrecision(5);
      var total_amt = months * parseFloat(emi);
      var total_interest = Math.floor(total_amt - loanAmount).toPrecision(5);

     var  pay_amount = document.querySelector(".tamount");
       pay_amount.innerHTML = parseFloat(total_amt);

     var  pay_interest = document.querySelector(".tinterest");
      pay_interest.innerHTML = parseFloat(total_interest);

     var  pay_emi = document.querySelector(".temi");
          pay_emi.innerHTML = parseFloat(emi);
    } else {
      alert("Please enter required fields");
    }
    localStorage.setItem("PAY AMOUNT" , pay_amount);
    localStorage.setItem("INTEREST",pay_interest);
    localStorage.setItem("EMI",pay_emi);
    alert("Data got stored in local");
  }
  render() {
    return (
      <div class="card bg-primary text-dark p-5 m-5">
        <form>
        <h2>EMI Calculator</h2>
        <table class="table">
              <tr>
                  <td>
                      <label for="" >Amount</label>
                  </td>
                  <td> <input type="number" id="amount" required /></td>
                  <td>
                      <label for="" >Tenure(Years)</label>
                  </td>
                  <td> <input type="number" id="tenure" required /></td> 
              </tr>
         
          
              <tr>
                  <td>
                      <label for="">Interest(%)</label>
                  </td>
                  <td>
                       <input type="number" id="interest" required />
                  </td>
                  <td>
                      <label for="">EMI</label>
                  </td>
                  <td><span  className=" temi " type="text"> </span></td>
                  
               
                 
              </tr>

              <tr>
                  <td>
                      <label for="">Total Interest</label>
                  </td>
                  <td><span  className=" tinterest " type="text"> </span></td>
                 
                  <td>
                      <label for="">Total Amount</label>
                  </td>
                  <td><span name=""  className=" tamount " type="text"> </span></td>
                 
              </tr>




              <tr>
                  <td>
                      <label for=""></label>
                  </td>
                  <td><span name="" id="" className="btn btn-success" href="#" role="button" onClick={this.Calculate}>Calculate </span></td>
                  <td>
                      <button type="reset" className="btn btn-danger" value="reset">Reset</button>
                  </td>        
              </tr>
    
      </table>
      </form>
      </div>
    );
  }
}
