import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
export default class SalarySlip extends React.Component {
    Calculate = (e) => {
        e.preventDefault();
        var v1 = parseInt(document.getElementById("ba").value);
        var v2 = parseInt(document.getElementById("da").value);
        var v3 = parseInt(document.getElementById("ha").value);
        var v4 = parseInt(document.getElementById("ca").value);
        var v5 = parseInt(document.getElementById("ea").value);
        var v6 = parseInt(document.getElementById("mi").value);
        var v7 = parseInt(document.getElementById("it").value);
        var v8 = parseInt(document.getElementById("pf").value);
        var gross = v1 + v2 + v3 + v4 + v5 + v6 + v7 + v8;
        var valsum = v7 + v8;
        var net = gross - valsum;
        alert("Gross Salary= " + gross);
        document.getElementById("gross").innerHTML = gross;
        alert("Net Salary= " + net);
        document.getElementById("net").innerHTML = net;
        localStorage.setItem("GROSS SALARY"+gross )
        localStorage.setItem("Net Salary" + net)
    }
    render() {
        return (
            <div className="container teal ">
                <form className="was-validated ">
                    <table className="w3-table-all ">
                        <tr>
                            <td>Basic Salary</td>
                            <td><input type="text" id="bs" placeholder="Enter basic salary" required /></td>
                        </tr>
                        <tr>
                            <td>Dearness Allowance</td>
                            <td><input type="text" id="da" placeholder="Enter dearness allowance" required /></td>
                        </tr>
                        <tr>
                            <td>House Rent Allowance</td>
                            <td><input type="text" id="ha" placeholder="Enter house rent allowance" required /></td>
                        </tr>
                        <tr>
                            <td>Conveyance Allowance</td>
                            <td><input type="text" id="ca" placeholder="Enter conveyance allowance" required /></td>
                        </tr>
                        <tr>
                            <td>Entertainment Allowance</td>
                            <td><input type="text" id="ea" placeholder="Enter entertainment allowance" required /></td>
                        </tr>
                        <tr>
                            <td>Medical Insurance</td>
                            <td><input type="text" id="mi" placeholder="Enter medical insurance" required /></td>
                        </tr>
                        <tr>
                            <td>Income Tax</td>
                            <td><input type="text" id="it" placeholder="Enter income tax" required /></td>
                        </tr>
                        <tr>
                            <td>Provident Fund</td>
                            <td><input type="text" id="pf" placeholder="Enter provident fund" required /></td>
                        </tr>
                        <tr>
                            <td>
                            <td><button type="submit" onClick={this.Calculate}>Calculate</button></td>
                            </td>
                        </tr>
                    </table>
                    <div>
                        <table className="table table-hover " >
                            <tbody>
                                <tr >
                                    <td><b>Gross Salary</b></td>
                                    <td id="gross"></td>
                                </tr>
                                <tr >
                                    <td><b>Net Salary</b></td>
                                    <td id="net"></td>
                                </tr>
                           </tbody>
                        </table>
                    </div>
                </form>
            </div>
        );
    }
}