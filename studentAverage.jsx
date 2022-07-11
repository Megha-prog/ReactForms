import React from "react";
import "./student.css";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default class StudentAvearge extends React.Component{
    constructor(){
        super();
        this.state={
            name:'',
            marketing:0,
            accounting:0,
            computing:0,
            total:0,
            average:0,
            grade:0

        }
    }


    InputData = (e) => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });

    }


    Calculate = (e) => {
        this.setState({ [e.target.name]: e.target.value }, () => {
        let total = parseInt(this.state.marketing) + parseInt(this.state.accounting) + parseInt(this.state.computing);
        this.setState({total: total });

        let avg = total / 3;
        this.setState({ average: avg });

        if (avg >= 75) {
            this.setState({ grade: "A" });
            return ;
        }
        if (avg >= 60 && avg < 75) {
            this.setState({ grade: "B" });
            return ;
        }
        if (avg > 60 && avg < 75) {
            this.setState({ grade: "C" });
            return;
        }
        if (avg >= 50 && avg < 60) {
            this.setState({ grade: "D" });
            return;
        }
        if (avg > 35 && avg < 50) {
            this.setState({ grade: "E" });
            return;
        }
        else {
            this.setState({ grade: "F" });
        }
        localStorage.setItem("Total",this.total);
        localStorage.setItem("Average",this.average);
        localStorage.setItem("Grade",this.grade);


    });

    
}




    render() {
        return (
            <div className="student-details">
                <h3>Student Details</h3>
                <hr />
                <form>
            
                    <tr style={{ listStyle: "none", borderRadius: "5px", width: "400px" }}>
                        <td>
                            <label>Name:</label>
                            <input type="text" name="name" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Marketing:</label>
                            <input type="number" name="marketing" onChange={this.InputData} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Accounting:</label>
                            <input type="number" name="accounting" onChange={this.InputData} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Computing:</label>
                            <input type="number" name="computing" onChange={this.InputData} />
                        </td>
                        <td>
                            <label>Total:</label>
                            <input type="number" name="total" value={this.state.total} readOnly />
                        </td>
                        <td>
                            <label>Average:</label>
                            <input type="number" name="average" value={this.state.average}  readOnly />
                        </td>
                        <td>
                            <label>Grade:</label>
                            <input type="text" name="grade" value={this.state.grade}  readOnly />
                        </td>

                    </tr>
                </form>
                <div className="student-details-btn">
                    <td><button type="submit" onClick={this.Calculate}>Calculate</button></td>  
                </div>


            </div>
        );
    }

}