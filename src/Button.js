import React, { Component } from "react";


class Button extends Component {

 addNumber =(e)=>{
   this.props.addNumber(e.target.name)

 }


    render() {
        return (
            <div className="btn">
                <button name="1" onClick={this.addNumber}>1</button>
                <button name="2" onClick={this.addNumber}>2</button>
                <button name="3" onClick={this.addNumber}>3</button>
                <button name="4" onClick={this.addNumber}>4</button><br/>
                <button name="5" onClick={this.addNumber}>5</button>
                <button name="6" onClick={this.addNumber}>6</button>
                <button name="7" onClick={this.addNumber}>7</button>
                <button name="8" onClick={this.addNumber}>8</button><br/>
                <button name="9" onClick={this.addNumber}>9</button>
                <button name="0" onClick={this.addNumber}>0</button>
                <button name="+" onClick={this.addNumber}>+</button>
                <button name="-" onClick={this.addNumber}>-</button><br/>
                <button name="C" onClick={this.addNumber}>C</button>
                <button name="*" onClick={this.addNumber}>*</button>
                <button name="/" onClick={this.addNumber}>/</button>
                <button name="." onClick={this.addNumber}>.</button><br/>
                <button className="eval" name="=" onClick={this.addNumber}>=</button>

            </div>
        )

    }



}
export default Button;