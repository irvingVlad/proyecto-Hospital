import { useState } from "react";

function EditarPaciente({ paciente, onEditar, onCancelar }) {
  const [form, setForm] = useState({ ...paciente });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.nombre || !form.apellido) {
      alert("Nombre y apellido son obligatorios");
      return;
    }
    onEditar(form);
  };

  return (
    <div className="form-card">
      <h2>Editar Paciente #{paciente.id}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nombre *</label>
          <input name="nombre" value={form.nombre}
            onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Apellido *</label>
          <input name="apellido" value={form.apellido}
            onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Teléfono</label>
          <input name="telefono" value={form.telefono || ""}
            onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Dirección</label>
          <input name="direccion" value={form.direccion || ""}
            onChange={handleChange} />
        </div>
        <div className="form-actions">
          <button type="submit" className="btn btn-guardar">💾 Actualizar</button>
          <button type="button" className="btn btn-cancelar"
            onClick={onCancelar}>Cancelar</button>
        </div>
      </form>
    </div>
  );
}

export default EditarPaciente;