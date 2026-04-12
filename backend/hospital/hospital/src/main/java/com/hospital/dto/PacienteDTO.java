package com.hospital.dto;

public class PacienteDTO {

    private Long id;
    private String nombre;
    private String apellido;
    private String contactoEmergencia;

    // Constructor vacío
    public PacienteDTO() {
    }

    // Getters y Setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public String getContactoEmergencia() {
        return contactoEmergencia;
    }
    
    public void setContactoEmergencia(String contactoEmergencia) {
        this.contactoEmergencia = contactoEmergencia;
    }
}