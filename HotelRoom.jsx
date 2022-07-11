import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
export default class RoomCost extends React.Component {
    Calculate = (e) => {
        e.preventDefault();
            let fname = document.getElementById('fname').value;
            if(fname==="")
                    {
                        alert("Name cannot be empty");
                        return;
                    }
                    if(fname.trim().length===0)
                    {
                        alert("You have entered only spaces");
                        return;
                    }
            let lname = document.getElementById('lname').value;
            if(fname==="")
                    {
                        alert("Name cannot be empty");
                        return;
                    }
                    if(lname.trim().length===0)
                    {
                        alert("You have entered only spaces");
                        return;
                    }
            let address = document.getElementById('address1').value;
            if(address===""){
                alert("Address cannot be empty");
            }
            let city = document.getElementById('city').value;
            if(city===""){
                alert("City cannot be empty");
            }
            let state = document.getElementById('state').value;
            if(state===""){
                alert("State cannot be empty");
            }
            let zip = document.getElementById('zip').value;
            if(zip===""){
                alert("zip cannot be empty");
            }
            let phone = document.getElementById('phone').value;
            if(phone===""){
                alert("phone cannot be empty");
            }
            let email = document.getElementById('email').value;
            if(email===""){
                alert("zip cannot be empty");
            }
        
            let roomPreference="";
                    let rP="";
                    roomPreference=document.getElementsByName("room");
                    alert(roomPreference.length);
                    for(var i=0;i<roomPreference.length;i++)
                    {
                        if(roomPreference[i].checked)//checked is inbuilt property of javascript
                        //checked returns true/false
                        {
                            rP=roomPreference[i].value;
                            
                        }
                    }
                    alert(rP);
                    if(rP.length===0)
                    {
                        alert("Select a Room Preference");
                        return;
                    }
            let roomType="";
                    let rT="";
                    roomType=document.getElementsByName("roomType");
                    alert(roomType.length);
                    for(var j=0;i<roomType.length;i++)
                    {
                        if(roomType[j].checked)//checked is inbuilt property of javascript
                        //checked returns true/false
                        {
                            rT=roomType[j].value;
                            
                        }
                    }
                    alert(rT);
                    if(rT.length===0)
                    {
                        alert("Select a Room Type");
                        return;
                    }
            
            let checkInDate = document.getElementById('checkInDate').value;        
            let checkOutDate = document.getElementById('checkOutDate').value;
        
            var cin = new Date(checkInDate);
            var cout = new Date(checkOutDate);
            alert(cin);
            alert(cout);
            let days =  Math.ceil((cout.getTime()-cin.getTime())/(1000*24*60*60));
            // console.log(days);
            alert(days);
            let tarrif = days*(parseInt(rP)+parseInt(rT));
            console.log(tarrif);
            //alert("Your total amount is "+ tarrif);
        }
    

         render() {
            return(
                <div className="conatiner-fluid ">
                <h1 className="text-center">Room Tarrif Calculator</h1>
                <div className="container" id="formContainer">
                    <form action=""  className="was-validated row g-3">
                        <div className="col-md-6">
                            <label for="fname" className="form-label">First Name</label>
                            <input type="text" className="form-control" id="fname" name="fname" required/>
                        </div>
                        <div className="col-md-6">
                            <label for="lname" className="form-label">Last Name</label>
                            <input type="text" className="form-control" id="lname" name="lname" required />
                        </div>
                        <div className="col-md-6">
                            <label for="address1" className="form-label">Address 1</label>
                            <input type="text" className="form-control" id="address1" name="address1" required />
                        </div>
                        <div className="col-md-6">
                            <label for="address2" className="form-label">Address 2</label>
                            <input type="text" className="form-control" id="address2" name="address2"/>
                        </div>
                        <div className="col-md-6">
                            <label for="city" className="form-label">City</label>
                            <input type="text" className="form-control" id="city" name="city" required />
                            <div className="invalid-feedback">
                                Please provide a valid city.
                            </div>
                        </div>
                        <div className="col-md-3">
                            <label for="state" className="form-label">State</label>
                            <input type="text" className="form-control" id="state" name="state" required />
                            <div className="invalid-feedback">
                                Please provide a valid state.
                            </div>
                        </div>
                        <div className="col-md-3">
                            <label for="zip" className="form-label">Zip</label>
                            <input type="text" className="form-control" id="zip" name="zip" required />
                            <div className="invalid-feedback">
                                Please provide a valid zip.
                            </div>
                        </div>
                        <div className="col-md-6">
                            <label for="phone" className="form-label">Phone</label>
                            <input type="tel" className="form-control" id="phone" name="phone" required />
                            <div className="invalid-feedback">
                                Please provide valid phone number.
                            </div>
                        </div>
                        <div className="col-md-6">
                            <label for="email" className="form-label">Email Address</label>
                            <input type="email" className="form-control" id="email" name="email" required />
                            <div classame="invalid-feedback">
                                Please provide valid email address.
                            </div>
                        </div>
                        <div className="col-md-3 ">
                            <label for="checkInDate" className="form-label">Check-in Date</label>
                            <input type="date" className="form-control datepicker" id="checkInDate" name="checkInDate" required />
                        </div>
                        <div className="col-md-3 ">
                            <label for="checkInTime" class="form-label">Check-in Time</label>
                            <input type="time" class="form-control " id="checkInTime" name="checkInTime" required />
                        </div>
                        <div className="col-md-3 ">
                            <label for="checkOutDate" className="form-label">Check-out Date</label>
                            <input type="date" className="form-control datepicker" id="checkOutDate" name="checkOutDate" required />
                        </div>
                        <div className="col-md-3 ">
                            <label for="checkOutTime" className="form-label">Check-out Time</label>
                            <input type="time" className="form-control " id="checkOutTime" name="checkOutTime" required />
                        </div>
                        <div className="form-check form-control col-md-3">
                            <label className="form-check-label" for="room">Room Preference &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </label>
                            <input type="radio" className="form-input-check " value="1000" name="room" required />Standard&nbsp;&nbsp;
                            <input type="radio" className="form-input-check " value="2000" name="room" required/>Deluxe&nbsp;&nbsp;
                            <input type="radio" className="form-input-check " value="3000" name="room" required />Suite&nbsp;&nbsp;
                            <div className="invalid-feedback" >Select any one Room Preference</div>
                        </div>
                        <div className="col-md-3">
                            <label for="adults" className="form-label">Adults</label>
                            <select className="form-select" name="adults" id="adults" required>
                                <option value="">Select</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                            <div className="invalid-feedback">Select number of adults. It cannot be blank</div>
                        </div>
                        <div className="col-md-3">
                            <label for="children" class="form-label">Children</label>
                            <select className="form-select" name="children" id="children" required>
                                <option value="">Select</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                            <div className="invalid-feedback">Select number of children. It cannot be blank</div>
                        </div>
                        <div className="form-check form-control col-md-3">
                            <label className="form-check-label" for="roomType">Room Type &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </label>
                            <input type="radio" className="form-input-check " value="500" name="roomType" required />Single NonAC&nbsp;&nbsp;
                            <input type="radio" className="form-input-check " value="800" name="roomType" required />Single AC&nbsp;&nbsp;
                            <input type="radio" className="form-input-check " value="1000" name="roomType" required />Double NonAC&nbsp;&nbsp;
                            <input type="radio" classNAME="form-input-check " value="2000" name="roomType" required />Double AC&nbsp;&nbsp;
                            <div className="invalid-feedback" >Select any one Room Type</div>
                        </div>
                        <button className="btn btn-primary" type="submit" id="submit" onclick={this.Calculate}>Calculate</button>
                    </form>
                </div>
            </div>
            );
        }

    }