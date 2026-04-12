-- Sistema de Gestion Hospitalaria
-- Script de creacion de base de datos
-- Equipo DAW123 - UES

CREATE TABLE IF NOT EXISTS pacientes (
    id          BIGSERIAL PRIMARY KEY,
    nombre      VARCHAR(100) NOT NULL,
    apellido    VARCHAR(100) NOT NULL,
    telefono    VARCHAR(20),
    direccion   TEXT,
    email       VARCHAR(100) UNIQUE,
    created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

