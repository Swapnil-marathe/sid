import React from "react";
import states from "./data";
console.log(states);
class Stateselect extends React.Component{

    render(){
        return(
        <div>
            <select id="state">
                <option selected>
                    Select State
                </option>
                
                {
                    states.States.map((result)=>(<option text={result.Id}>{result.name}</option>))
                }
               
                
            </select>
        </div>)
    }
}
export default Stateselect;