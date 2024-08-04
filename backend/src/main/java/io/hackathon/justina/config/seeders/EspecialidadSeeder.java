package io.hackathon.justina.config.seeders;

import io.hackathon.justina.doctor.models.Especialidad;
import io.hackathon.justina.doctor.repository.EspecialidadRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class EspecialidadSeeder implements CommandLineRunner {

    private final EspecialidadRepository especialidadRepository;

    @Override
    public void run(String... args) throws Exception {
        // Crear un array de especialidades
        if (especialidadRepository.count() > 0) {
            return;
        }
        Especialidad[] especialidades = new Especialidad[]{
                new Especialidad(1, "Alergia e Inmunología"),
                new Especialidad(2, "Anestesiología"),
                new Especialidad(3, "Angiología y Cirugía Vascular"),
                new Especialidad(4, "Cardiología"),
                new Especialidad(5, "Cirugía General"),
                new Especialidad(6, "Dermatología"),
                new Especialidad(7, "Diagnóstico por Imágenes"),
                new Especialidad(8, "Emergentología"),
                new Especialidad(9, "Endocrinología"),
                new Especialidad(10, "Gastroenterología"),
                new Especialidad(11, "Geriatría"),
                new Especialidad(12, "Ginecología y Obstetricia"),
                new Especialidad(13, "Hematología"),
                new Especialidad(14, "Infectología"),
                new Especialidad(15, "Medicina Familiar y General"),
                new Especialidad(16, "Medicina Interna"),
                new Especialidad(17, "Nefrología"),
                new Especialidad(18, "Neumonología"),
                new Especialidad(19, "Neurología"),
                new Especialidad(20, "Nutrición"),
                new Especialidad(21, "Oftalmología"),
                new Especialidad(22, "Oncología"),
                new Especialidad(23, "Ortopedia y Traumatología"),
                new Especialidad(24, "Otorrinolaringología"),
                new Especialidad(25, "Pediatría"),
                new Especialidad(26, "Psiquiatría"),
                new Especialidad(27, "Radioterapia"),
                new Especialidad(28, "Reumatología"),
                new Especialidad(29, "Tocoginecología"),
                new Especialidad(30, "Urología")
        };

        for (Especialidad especialidad : especialidades) {
            especialidadRepository.save(especialidad);
        }
    }
}
