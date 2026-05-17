import { useState } from "react";

function EliminarPaciente({ paciente, onEliminar }) {

  const [mostrarModal, setMostrarModal] = useState(false);

  const confirmarEliminar = () => {
    onEliminar(paciente.id);
    setMostrarModal(false);
  };

  return (
    <>
      <button
        className="btn-delete"
        onClick={() => setMostrarModal(true)}
      >
        Eliminar
      </button>

      {mostrarModal && (
        <div className="modal-overlay">

          <div className="modal">

            <h3>Eliminar Paciente</h3>

            <p>
              ¿Deseas eliminar a <strong>{paciente.nombre}</strong>?
            </p>

            <div className="modal-actions">

              <button
                className="btn-cancel"
                onClick={() => setMostrarModal(false)}
              >
                Cancelar
              </button>

              <button
                className="btn-delete"
                onClick={confirmarEliminar}
              >
                Sí, eliminar
              </button>

            </div>

          </div>

        </div>
      )}
    </>
  );
}

export default EliminarPaciente;