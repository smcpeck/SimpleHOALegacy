import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Nav, NavItem, NavLink, Container, Row, Col } from "reactstrap";

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
    }

    logoutUser() {
        localStorage.clear();
        this.props.history.push("/login");
    }

    render() {
        const firebaseid = localStorage.getItem("uid");
        return (
            <div>
                <Row className="mt-4">
                    <Col sm={{ size: 10, offset: 1 }}>
                        <Nav tabs>
                            <NavItem>
                                <NavLink tag={Link} to="/">
                                    <i className="fas fa-home mr-2"></i>
                                    Dashboard
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/financials">
                                    <i className="fas fa-file-invoice-dollar mr-2"></i>
                                    Financials
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/Maintenance">
                                    <i className="fas fa-wrench mr-2"></i>Work
                                    Tickets
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/Calendar">
                                    <i className="far fa-calendar-alt mr-2"></i>
                                    Calendar
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                {/* <NavLink tag={Link} to="/HomeOwners"> */}
                                <NavLink tag={Link} to="/members">
                                    <i className="fas fa-users mr-2"></i>Members
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/Board">
                                    <i className="fas fa-users-cog mr-2"></i>
                                    Board
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    href="#"
                                    firebaseid={firebaseid}
                                    onClick={this.logoutUser}
                                >
                                    <i className="fas fa-sign-out-alt mr-2"></i>
                                    Logout
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Col>
                </Row>
                {/* render all of the children routes on the navbar */}
                {this.props.children}
            </div>
        );
    }
}

export default withRouter(NavBar);
