import React from "react";
//import "./student.css";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
export default class StudentGrade extends React.Component {
    Calculate = (e) => {
        e.preventDefault();
            // Getting input from user into height variable.
            let name = document.querySelector("#name").value;
            let accounting = document.querySelector("#accounting").value;
            let computing = document.querySelector("#computing").value;
            let marketing = document.querySelector("#marketing").value;
            let grades = "";
            
            // Input is string so typecasting is necessary. */
            let totalgrades =
              parseFloat(accounting) +
              parseFloat(marketing) +
              parseFloat(computing) ;
            
            // Checking the condition for the providing the 
            // grade to student based on percentage
            let percentage = (totalgrades / 300) * 100;
            if (percentage <= 100 && percentage >= 80) {
              grades = "A";
            } else if (percentage <= 79 && percentage >= 60) {
              grades = "B";
            } else if (percentage <= 59 && percentage >= 40) {
              grades = "C";
            } else {
              grades = "F";
            }
            // Checking the values are empty if empty than
            // show please fill them
            if (accounting === "" || marketing === "" 
                      || computing ==="" || name === "") {
              document.querySelector("#showdata").innerHTML
                   = "Please enter all the fields";
            } else {
            
              // Checking the condition for the fail and pass
              if (percentage >= 39.5) {
                document.querySelector(
                  "#showdata"
                ).innerHTML = 
                  ` Out of 400 your total is  ${totalgrades} 
                  and percentage is ${percentage}%. <br> 
                  Your grade is ${grades}. You are Pass. `;
              } else {
                document.querySelector(
                  "#showdata"
                ).innerHTML = 
                  ` Out of 300 your total is  ${totalgrades} 
                  and percentage is ${percentage}%. <br> 
                  Your grade is ${grades}. You are Fail. `;
              }
            
            }
        }
        
    render() {
        return(
            <div class="container">
                <form>
                <h1>Student grade calculator</h1>
                <div class="screen-body-item">
                    <div className="app">
                    <div class="form-group">
                        <input
                        type="text"
                        class="form-control"
                        placeholder="Name"
                        id="name"
                        />
                    </div>
                    <div className="form-group">
                        <input
                        type="text"
                        class="form-control"
                        placeholder="Accounting"
                        id="accounting"
                        />
                    </div>
                    <div className="form-group">
                        <input
                        type="text"
                        class="form-control"
                        placeholder="Computing"
                        id="computing"
                        />
                    </div>
                    <div className="form-group">
                        <input
                        type="text"
                        class="form-control"
                        placeholder="Marketing"
                        id="marketing"
                        />
                    </div>
                    <td><button type="submit" onClick={this.Calculate}>Calculate</button></td>
                    </div>
                   
                </div>
                <div className="form-group showdata">
                    <p id="showdata"></p>
                </div>
                </form>
                </div>
              

                    );
             
        }
    }  
