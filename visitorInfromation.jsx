import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
export default class VisitorsInformation extends React.Component {
    Session = (e) => {
        e.preventDefault();
        var namef = document.getElementById("fname").value;
        var namel = document.getElementById("lname").value;
        var comp = document.getElementById("company").value;
        var visit = document.getElementById("visiting").value;
        var idT = document.getElementById("pan").value;
        var idnum = document.getElementById("num").value;
        var vnum = document.getElementById("vehicle").value;
        var cnum = document.getElementById("contact").value;
        var purpose = document.getElementById("purpose").value;
        if (namef === "")
        {
            alert('First Name cannot be empty');
            return;
        }
        if (namef.trim().length === 0) {
            alert("Entred only spaces")
            return;
        }
        if (namel=== "")
        {
            alert('Last Name cannot be empty');
            return;
        }
        if (namel.trim().length === 0) {
            alert("Entred only spaces")
            return;
        }
        if (comp === "")
        {
            alert('Company Name cannot be empty');
            return;
        }
        if (comp.trim().length === 0) {
            alert("Entred only spaces")
            return;
        }
        if (visit === "")
        {
            alert('Visiting cannot be empty');
            return;
        }
        if (visit.trim().length === 0) {
            alert("Entred only spaces")
            return;
        }
        if (idT === "")
        {
            alert('ID Type cannot be empty');
            return;
        }
        if (idT.trim().length === 0) {
            alert("Entred only spaces")
            return;
        }
        if (idnum === "")
        {
            alert('ID number cannot be empty');
            return;
        }
        if (idnum.trim().length === 0) {
            alert("Entred only spaces")
            return;
        }
        if (vnum === "")
        {
            alert('Vehicle Number cannot be empty');
            return;
        }
        if (vnum.trim().length === 0) {
            alert("Entred only spaces")
            return;
        }
    
        if (isNaN(cnum))
        {
            alert('Enter valid Contact number ');
            return;
        }
        if (cnum.trim().length === 0) {
            alert("Entred only spaces")
            return;
        }
        if (purpose === "")
        {
            alert('Purpose of Visit cannot be empty');
            return;
        }
        if (purpose.trim().length === 0) {
            alert("Entred only spaces")
            return;
        }
        if(typeof(Storage)!== "undefined")
            {
                localStorage.setItem("First Name",namef);
                localStorage.setItem("Last Name",namel);
                localStorage.setItem("Company",comp);
                localStorage.setItem("Visiting",visit);
                localStorage.setItem("ID Type",idT);
                localStorage.setItem("ID number",idnum);
                localStorage.setItem("Vehicle Number",vnum);
                localStorage.setItem("Contact number",cnum);
                localStorage.setItem("Purpose of Visit",purpose);
                alert('Data stored in local storage')
            }
            else
            {
                alert('Browser does not support storage')
            }
    }

    render() {
        return (
            <div className="container">
                <form className="was-validated bg-secondary">
                    <table className="table table-hover">
                        <tbody>
                            <tr>
                                <th >VISITOR INFORMATION</th>
                            </tr>
                            <tr>
                                <td>First Name:</td>
                                <td><input type="text" id="fname" placeholder="Ex: Megha" required /></td>
                            </tr>
                            <tr>
                                <td>Last Name:</td>
                                <td><input type="text" id="lname" placeholder="Ex: Dogra" required /></td>
                            </tr>
                            <tr>
                                <td>Company:</td>
                                <td><input type="text" id="company" placeholder="Ex: Axis Bank" required /></td>
                            </tr>
                            <tr>
                                <td>Visiting:</td>
                                <td><input type="text" id="visiting" placeholder="Ex: MD" required /></td>
                            </tr>
                            <tr>
                                <td>ID Type:</td>
                                <td><input type="text" id="pan" placeholder="Ex: PAN Card" required /></td>
                                <td>ID NUM:</td>
                                <td><input type="text" id="num" placeholder="Ex: LWP67D" required /></td>
                            </tr>
                            <tr>
                                <td>Vehicle Number:</td>
                                <td><input type="text" id="vehicle" placeholder="Ex: KA06-EQ05" required /></td>
                            </tr>
                            <tr>
                                <td>Contact Number:</td>
                                <td><input type="text" pattern="\d{10}" id="contact" placeholder="Enter 10 digit mobile number" required /></td>
                            </tr>
                            <tr>
                                <td>Purpose of Visit:</td>
                                <td><input type="text" id="purpose" placeholder="Ex: Training" required /></td>
                            </tr>
                           
                            <tr>
                                <button type="button" value="Cancel" margin="5px"   padding="5px" border= "1px solid bg-primary">Cancel</button>
                               
                                <td>
                                    <td><button type="submit" onClick={this.Session}  margin="5px"   padding="5px" border= "1px solid bg-danger" >Save</button></td>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        );
    }
}