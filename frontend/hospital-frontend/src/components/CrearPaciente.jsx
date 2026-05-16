import { useState } from "react";

function CrearPaciente() {

  const [paciente, setPaciente] = useState({
    nombre: "",
    apellido: "",
    contactoEmergencia: ""
  });

  const [mensaje, setMensaje] = useState("");

  const handleChange = (e) => {
    setPaciente({
      ...paciente,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("POST /pacientes", paciente);

    setMensaje("Paciente creado correctamente");

    setPaciente({
      nombre: "",
      apellido: "",
      contactoEmergencia: ""
    });
  };

  return (
    <div>
      <h2>Crear Paciente</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={paciente.nombre}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="text"
          name="apellido"
          placeholder="Apellido"
          value={paciente.apellido}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="text"
          name="contactoEmergencia"
          placeholder="Contacto de Emergencia"
          value={paciente.contactoEmergencia}
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">
          Crear Paciente
        </button>

      </form>

      <br />

      {mensaje && <p>{mensaje}</p>}

    </div>
  );
}

export default CrearPaciente;