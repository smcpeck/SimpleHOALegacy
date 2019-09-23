import React from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader, Button } from "reactstrap";

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
            {
              <form onSubmit={this.handleAddHomeOwner}>
                <center>
                  <h2>Add Home Owner</h2>
                  <br />

                  <div className="subDiv">
                    <h4>First Name:</h4>
                    <input
                      id="firstName"
                      type="text"
                      onChange={this.handleInputChange}
                      value={firstName}
                    />
                    <br />
                    <h4>Last Name:</h4>
                    <input
                      id="lastName"
                      type="text"
                      onChange={this.handleInputChange}
                      value={lastName}
                    />
                    <br />
                    <h4>Email:</h4>
                    <input
                      id="email"
                      type="text"
                      onChange={this.handleInputChange}
                      value={email}
                    />
                    <br />
                    <h4>Phone:</h4>
                    <input
                      id="phone"
                      type="text"
                      onChange={this.handleInputChange}
                      value={phone}
                    />
                    <br />
                    <h4>Address:</h4>
                    <input
                      id="address"
                      type="text"
                      onChange={this.handleInputChange}
                      value={address}
                    />
                    <br />
                    <h4>City:</h4>
                    <input
                      id="city"
                      type="text"
                      onChange={this.handleInputChange}
                      value={city}
                    />
                    <br />
                    <h4>State:</h4>
                    <input
                      id="state"
                      type="text"
                      onChange={this.handleInputChange}
                      value={state}
                    />
                    <br />
                    <h4>Zipcode:</h4>
                    <input
                      id="zipcode"
                      type="text"
                      onChange={this.handleInputChange}
                      value={zipcode}
                    />
                    <br />
                    <h4>Monthly Dues:</h4>
                    <input
                      id="monthlyDues"
                      type="text"
                      onChange={this.handleInputChange}
                      value={monthlyDues}
                    />
                    <br />
                    <br />
                    <Button type="submit" color="primary">
                      Add HomeOwner
                    </Button>{" "}
                  </div>
                </center>
              </form>
            }
          </ModalBody>
          <ModalFooter>
            <Button
              color="danger"
              onClick={() => toggleModal("showAddModal")}
            >
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default AddMemberModal;

// export default AddMemberModal;
// import React from "react";
// import {
//   Form,
//   FormGroup,
//   Modal,
//   ModalBody,
//   ModalFooter,
//   ModalHeader,
//   Button,
//   Col,
//   Row,
//   Input
// } from "reactstrap";

// class AddMemberModal extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       hoaId: localStorage.getItem('hoaId'),
//       firstName: '',
//       lastName: '',
//       address: '',
//       city: '',
//       state: '',
//       zipcode: '',
//       monthlyDues: '',
//       email: '',
//       phone: '',
//       showModal: false,
//     }

//     this.handleInputChange = this.handleInputChange.bind(this);
//     this.handleAddHomeOwner = this.handleAddHomeOwner.bind(this);
//     this.toggle = this.toggle.bind(this);
//   }

//   handleInputChange(event) {
//     this.setState({ [event.target.id]: event.target.value });
//   }

//   handleAddHomeOwner(event) {
//     event.preventDefault();
//     this.props.addMember(this.state);
//   }

//   toggle() {
//     this.setState(prevState => ({
//       modal: !prevState.modal
//     }));
//   }

//   render() {
//     const { firstName, lastName, email, phone, address, monthlyDues } = this.state;
//     const { showModal, toggleModal } = this.props;

//     return (
//       <div>
//         <Button className="btn-custom" size="sm" onClick={this.toggle}>
//           Add Member
//         </Button>
//         <Modal
//           isOpen={showModal}
//           toggle={() => toggleModal('showAddModal')}
//           className={this.props.className}
//         >
//           <ModalHeader toggle={() => toggleModal('showAddModal')}>Add HomeOwner</ModalHeader>
//           <ModalBody>
//             <Form onSubmit={this.handleAddHomeOwner}>
//               <FormGroup row className="mt-2">
//                 <Col>
//                   <Input
//                     className="mb-2"
//                     id="firstName"
//                     type="text"
//                     onChange={this.handleInputChange}
//                     placeholder="First Name"
//                     size="sm"
//                     value={firstName}
//                   />
//                   <Input
//                     className="mb-2"
//                     id="lastName"
//                     type="text"
//                     onChange={this.handleInputChange}
//                     placeholder="Last Name"
//                     value={lastName}
//                     size="sm"
//                   />
//                   <Input
//                     className="mb-2"
//                     id="email"
//                     type="email"
//                     onChange={this.handleInputChange}
//                     placeholder="Email"
//                     value={email}
//                     size="sm"
//                   />
//                   <Input
//                     className="mb-2"
//                     id="phone"
//                     type="tel"
//                     placeholder="Phone"
//                     onChange={this.handleInputChange}
//                     value={phone}
//                     size="sm"
//                     pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
//                     required
//                   />
//                   <Input
//                     className="mb-2"
//                     id="address"
//                     type="text"
//                     placeholder="Street Address"
//                     onChange={this.handleInputChange}
//                     value={address}
//                     size="sm"
//                   />
//                 </Col>
//               </FormGroup>
//               <FormGroup row>
//                 <Col>
//                   <Input
//                     className="mb-2"
//                     id="monthlyDues"
//                     type="text"
//                     onChange={this.handleInputChange}
//                     placeholder="Monthly Dues"
//                     value={monthlyDues}
//                     size="sm"
//                   />
//                 </Col>
//               </FormGroup>
//               <FormGroup row></FormGroup>
//             </Form>
//           </ModalBody>
//           <ModalFooter>
//             <Button color="primary" className="float-right" onClick={() => toggleModal('showAddModal')}>
//               Cancel
//             </Button>
//           </ModalFooter>
//         </Modal>
//       </div>
//     );
//   }
// }

// export default AddMemberModal;
