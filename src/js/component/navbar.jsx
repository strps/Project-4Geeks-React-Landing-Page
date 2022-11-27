import React from "react";

class NavBar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-light">
                <div className="container-fluid" >
                    <a className="navbar-brand" href="">Start Bootstrap</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#toogler-div" aria-controls="toogler-div" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="toogler-div">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#">Services</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >
        )
    }
}

export default NavBar