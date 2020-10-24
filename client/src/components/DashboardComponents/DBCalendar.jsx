import React, { Component } from "react";
import { Row, Col, Button } from "reactstrap";
import axios from "axios";
import moment from "moment";
const { GOOGLE_API_KEY } = process.env;

class DBCalendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [],
        };
    }
    componentDidMount() {
        axios
            .get(
                `https://content.googleapis.com/calendar/v3/calendars/79ptp90b8asivdmhlp4ifl0fas@group.calendar.google.com/events?key=AIzaSyCc7TZ8lRqSWM6FA7xxCtlOV4gyGzhYASM`
            )
            .then((res) => {
                const events = res.data.items;
                this.setState({
                    events,
                });
            })
            .catch((err) => console.error(err));
    }

    render() {
        const { events } = this.state;
        return (
            <div className="dashboard-card p-4 mb-4">
                <h5>Upcoming Events</h5>
                {events.map((event) => {
                    let htmlLink = event.h;
                    return (
                        <div className="mb-2">
                            <hr />
                            <Row>
                                <Col>
                                    <div>
                                        <h6>{event.summary}</h6>
                                    </div>
                                    <div>
                                        <h6>
                                            {" "}
                                            {moment(
                                                event.start.dateTime.slice(
                                                    5,
                                                    10
                                                ),
                                                "MM-DD"
                                            ).format("MMMM Do")}
                                        </h6>
                                    </div>
                                </Col>
                                <Col>
                                    <Button
                                        color="primary"
                                        size="sm"
                                        className="float-right"
                                        onClick={() =>
                                            (window.location.href =
                                                event.htmlLink)
                                        }
                                    >
                                        See more details!
                                    </Button>
                                </Col>
                            </Row>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default DBCalendar;
