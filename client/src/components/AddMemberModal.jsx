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
                    id="monthlyDues"
                    type="text"
                    onChange={this.handleInputChange}
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
            <Button
              color="secondary"
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
