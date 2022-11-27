import React from "react";

class Card extends React.Component {
    render() {
        return (
            <div className="card">
                <img src={this.props.data.imgURL} class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">{this.props.data.cardTitle}</h5>
                    <p class="card-text">{this.props.data.cardText}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        )
    }
}

export default Card