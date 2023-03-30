import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

const EditContact = () => {
  const params = useParams();
  const { store, actions } = useContext(Context);
  const [nombre, setNombre] = useState(
    store.listaContactos[params.index].full_name
  );
  const [correo, setCorreo] = useState(
    store.listaContactos[params.index].email
  );
  const [telefono, setTelefono] = useState(
    store.listaContactos[params.index].phone
  );
  const [direccion, setDireccion] = useState(
    store.listaContactos[params.index].address
  );

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
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </label>
          <br />
          <label>
            Correo electrónico:
            <br></br>
            <input
              type="text"
              name="email"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
            />
          </label>
          <br />
          <label>
            Teléfono:
            <br></br>
            <input
              type="text"
              name="phone"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
            />
          </label>
          <br />
          <label>
            Dirección:
            <br></br>
            <input
              type="text"
              name="address"
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
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
              actions.editContact(
                {
                  full_name: nombre,
                  email: correo,
                  phone: telefono,
                  agenda_slug: "agenda_de_antonio",
                  address: direccion,
                },
                params.index
              );
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
