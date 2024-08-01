package io.hackathon.justina.config.seeders;

import io.hackathon.justina.doctor.models.Especialidad;
import io.hackathon.justina.doctor.repository.EspecialidadRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RequestAttribute;

import java.util.List;

@Component
@RequiredArgsConstructor
public class EspecialidadSeeder implements CommandLineRunner {

    private final EspecialidadRepository especialidadRepository;

    @Override
    public void run(String... args) throws Exception {
        List.of(
                new Especialidad(1, "Cardiología"),
                new Especialidad(2, "Neurología"),
                new Especialidad(3, "Pediatría"),
                new Especialidad(4, "Ginecología"),
                new Especialidad(5, "Dermatología"),
                new Especialidad(6, "Oftalmología"),
                new Especialidad(7, "Ortopedia"),
                new Especialidad(8, "Oncología"),
                new Especialidad(9, "Psiquiatría"),
                new Especialidad(10, "Urología"),
                new Especialidad(11, "Gastroenterología"),
                new Especialidad(12, "Neumología"),
                new Especialidad(13, "Endocrinología"),
                new Especialidad(14, "Reumatología")
        ).forEach(especialidadRepository::save);
    }
}
