import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Col,
  Input,
  ModalFooter
} from "reactstrap";

class AddMemberModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hoaId: localStorage.getItem("hoaId"),
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      state: "",
      zipcode: "",
      monthlyDues: "",
      email: "",
      phone: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddHomeOwner = this.handleAddHomeOwner.bind(this);
  }

  handleInputChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleAddHomeOwner(event) {
    event.preventDefault();
    this.props.addMember(this.state);
  }

  render() {
    const {
      firstName,
      lastName,
      email,
      phone,
      address,
      city,
      state,
      zipcode,
      monthlyDues
    } = this.state;
    const { showModal, toggleModal } = this.props;
    return (
      <div>
        <Modal
          isOpen={showModal}
          toggle={() => toggleModal("showAddModal")}
          className={this.props.className}
        >
          <ModalHeader toggle={() => toggleModal("showAddModal")}>
            Add HomeOwner
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleAddHomeOwner}>
              <FormGroup row>
                <Col>
                  <Input
                    id="firstName"
                    type="text"
                    onChange={this.handleInputChange}
                    value={firstName}
                    placeholder="First Name"
                    size="sm"
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col>
                  <Input
                    id="lastName"
                    type="text"
                    onChange={this.handleInputChange}
                    value={lastName}
                    placeholder="Last Name"
                    size="sm"
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col>
                  {" "}
                  <Input
                    id="email"
                    type="email"
                    onChange={this.handleInputChange}
                    value={email}
                    placeholder="email"
                    size="sm"
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col>
                  <Input
                    id="phone"
                    type="tel"
                    onChange={this.handleInputChange}
                    value={phone}
                    placeholder="Phone"
                    size="sm"
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col>
                  <Input
                    id="address"
                    type="text"
                    onChange={this.handleInputChange}
                    value={address}
                    placeholder="Street Address"
                    size="sm"
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col>
                  <Input
                    id="city"
                    type="text"
                    onChange={this.handleInputChange}
                    value={city}
                    placeholder="City"
                    size="sm"
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col>
                  <Input
                    id="state"
                    type="text"
                    onChange={this.handleInputChange}
                    value={state}
                    placeholder="State"
                    size="sm"
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col>
                  <Input
                    id="zipcode"
                    type="text"
                    onChange={this.handleInputChange}
                    value={zipcode}
                    placeholder="Zipcode"
                    size="sm"
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col>
                  <Input
                    id="monthlyDues"
                    type="text"
                    onChange={this.handleInputChange}
                    value={monthlyDues}
                    placeholder="Monthly Dues"
                    size="sm"
                  />
                </Col>
              </FormGroup>
              <FormGroup>
                <Button type="submit" color="success">
                  Add HomeOwner
                </Button>{" "}
                <Button
                  color="secondary"
                  onClick={() => toggleModal("showAddModal")}
                >
                  Cancel
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default AddMemberModal;
