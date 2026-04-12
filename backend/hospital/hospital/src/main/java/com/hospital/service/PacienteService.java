package com.hospital.service;

import com.hospital.dto.PacienteDTO;
import com.hospital.entity.Paciente;
import com.hospital.repository.PacienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PacienteService {

    @Autowired
    private PacienteRepository repository;

    // 🔁 DTO → Entity
    public Paciente toEntity(PacienteDTO dto){
        Paciente p = new Paciente();
        p.setId(dto.getId());
        p.setNombre(dto.getNombre());
        p.setApellido(dto.getApellido());
        return p;
    }

    // 🔁 Entity → DTO
    public PacienteDTO toDTO(Paciente p){
        PacienteDTO dto = new PacienteDTO();
        dto.setId(p.getId());
        dto.setNombre(p.getNombre());
        dto.setApellido(p.getApellido());
        return dto;
    }

    // 🟢 CREATE / UPDATE
    public PacienteDTO guardar(PacienteDTO dto){
        Paciente paciente = repository.save(toEntity(dto));
        return toDTO(paciente);
    }

    // 🟢 READ
    public List<PacienteDTO> listar(){
        return repository.findAll()
                .stream()
                .map(this::toDTO)
                .toList();
    }

    // 🟢 DELETE
    public void eliminar(Long id){
        repository.deleteById(id);
    }
}       
