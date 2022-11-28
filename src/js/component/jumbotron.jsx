import React from "react";

class Jumbotron extends React.Component {
    render() {
        return (
            <div className="p-5 mb-4 bg-light rounded-3">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">A Warm Wellcome!</h1>
                    <p className="col-md-8 fs-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni id mollitia cum aspernatur ipsam laudantium, facilis repellat.</p>
                    <button className="btn btn-primary btn-lg" type="button">Call to Action!</button>
                </div>
            </div>
        )
    }
}

export default Jumbotron