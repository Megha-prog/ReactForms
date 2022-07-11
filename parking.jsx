import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
export default class ParkingTariff extends React.Component {
  Calculate = (e) => {
    e.preventDefault();
    var vtype = document.getElementById("vtype").value;
    var entrydate = document.getElementById("Entry").value;
    var entrytime = document.getElementById("EntryTime").value;
    var entryselect = "";
    var enter = document.getElementsByName("entryampm");
    for (var i = 0; i < enter.length; i++) {
      if (enter[i].checked) {
        entryselect = enter[i].value;
      }
    }
    var exitdate = document.getElementById("Exit").value;
    var exittime = document.getElementById("ExitTime").value;
    var exitselect = "";
    var exit = document.getElementsByName("exitampm");
    for (var j = 0; i < exit.length; i++) {
      exitselect = exit[j].value;
    }
    alert(
      vtype +
        "," +
        entrydate +
        "," +
        entrytime +
        "," +
        entryselect +
        "," +
        exitdate +
        "," +
        exittime +
        "," +
        exitselect
    );

    var edate = new Date(entrydate);
    var exdate = new Date(exitdate);
    alert(edate);
    alert(exdate);
    var diff = exdate.getTime() - edate.getTime();
    diff = Math.ceil(diff / (1000 * 60 * 60 * 24));
    alert("No of days:" + diff);
    if (entryselect === "PM") {
      entrytime = parseInt(entrytime) + 12;
    }
    if (exitselect === "PM") {
      exittime = parseInt(exittime) + 12;
    }
    alert(entrytime);
    alert(exittime);

    var difftime = Math.ceil(parseInt(exittime) - parseInt(entrytime));
    alert("Time Diff:" + difftime);
    var tarrif = 0;
    if (diff > 0) {
      alert("You cannot park for many number of days");
      return;
    } else {
      // eslint-disable-next-line eqeqeq
      if (vtype === "Two Wheeler") {
        if (difftime <= 0) tarrif = 10;
        if (difftime > 0 && difftime <= 2) tarrif = 15;
        if (difftime > 2 && difftime <= 7) {
          tarrif = 15 + 5 * (parseInt(difftime) - 2);
        }
        if (difftime > 7 && difftime <= 24) {
          tarrif = 45;
        }
      }
    }
    // eslint-disable-next-line eqeqeq
    if (vtype === "Car") {
      if (difftime <= 0) tarrif = 20;
      if (difftime > 0 && difftime <= 2) tarrif = 35;
      if (difftime > 2 && difftime <= 7) {
        tarrif = 35 + 10 * (parseInt(difftime) - 2);
      }
      if (difftime > 7 && difftime <= 24) {
        tarrif = 105;
      }
    }

    if (vtype === "Suv/Truck") {
      if (difftime <= 0) tarrif = 20;
      if (difftime > 0 && difftime <= 2) tarrif = 35;
      if (difftime > 2 && difftime <= 7) {
        tarrif = 35 + 10 * (parseInt(difftime) - 2);
      }
      if (difftime > 7 && difftime <= 24) {
        tarrif = 105;
      }
    }

    document.getElementById("result").innerHTML = tarrif;
  };

  render() {
    return (
      <div className="container-fluid">
        <form className="was-validated bg-primary">
          <table className="table table-hover">
            <tbody>
              <tr>
                <td>Select Vehicle Type</td>
                <td>
                  <select id="vtype" required>
                    <option value="">Select</option>
                    <option value="Two Wheeler">Two Wheeler</option>
                    <option value="Car">Car</option>
                    <option value="Others">Tempo/SUV/Mini Bus</option>
                  </select>
                </td>
                <td>
                  <span className="invalid-feedback">Select Vehicle Type</span>
                </td>
              </tr>
              <tr>
                <td>Enter Entry Date/Time</td>
                <td>
                  <input type="date" id="Entry" required />
                  <input
                    type="text"
                    id="EntryTime"
                    placeholder="12.00"
                    required
                  />
                  <input type="radio" name="entryampm" place="AM" required />
                  AM
                  <input type="radio" name="entryampm" value="PM" required />
                  PM
                </td>
                <td>
                  <span className="invalid-feedback">
                    Enter Proper Entry Date/Time
                  </span>
                </td>
              </tr>
              <tr>
                <td>Enter Exit Date/Time</td>
                <td>
                  <input type="date" id="Exit" required />
                  <input
                    type="text"
                    id="ExitTime"
                    placeholder="12.00"
                    required
                  />
                  <input type="radio" name="exitampm" value="AM" required />
                  AM
                  <input type="radio" name="exitampm" value="PM" required />
                  PM
                </td>
                <td>
                  <span className="invalid-feedback">
                    Enter Proper Exit Date/Time
                  </span>
                </td>
              </tr>
              <tr>
                <td>Cost:(Rs)</td>
                <td>
                  <span id="result"></span>
                </td>
              </tr>

              <tr>
                <td>
                  <button type="submit" onClick={this.Calculate}>
                    Calculate
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    );
  }
}
