import React, { Component } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import firebase from "./firebase";
import { Container, Row, Col } from "reactstrap";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        firebase
            .loginWithGoogle()
            .then((data) => {
                const firebaseid = data.user.uid;
                localStorage.setItem("uid", firebaseid);
                axios
                    .get(`/checkForUser/${firebaseid}`)
                    .then((res) => {
                        if (res.data.registered) {
                            localStorage.setItem(
                                "hoaId",
                                res.data.hoaInfoFromDb.id
                            );
                            localStorage.setItem(
                                "hoaInfo",
                                JSON.stringify(res.data.hoaInfoFromDb)
                            );
                            this.props.history.push("/");
                            return Swal.fire(`Welcome to SimpleHoa!`);
                        } else {
                            this.props.history.push("/InputInfo");
                            return Swal.fire(`Please signup for an account.`);
                        }
                    })
                    .catch((err) => {
                        console.error("Error checking user status", err);
                    });
            })
            .catch((err) => {
                console.error("=======error", err);
            });
    }

    render() {
        return (
            <Container>
                <Row className="mt-5">
                    <Col sm={{ size: 4, offset: 4 }}>
                        <h1>SimpleHOA</h1>
                        <hr />
                        <button
                            className="btn btn-primary"
                            onClick={this.handleClick}
                        >
                            Login with Google
                        </button>
                    </Col>
                </Row>
            </Container>
        );
    }
}
