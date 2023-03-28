import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

const EditContact = () => {
  const params = useParams();
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
        <h1>Editar Contacto</h1>
        <form>
          <label>
            Nombre completo:
            <br></br>
            <input
              type="text"
              name="full_name"
              value={store.listaContactos[params.index].full_name}
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
              value={store.listaContactos[params.index].email}
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
              value={store.listaContactos[params.index].phone}
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
              value={store.listaContactos[params.index].address}
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
              actions.editContact(newContact, params.index);
            }}
          >
            Guardar cambios
          </button>
        </form>
      </div>
    </div>
  );
};
export default EditContact;
