import { BrowserRouter as Router,Link ,Route,Routes } from "react-router-dom";
import StudentGrade from './StudentGrade';
import EmiCalculator from './emi';
import ParkingTariff from './parking';
import PizzaOrder from './pizzaorder';
import SalarySlip from './salary';
import StudentAvearge from './studentAverage';
import VisitorsInformation from "./visitorInfromation";
import RoomTarrif from "./RoomTarrif";
import RoomCost from "./HotelRoom";
import ReunionForm from "./ReniounForm";
import Reunion from "./Reunion";
import './menu.css';

export default function Menu()
{
    return(
        <Router>
            <nav>
                <ol className="horizontal">
                    <li><Link to="/StudentGrade">StudentGrade </Link></li>
                    <li><Link to="/emi">EMI Calcualtion</Link></li>
                    <li><Link to="/parking">Parking Cost</Link></li>
                    <li><Link to="/salary">SalarySlip</Link></li>
                    <li><Link to="/studentAverage">StudentAveage</Link></li>
                    <li><Link to="/visitorsInformation">Visitor Infromation</Link></li>
                    <li><Link to="/pizza">Pizza Order</Link></li>
                    <li><Link to="/room">Room Tarrif</Link></li>  
                    <li><Link to="/roomcost">Hotel Reservation  Cost</Link></li> 
                    <li><Link to="/reunion">ReniounForm</Link></li> 
                    <li><Link to="/reunion2">Renioun</Link></li> 
                    
                </ol>
                <Routes>
                    <Route exact path="/StudentGrade" element={<StudentGrade/>}></Route>
                    <Route exact path="/emi" element={<EmiCalculator/>}></Route>
                    <Route exact path="/parking" element={<ParkingTariff/>}></Route>
                    <Route exact path="/salary" element={<SalarySlip/>}></Route>
                    <Route exact path="/studentAverage" element={<StudentAvearge/>}></Route>
                    <Route exact path="/visitorsInformation" element={<VisitorsInformation/>}></Route>
                    <Route exact path="/pizza" element={<PizzaOrder/>}></Route>
                    <Route exact path="/room" element={<RoomTarrif/>}></Route>  
                    <Route exact path="/roomcost" element={<RoomCost/>}></Route>
                    <Route exact path="/reunion" element={<ReunionForm/>}></Route>
                    <Route exact path="/reunion2" element={<Reunion/>}></Route>
                </Routes>
            </nav>

        </Router>
    )
}