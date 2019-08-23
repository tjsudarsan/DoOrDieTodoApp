import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";

var arr = [
    {
        name: "sudarsan",
        age: 23,
        city: "Velachery"
    },
    {
        name: "sasi",
        age: 22,
        city: "Kodambakkam"
    }
];

class DisplayPerson extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div style={{ padding: 5, margin: 2, border: "1px solid black" }}>
                <h1>{this.props.name}</h1>
                <p>{this.props.age}</p>
                <span>{this.props.city}</span>
                <button
                    type="button"
                    onClick={() => this.props.callProps(this.props.name)}
                >
                    Call
                </button>
            </div>
        );
    }
}

class App extends React.Component {
    render() {
        return arr.map(person => {
            return (
                <DisplayPerson
                    name={person.name}
                    age={person.age}
                    city={person.city}
                    callProps={e => {
                        console.log("Called", e);
                    }}
                />
            );
        });
    }
}

render(<App />, document.getElementById("root"));
