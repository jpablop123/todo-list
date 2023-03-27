import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const addContact = () => {
  const { store, actions } = useContext(Context);
  const [newContact, setNewContact] = useState({
    full_name: "",
    email: "",
    phone: "",
    agenda_slug: "agenda_de_antonio",
    address: "",
  });
  const handleInputChange = (event) => {
    setNewContact({
      ...newContact,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="row">
      <div className="col-xs-1" align="center">
        <h1>Agregar contacto</h1>
        <form>
          <label>
            Nombre completo:
            <br></br>
            <input
              type="text"
              name="full_name"
              value={newContact.full_name}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Correo electrónico:
            <br></br>
            <input
              type="text"
              name="email"
              value={newContact.email}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Teléfono:
            <br></br>
            <input
              type="text"
              name="phone"
              value={newContact.phone}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Dirección:
            <br></br>
            <input
              type="text"
              name="address"
              value={newContact.address}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <br></br>
          <button className="btn btn-outline-primary">
            <Link to="/">Regresar a lista de contactos</Link>
          </button>
          <br />
          <button
            className="btn btn-outline-warning"
            type="button"
            onClick={() => {
              actions.addContact(newContact);
            }}
          >
            Agregar Contacto a la Agenda
          </button>
        </form>
      </div>
    </div>
  );
};
export default addContact;
