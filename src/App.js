import React, { Component } from "react";
import Header from "./Header";
import Button from "./Button";
import "./App.css";

class App extends Component {

    state = {
        result: ""
    }
    addNumber = (btnName) => {

        if (btnName === "=") {
            this.calculate();

        } else if (btnName === "C") {
            this.reset();
            
        } else
            this.setState({
                result: this.state.result + btnName
            })
    }
    reset = () => {
        this.setState({
            result: ""
        })
    }

    calculate = () => {
        try {
            this.setState({
                result: (eval(this.state.result) || "") + ""
            });
        } catch (e) {
            this.setState({
                result: "error"

            })

        }
    }

    render() {
        return (
            <div className="main">
                <Header result={this.state.result} />
                <Button addNumber={this.addNumber} />
            </div>
        )
    }

}
export default App;