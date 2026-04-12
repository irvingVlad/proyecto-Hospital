package com.hospital.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class OpenAPIConfig {

    @Bean
    public OpenAPI customOpenAPI() {
        return new OpenAPI()
            .info(new Info()
                .title("Sistema de Gestion Hospitalaria")
                .description("API REST para gestion de pacientes, " + "citas medicas y expedientes clinicos.")
                .version("1.0.0")
                .contact(new Contact()
                    .name("Equipo DAW123 - UES")
                    .email("pj23001@ues.edu.sv")
                )
            );
    }
}