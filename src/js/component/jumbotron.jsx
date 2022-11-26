import React from "react";

class Jumbotron extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>Jumbotron</h1>
                {this.props.children}
            </div>
        )
    }
}

export default Jumbotron