import React from "react";
import{Link} from "react-router-dom";

const Navbar=()=>{
    return(
        <div className="Nav">
            
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='test'>Take Test</Link></li>
                <li><Link to='score'>Score History</Link></li>
                
            </ul>
        </div>
    )
}
export default Navbar;