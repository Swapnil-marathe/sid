import React, { Component } from "react";


class DistDropdown extends React.Component {
    constructor() {
        super();
        this.state = {
            states: [],
            city: [],
            selectstate: '',
            cityselect: '',
            Hotel: []
        }
    }
    search = 0;

    Citychange(e) {

        this.setState({ cityselect: e.target.value });
        this.setState({ Hotel: [] })

    }



    componentDidMount() {

        fetch("http://localhost:8080/States")
            .then(response => response.json())
            .then(states => this.setState({ states: states }));

    }

    changeState(e) {

        this.setState({ selectstate: e.target.value });
        this.setState({ Hotel: [] })

        fetch("http://localhost:8080/CitiesbyName/" + e.target.value)
            .then(response => response.json())
            .then(city => this.setState({ city: city }))

        //this.setState({ Id: this.state.states.find(res => res.state_Name === e.target.value ).state_ID})

        //this.setState({ city: this.state.city.find(res => res.state_ID === e.target.value.state_ID ).city })

    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch("http://localhost:8080/Hotels/" + this.state.cityselect)
            .then(response => response.json())
            .then(hotel => this.setState({ Hotel: hotel }))

    }

    render() {
        return <div>

            <form className="form" onSubmit={this.handleSubmit.bind(this)}>
                <p1>Select State</p1>
                <select className="select" value={this.state.selectstate} onChange={this.changeState.bind(this)} required>
                    <option required>-select State-</option>
                    {
                        this.state.states.map(states => <option value={states.name}>{states.name}</option>)
                    }
                </select>
                <br />
                <p1>Select District</p1>
                <select className="select" value={this.state.cityselect} onChange={this.Citychange.bind(this)} required>
                    <option required>-select district-</option>
                    {
                        this.state.city.map(city => <option value={city.id}>{city.name}</option>)
                    }
                </select>
                <div>
                    <label><b>Check In Date</b></label><br />
                    <input type="date" required></input>
                </div>
                <div>
                    <label><b>Check Out Date</b></label><br />
                    <input type="date" required ></input>
                </div>
                <br />
                <input type="submit" value="SEARCH" />
            </form>
            <div>

                <h2>HOTELS DATA</h2>
                <table>
                    <>{this.state.Hotel.length > 0 && this.state.cityselect ? (<><thead>
                        <tr>

                            <th><b>Id</b></th>
                            <th><b>Name</b></th>
                            <th><b>Address</b></th>
                            <th><b>Phone</b></th>
                            <th><b>Email</b></th>
                            <th><b>Select</b></th>


                        </tr>
                    </thead>

                        <tbody>
                            {this.state.Hotel.map(htl => (
                                <tr key={htl.hotel_ID}>

                                    <td>{htl.hotel_ID}</td>
                                    <td>{htl.hotel_Name}</td>
                                    <td>{htl.address}</td>
                                    <td>{htl.phone}</td>
                                    <td>{htl.email}</td>

                                    <td> <a href={'/UserDetails/' + htl.hotel_ID}>Select</a></td>

                                </tr>
                            ))}
                        </tbody></>) : ""} </>
                </table>
            </div>
        </div>
    }
} export default DistDropdown;