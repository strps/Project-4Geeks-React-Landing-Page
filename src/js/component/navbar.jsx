import React from "react";

class NavBar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="">Start Bootstrap</a>
                    <a className="nav-link active" href="">Home</a>
                    <a className="nav-link active" href="">About</a>
                    <a className="nav-link active" href="">Services</a>
                    <a className="nav-link active" href="">Contact</a>
                </div>
            </nav>
        )
    }
}

export default NavBar