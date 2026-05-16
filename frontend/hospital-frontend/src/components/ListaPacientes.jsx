import React, { useEffect, useState } from "react";

const ListaPacientes = () => {
  const [pacientes, setPacientes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8081/pacientes")
      .then((response) => response.json())
      .then((data) => setPacientes(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h2>Lista de Pacientes</h2>

      <ul>
        {pacientes.map((paciente) => (
          <li key={paciente.id}>
            {paciente.nombre} - {paciente.edad} años
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaPacientes;