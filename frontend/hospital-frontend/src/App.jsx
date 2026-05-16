import { useState } from "react";
import { pacientes as datosPacientes } from "./data/mockData";
import ListaPacientes from "./components/ListaPacientes";
import CrearPaciente from "./components/CrearPaciente";
import EditarPaciente from "./components/EditarPaciente";
import "./App.css";

function App() {
  const [pacientes, setPacientes] = useState(datosPacientes);
  const [vista, setVista] = useState("lista");
  const [pacienteSeleccionado, setPacienteSeleccionado] = useState(null);

  const crearPaciente = (nuevoPaciente) => {
    const conId = { ...nuevoPaciente, id: pacientes.length + 1 };
    setPacientes([...pacientes, conId]);
    setVista("lista");
  };

  const editarPaciente = (pacienteActualizado) => {
    setPacientes(pacientes.map(p =>
      p.id === pacienteActualizado.id ? pacienteActualizado : p
    ));
    setVista("lista");
  };

  const eliminarPaciente = (id) => {
    if (window.confirm("¿Estás seguro de eliminar este paciente?")) {
      setPacientes(pacientes.filter(p => p.id !== id));
    }
  };

  return (
    <div className="app">
      <header className="header">
        <h1> Sistema de Gestión Hospitalaria</h1>
        <nav className="nav">
          <button onClick={() => setVista("lista")} className={vista === "lista" ? "active" : ""}>
            Pacientes
          </button>
          <button onClick={() => setVista("crear")} className={vista === "crear" ? "active" : ""}>
            + Nuevo
          </button>
        </nav>
      </header>

      <main className="main">
        {vista === "lista" && (
          <ListaPacientes
            pacientes={pacientes}
            onEditar={(p) => { setPacienteSeleccionado(p); setVista("editar"); }}
            onEliminar={eliminarPaciente}
          />
        )}
        {vista === "crear" && (
          <CrearPaciente onCrear={crearPaciente} onCancelar={() => setVista("lista")} />
        )}
        {vista === "editar" && (
          <EditarPaciente
            paciente={pacienteSeleccionado}
            onEditar={editarPaciente}
            onCancelar={() => setVista("lista")}
          />
        )}
      </main>
    </div>
  );
}

export default App;