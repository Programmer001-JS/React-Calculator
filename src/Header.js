import React, { Component } from "react";

class Header extends Component {
    render() {
        return (
            <div className="result">

                {this.props.result}
            </div>
        )

    }


}
export default Header;