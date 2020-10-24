import React from "react";
import axios from "axios";
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

class AddBoardModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hoaId: localStorage.getItem("hoaId"),
      accountId: "",
      position: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddBoardMember = this.handleAddBoardMember.bind(this);
  }

  handleInputChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleAddBoardMember(event) {
    event.preventDefault();
    const { accountId, position, hoaId } = this.state;
    this.setState({ accountId: "", position: "" }, () =>
      this.props.addBoardMember({ accountId, position, hoaId })
    );
  }

  render() {
    const { accountId, position } = this.state;
    const { showModal, toggleModal, homeowners } = this.props;
    return (
      <div>
        <Modal
          isOpen={showModal}
          toggle={() => toggleModal("showAddModal")}
          className={this.props.className}
        >
          <ModalHeader toggle={() => toggleModal("showAddModal")}>
            Add BoardMember
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleAddBoardMember}>
              <FormGroup row>
                <Col>
                  <select
                    required
                    id="accountId"
                    onChange={this.handleInputChange}
                    value={accountId}
                  >
                    <option value="">Select a Member</option>
                    {homeowners &&
                      homeowners.map(homeowner => (
                        <option value={homeowner.id}>
                          {homeowner.fullName}
                        </option>
                      ))}
                  </select>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col>
                  <select
                    required
                    id="position"
                    onChange={this.handleInputChange}
                    value={position}
                  >
                    <option value="">Select A Position</option>
                    <option value="Secretary">Secretary</option>
                    <option value="President">President</option>
                    <option value="Vice President">Vice President</option>
                    <option value="Treasurer">Treasurer</option>
                  </select>
                </Col>
              </FormGroup>
              <FormGroup className="mt-3">
                <Button type="submit" color="success">
                  Add BoardMember
                </Button>{" "}
                <Button
                  color="secondary"
                  onClick={() => toggleModal("showAddModal")}
                  className="float-right"
                >
                  Cancel
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default AddBoardModal;
