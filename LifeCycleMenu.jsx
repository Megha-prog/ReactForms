import {BrowserRouter as Router,Link,Route,Routes} from "react-router-dom";
import { Mounting } from "../LifeCycle/Mounting";
export default function MenuLifeCycle()
{
    <Router>
        <nav>
            <ol>
                <li><Link to="/Mounting" >Mounting</Link></li>
            </ol>
            <Routes>
                <Route rxact path="/Mounting" element ={<Mounting/>}></Route>
            </Routes>
        </nav>
    </Router>
}