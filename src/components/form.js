import React, { Component } from "react";

class Searchform extends React.Component {

    constructor() {
        super();
        this.state = {

            states: [],
            cities: []
        };
    }

    
    componentDidMount() {
        fetch("http://localhost:9090/States")
            .then(res => res.json())
            .then((result)=>this.setState(result))
        
        
        
    }
    changeState(e) {
        this.setState({ selectstate: e.target.value });
        this.setState({ cities: this.state.states.find(res => res.name === e.target.value).cities })

    }
     handleSubmit = (event) => {
        event.preventDefault();
       
      }
    render() {
        return (
        <form onSubmit={this.handleSubmit.bind(this)}>
            <div>
                <label><b>STATE</b></label>
                <select value={this.state.selectstate} onChange={this.changeState.bind(this)} required>
                    <option>Select State</option>
                    {this.state.states.map((res) => {
                        return <option>{res.name}</option>
                    })}
                </select>
                <div>
                    <label><b>CITIES</b></label>
                    <select>
                        <option>
                            Select Cities
                        </option>
                        {this.state.cities.map((res) => {
                            return <option>{res}</option>
                        })}
                    </select>
                </div>
                <div>
                    <label><b>Check In Date</b></label><br />
                    <input type="date"></input>
                </div>
                <div>
                    <label><b>Check Out Date</b></label><br />
                    <input type="date"></input>
                </div>
            </div>
            <br />
            <input type="submit" />
            </form>
        )
    }
}
export default Searchform;