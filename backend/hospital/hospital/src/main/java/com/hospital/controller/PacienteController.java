package com.hospital.controller;

import com.hospital.dto.PacienteDTO;
import com.hospital.service.PacienteService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/pacientes")
@Tag(name = "Pacientes", description = "CRUD de pacientes")
public class PacienteController {

    @Autowired
    private PacienteService service;

    // 🟢 CREATE
    @PostMapping
    @Operation(summary = "Crear paciente")
    public PacienteDTO crear(@RequestBody PacienteDTO dto){
        return service.guardar(dto);
    }

    // 🟢 READ
    @GetMapping
    @Operation(summary = "Listar pacientes")
    public List<PacienteDTO> listar(){
        return service.listar();
    }

    // 🟢 UPDATE
    @PutMapping("/{id}")
    @Operation(summary = "Actualizar paciente")
    public PacienteDTO actualizar(@PathVariable Long id, @RequestBody PacienteDTO dto){
        dto.setId(id);
        return service.guardar(dto);
    }

    // 🟢 DELETE
    @DeleteMapping("/{id}")
    @Operation(summary = "Eliminar paciente")
    public void eliminar(@PathVariable Long id){
        service.eliminar(id);
    }
}