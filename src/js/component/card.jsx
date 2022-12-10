import React from "react";

class Card extends React.Component {
    render() {
        return (
            <div className="p-3col-12 col-md-6 col-lg-3 ">
                <div className="card text-center">
                    <img src={this.props.data.imgURL} class="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.data.cardTitle}</h5>
                        <p className="card-text">{this.props.data.cardText}</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card