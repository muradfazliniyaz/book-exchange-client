import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import swal from "sweetalert";
import { UserContext } from "../Contexts/UserContext";
import { useContext } from "react";

function EditUserPage({ user }) {
  const { editUser } = useContext(UserContext);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [role, setRole] = useState("");


  const handleEdit = (event) => {
    console.log(user.id);
    event.preventDefault();
    const editedUser = {
      name: name,
      surname: surname,
      email: email,
      gender: gender,
      birthDate: birthDate,
      maritalStatus: maritalStatus,
      role: role,
    };
    if (
      name !== "" &&
      surname !== "" &&
      email !== "" &&
      gender !== "" &&
      birthDate !== "" &&
      maritalStatus !== "" &&
      role !== "" 

    ) {
      editUser(user.id, editedUser);
      setName("");
      setSurname("");
      setEmail("");
      setGender("");
      setBirthDate("");
      setMaritalStatus("");
      setRole("");
      handleClose();
    } else {
      swal("Please enter all of information!");
    }
  };
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div className="container mt-5">
      <Button className="edit-button" onClick={handleShow}>
        Edit
      </Button>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="col-lg-12">
            <form
              onSubmit={handleEdit}
              className="border border-1 p-3 rounded mt-5"
            >
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Name
                </label>
                <input
                  type="text"
                  // defaultValue={user.name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-control"
                  id="exampleFormControlInput1"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput2"
                  className="form-label"
                >
                  Surname
                </label>
                <input
                  type="text"
                  // defaultValue={user.surname}
                  onChange={(e) => setSurname(e.target.value)}
                  className="form-control"
                  id="exampleFormControlInput2"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput2"
                  className="form-label"
                >
                  E-Mail Address
                </label>
                <input
                  type="email"
                  // defaultValue={user.email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                  id="exampleFormControlInput2"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput3"
                  className="form-label"
                >
                  Gender
                </label>
                <input
                  type="text"
                  // defaultValue={user.gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="form-control"
                  id="exampleFormControlInput3"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput3"
                  className="form-label"
                >
                  Birth Date
                </label>
                <input
                  type="date"
                  // defaultValue={user.birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                  rows="5"
                  className="form-control"
                  id="exampleFormControlInput3"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput3"
                  className="form-label"
                >
                  Marital Status
                </label>
                <input
                  type="text"
                  // defaultValue={user.maritalStatus}
                  onChange={(e) => setMaritalStatus(e.target.value)}
                  rows="5"
                  className="form-control"
                  id="exampleFormControlInput3"
                />
              </div>              
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput3"
                  className="form-label"
                >
                  Role
                </label>
                <input
                  type="text"
                  // defaultValue={user.role}
                  onChange={(e) => setRole(e.target.value)}
                  rows="5"
                  className="form-control"
                  id="exampleFormControlInput3"
                />
              </div>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button
                  data-testid="add-button"
                  type="submit"
                  variant="primary"
                  // onClick={handleEdit}
                >
                  Update User
                </Button>
              </Modal.Footer>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export { EditUserPage };
