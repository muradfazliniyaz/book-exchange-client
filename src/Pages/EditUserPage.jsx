import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import swal from "sweetalert";
import { UserContext } from "../Contexts/UserContext";
import { useContext } from "react";

function EditUserPage({ user }) {
  const { editUser } = useContext(UserContext);
  const [name, setName] = useState(user.name);
  const [surname, setSurname] = useState(user.surname);
  const [email, setEmail] = useState(user.email);
  const [gender, setGender] = useState(user.gender);
  const [birthDate, setBirthDate] = useState(user.birthDate);
  const [maritalStatus, setMaritalStatus] = useState(user.maritalStatus);
  const [role, setRole] = useState(user.role);
  const [editableField, setEditableField] = useState("");

  const handleEdit = (event) => {
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

    if (editableField !== "" && editedUser[editableField] !== "") {
      editUser(user.id, editedUser);
      handleClose();
    } else {
      swal("Please enter a value for the editable field!");
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === editableField) {
      switch (name) {
        case "name":
          setName(value);
          break;
        case "surname":
          setSurname(value);
          break;
        case "email":
          setEmail(value);
          break;
        case "gender":
          setGender(value);
          break;
        case "birthDate":
          setBirthDate(value);
          break;
        case "maritalStatus":
          setMaritalStatus(value);
          break;
        case "role":
          setRole(value);
          break;
        default:
          break;
      }
    }
  };

  const handleFieldClick = (field) => {
    setEditableField(field);
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
        Edit User
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
                  name="name"
                  value={name}
                  onChange={handleInputChange}
                  className={
                    editableField === "name"
                      ? "form-control active"
                      : "form-control"
                  }
                  onClick={() => handleFieldClick("name")}
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
                  name="surname"
                  value={surname}
                  onChange={handleInputChange}
                  className={
                    editableField === "surname"
                      ? "form-control active"
                      : "form-control"
                  }
                  onClick={() => handleFieldClick("surname")}
                  id="exampleFormControlInput2"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput3"
                  className="form-label"
                >
                  E-Mail Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleInputChange}
                  className={
                    editableField === "email"
                      ? "form-control active"
                      : "form-control"
                  }
                  onClick={() => handleFieldClick("email")}
                  id="exampleFormControlInput3"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput4"
                  className="form-label"
                >
                  Gender
                </label>
                <input
                  type="text"
                  name="gender"
                  value={gender}
                  onChange={handleInputChange}
                  className={
                    editableField === "gender"
                      ? "form-control active"
                      : "form-control"
                  }
                  onClick={() => handleFieldClick("gender")}
                  id="exampleFormControlInput4"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput5"
                  className="form-label"
                >
                  Birth Date
                </label>
                <input
                  type="date"
                  name="birthDate"
                  value={birthDate}
                  onChange={handleInputChange}
                  className={
                    editableField === "birthDate"
                      ? "form-control active"
                      : "form-control"
                  }
                  onClick={() => handleFieldClick("birthDate")}
                  id="exampleFormControlInput5"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput6"
                  className="form-label"
                >
                  Marital Status
                </label>
                <input
                  type="text"
                  name="maritalStatus"
                  value={maritalStatus}
                  onChange={handleInputChange}
                  className={
                    editableField === "maritalStatus"
                      ? "form-control active"
                      : "form-control"
                  }
                  onClick={() => handleFieldClick("maritalStatus")}
                  id="exampleFormControlInput6"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput7"
                  className="form-label"
                >
                  Role
                </label>
                <input
                  type="text"
                  name="role"
                  value={role}
                  onChange={handleInputChange}
                  className={
                    editableField === "role"
                      ? "form-control active"
                      : "form-control"
                  }
                  onClick={() => handleFieldClick("role")}
                  id="exampleFormControlInput7"
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
