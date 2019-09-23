import React from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader, Button, Form, FormGroup, Input, Col } from 'reactstrap';

class EditMemberModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { showModal, toggleModal, updateMember, handleMemberInput, homeOwner: { 
      firstName, lastName, email, phone, address, city, state, zipcode, monthlyDues }
    } = this.props;
    return (
      <div>
        <Modal
          isOpen={showModal}
          toggle={() => toggleModal('showEditModal')}
          className={this.props.className}
        >
          <ModalHeader toggle={() => toggleModal('showEditModal')}>Edit HomeOwner</ModalHeader>
          <ModalBody>
            <Form onSubmit={updateMember}>
                <FormGroup row>
                  <Col>
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
                    {" "}
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
                      onChange={handleMemberInput}
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
                      onChange={handleMemberInput}
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
                      onChange={handleMemberInput}
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
                      onChange={handleMemberInput}
                      value={monthlyDues}
                      placeholder="Monthly Dues"
                      size="sm"
                    />
                  </Col>
                </FormGroup>
                <Button type="submit" color="success">
                  Add HomeOwner
            </Button>{" "}
              </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={() => toggleModal('showEditModal')}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

export default EditMemberModal;