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
      homeOwner: { firstName, lastName, email, phone, address, monthlyDues }
    } = this.props;
    return (
      <div>
        <Modal
          isOpen={showModal}
          toggle={() => toggleModal("showEditModal")}
          className={this.props.className}
        >
          <ModalHeader toggle={() => toggleModal("showEditModal")}>
            Edit HomeOwner
          </ModalHeader>
          <ModalBody>
            {firstName && (
              <Form onSubmit={updateMember}>
                <FormGroup row>
                  <Col>
                    <Input
                      id="firstName"
                      type="text"
                      onChange={handleMemberInput}
                      value={firstName}
                      placeholder="First Name"
                      size="sm"
                    />
                  </Col>{" "}
                </FormGroup>
                <FormGroup row>
                  <Col>
                    <Input
                      id="lastName"
                      type="text"
                      onChange={handleMemberInput}
                      value={lastName}
                      placeholder="Last Name"
                      size="sm"
                    />
                  </Col>
                </FormGroup>{" "}
                <FormGroup row>
                  <Col>
                    <Input
                      id="email"
                      type="text"
                      onChange={handleMemberInput}
                      value={email}
                      placeholder="Email"
                      size="sm"
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col>
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
                    <Input
                      id="address"
                      type="text"
                      onChange={handleMemberInput}
                      value={address}
                      placeholder="Address"
                      size="sm"
                    />
                  </Col>
                </FormGroup>{" "}
                <FormGroup row>
                  <Col>
                    <Input
                      id="monthlyDues"
                      type="text"
                      onChange={handleMemberInput}
                      value={monthlyDues}
                      placeholder="Monthly Dues"
                      size="sm"
                    />
                  </Col>
                </FormGroup>{" "}
                <Button type="submit" color="success">
                  Update HomeOwner
                </Button>{" "}
              </Form>
            )}
          </ModalBody>
          <ModalFooter>
            <Button
              color="secondary"
              onClick={() => toggleModal("showEditModal")}
            >
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default EditMemberModal;
