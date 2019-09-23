import React from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader, Button } from 'reactstrap';

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
            {firstName && <form onSubmit={updateMember}>
              <center><h2>Add Home Owner</h2><br />

                <div className='subDiv'>
                  <h4>First Name:</h4>
                  <input id="firstName" type="text" onChange={handleMemberInput} value={firstName} />
                  <br />

                  <h4>Last Name:</h4>
                  <input id="lastName" type="text" onChange={handleMemberInput} value={lastName} />
                  <br />

                  <h4>Email:</h4>
                  <input id="email" type="text" onChange={handleMemberInput} value={email} />
                  <br />

                  <h4>Phone:</h4>
                  <input id="phone" type="text" onChange={handleMemberInput} value={phone} />
                  <br />

                  <h4>Address:</h4>
                  <input id="address" type="text" onChange={handleMemberInput} value={address} />
                  <br />

                  <h4>City:</h4>
                  <input id="city" type="text" onChange={handleMemberInput} value={city} />
                  <br />

                  <h4>State:</h4>
                  <input id="state" type="text" onChange={handleMemberInput} value={state} />
                  <br />

                  <h4>Zipcode:</h4>
                  <input id="zipcode" type="text" onChange={handleMemberInput} value={zipcode} />
                  <br />

                  <h4>Monthly Dues:</h4>
                  <input id="monthlyDues" type="text" onChange={handleMemberInput} value={monthlyDues} />
                  <br /> 
                  <br />
                  <Button type="submit" color="primary"
                  >
                    Update HomeOwner
            </Button>{" "}
                </div>
              </center>
            </form>}
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