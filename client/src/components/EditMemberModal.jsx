import React from "react";
import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Button,
  Form,
  FormGroup,
  Input,
  Col,
  Label,
  InputGroup,
  InputGroupAddon,
  InputGroupText
} from "reactstrap";

class EditMemberModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      showModal,
      toggleModal,
      updateMember,
      handleMemberInput,
      homeOwner: {
        firstName,
        lastName,
        email,
        phone,
        address,
        city,
        state,
        zipcode,
        monthlyDues,
        balanceDue,
        fullName
      }
    } = this.props;
    return (
      <div>
        <Modal
          isOpen={showModal}
          toggle={() => toggleModal("showEditModal")}
          className={this.props.className}
        >
          <ModalHeader toggle={() => toggleModal("showEditModal")}>
            Edit Homeowner
          </ModalHeader>
          <ModalBody>
            <h3>
              {firstName} {lastName}
            </h3>
            <hr />
            <h4>Current Balance: ${balanceDue}</h4>
            <hr />
            <Form onSubmit={updateMember}>
              <FormGroup row>
                <Col>
                  <Label size="sm">First Name</Label>
                  <Input
                    id="firstName"
                    type="text"
                    onChange={handleMemberInput}
                    value={firstName}
                    placeholder={firstName}
                    size="sm"
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col>
                  <Label size="sm">Last Name</Label>

                  <Input
                    id="lastName"
                    type="text"
                    onChange={handleMemberInput}
                    value={lastName}
                    placeholder="Last Name"
                    size="sm"
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col>
                  <Label size="sm">Email</Label>

                  <Input
                    id="email"
                    type="email"
                    onChange={handleMemberInput}
                    value={email}
                    placeholder="email"
                    size="sm"
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col>
                  <Label size="sm">Phone</Label>

                  <Input
                    id="phone"
                    type="tel"
                    onChange={handleMemberInput}
                    value={phone}
                    placeholder="Phone"
                    size="sm"
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col>
                  <Label size="sm">Street Address</Label>

                  <Input
                    id="address"
                    type="text"
                    onChange={handleMemberInput}
                    value={address}
                    placeholder="Street Address"
                    size="sm"
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col>
                  <Label size="sm">City</Label>

                  <Input
                    id="city"
                    type="text"
                    onChange={handleMemberInput}
                    value={city}
                    placeholder="City"
                    size="sm"
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col>
                  <Label size="sm">State</Label>

                  <Input
                    id="state"
                    type="text"
                    onChange={handleMemberInput}
                    value={state}
                    placeholder="State"
                    size="sm"
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col>
                  <Label size="sm">Zipcode</Label>

                  <Input
                    id="zipcode"
                    type="text"
                    onChange={handleMemberInput}
                    value={zipcode}
                    placeholder="Zipcode"
                    size="sm"
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col>
                  <Label size="sm">Monthly Dues</Label>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>$</InputGroupText>
                    </InputGroupAddon>
                    <Input
                      id="monthlyDues"
                      type="text"
                      onChange={handleMemberInput}
                      value={monthlyDues}
                      placeholder="Monthly Dues"
                    />
                  </InputGroup>
                </Col>
              </FormGroup>
              <Button type="submit" color="success">
                Update Homeowner
              </Button>{" "}
              <Button
                color="secondary"
                onClick={() => toggleModal("showEditModal")}
                className="float-right"
              >
                Cancel
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default EditMemberModal;
