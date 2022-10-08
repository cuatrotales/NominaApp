// importar el hook: useState
import { useState } from "react";

export default function Empleado() {
  //Definir las variables de estado del formulario, a traves de el hook useState
  const [fullname, setFullname] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); //Hace que no se ejecute el postback
    console.log(fullname);
  };
  return (
    <div className="container my-5">
      <form onSubmit={handleSubmit} className="form__empleados">
        <label htmlFor="fullname">Nombre completo: </label>
        <input
          type="text"
          name="fullname"
          id="fullname"
          placeholder="Nombre completo"
          className="form-control"
          onChange={(e) => setFullname(e.target.value)}
          value={fullname}
        />
        <input type="submit" value="Enviar" className="btn btn-success" />
      </form>
    </div>
  );
}
