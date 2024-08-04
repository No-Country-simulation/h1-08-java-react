package io.hackathon.justina.config.seeders;

import io.hackathon.justina.pathologies.model.Pathology;
import io.hackathon.justina.pathologies.services.PathologiesServices;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
public class PathologySeeders implements CommandLineRunner {
    private final PathologiesServices pathologiesServices;

    @Override
    public void run(String... args) throws Exception {
        if (pathologiesServices.count() == 0) {
            List<Pathology> pathologies = List.of(
                    new Pathology("A00", "Cólera"),
                    new Pathology("A01", "Fiebres tifoidea y paratifoidea"),
                    new Pathology("A02", "Otras infecciones debidas a Salmonella"),
                    new Pathology("A03", "Shigelosis"),
                    new Pathology("A04", "Otras infecciones intestinales bacterianas"),
                    new Pathology("A05", "Otras intoxicaciones alimentarias bacterianas"),
                    new Pathology("A06", "Amebiasis"),
                    new Pathology("A07", "Otras enfermedades intestinales debidas a protozoarios"),
                    new Pathology("A08", "Infecciones intestinales debidas a virus y otros organismos especificados"),
                    new Pathology("A09", "Diarrea y gastroenteritis de presunto origen infeccioso"),
                    new Pathology("A15", "Tuberculosis respiratoria, confirmada bacteriológica e histológicamente"),
                    new Pathology("A16", "Tuberculosis respiratoria, no confirmada bacteriológica o histológicamente"),
                    new Pathology("A17", "Tuberculosis del sistema nervioso"),
                    new Pathology("A18", "Tuberculosis de otros órganos"),
                    new Pathology("A19", "Tuberculosis miliar"),
                    new Pathology("A20", "Peste"),
                    new Pathology("A21", "Tularemia"),
                    new Pathology("A22", "Carbunco [ántrax]"),
                    new Pathology("A23", "Brucelosis"),
                    new Pathology("A24", "Muermo y melioidosis"),
                    new Pathology("A25", "Fiebres por mordedura de rata"),
                    new Pathology("A26", "Erisipeloide"),
                    new Pathology("A27", "Leptospirosis"),
                    new Pathology("A28", "Otras enfermedades zoonoticas bacterianas, no clasificadas en otra parte"),
                    new Pathology("A30", "Lepra [enfermedad de Hansen]"),
                    new Pathology("A31", "Infecciones debidas a otras micobacterias"),
                    new Pathology("A32", "Listeriosis"),
                    new Pathology("A33", "Tétanos neonatal"),
                    new Pathology("A34", "Tétanos obstétrico"),
                    new Pathology("A35", "Otros tétanos"),
                    new Pathology("A36", "Difteria"),
                    new Pathology("A37", "Tos ferina [tos convulsiva]"),
                    new Pathology("A38", "Escarlatina"),
                    new Pathology("A39", "Infección meningococica"),
                    new Pathology("A40", "Septicemia estreptococica"),
                    new Pathology("A41", "Otras septicemias"),
                    new Pathology("A42", "Actinomicosis"),
                    new Pathology("A43", "Nocardiosis"),
                    new Pathology("A44", "Bartonelosis"),
                    new Pathology("A46", "Erisipela"),
                    new Pathology("A48", "Otras enfermedades bacterianas, no clasificadas en otra parte"),
                    new Pathology("A49", "Infección bacteriana de sitio no especificado"),
                    new Pathology("A50", "Sífilis congénita"),
                    new Pathology("A51", "Sífilis precoz"),
                    new Pathology("A52", "Sífilis tardía"),
                    new Pathology("A53", "Otras sífilis y las no especificadas"),
                    new Pathology("A54", "Infección gonococica"),
                    new Pathology("A55", "Linfogranuloma (venéreo) por clamidias"),
                    new Pathology("A56", "Otras enfermedades de transmisión sexual debidas a clamidias"),
                    new Pathology("A57", "Chancro blando"),
                    new Pathology("A58", "Granuloma inguinal"),
                    new Pathology("A59", "Tricomoniasis"),
                    new Pathology("A60", "Infección anogenital debida a virus del herpes (herpes simple)"),
                    new Pathology("A63", "Otras enfermedades de transmisión predominantemente sexual, no clasificadas en otra parte"),
                    new Pathology("A64", "Enfermedad de transmisión sexual no especificada"),
                    new Pathology("A65", "Sífilis no venérea"),
                    new Pathology("A66", "Frambesia"),
                    new Pathology("A67", "Pinta [carate]"),
                    new Pathology("A68", "Fiebres recurrentes"),
                    new Pathology("A69", "Otras infecciones causadas por espiroquetas"),
                    new Pathology("A70", "Infección debida a Chlamydia psittaci"),
                    new Pathology("A71", "Tracoma"),
                    new Pathology("A74", "Otras enfermedades causadas por clamidias"),
                    new Pathology("A75", "Tifus"),
                    new Pathology("A77", "Fiebre maculosa (rickettsiosis transmitida por garrapatas)"),
                    new Pathology("A78", "Fiebre Q"),
                    new Pathology("A79", "Otras rickettsiosis"),
                    new Pathology("A80", "Poliomielitis aguda"),
                    new Pathology("A81", "Infecciones del sistema nervioso central por virus lento"),
                    new Pathology("A82", "Rabia"),
                    new Pathology("A83", "Encefalitis viral transmitida por mosquitos"),
                    new Pathology("A84", "Encefalitis viral transmitida por garrapatas"),
                    new Pathology("A85", "Otras encefalitis virales, no clasificadas en otra parte"),
                    new Pathology("A86", "Encefalitis viral, no especificada"),
                    new Pathology("A87", "Meningitis viral"),
                    new Pathology("A88", "Otras infecciones virales del sistema nervioso central, no clasificadas en otra parte"),
                    new Pathology("A89", "Infección viral del sistema nervioso central, no especificada"),
                    new Pathology("A90", "Fiebre del dengue [dengue clásico]"),
                    new Pathology("A91", "Fiebre del dengue hemorrágico"),
                    new Pathology("A92", "Otras fiebres virales transmitidas por mosquitos"),
                    new Pathology("A93", "Otras fiebres virales transmitidas por artrópodos, no clasificadas en otra parte"),
                    new Pathology("A94", "Fiebre viral transmitida por artrópodos, no especificada"),
                    new Pathology("A95", "Fiebre amarilla"),
                    new Pathology("A96", "Fiebre hemorrágica por arenavirus"),
                    new Pathology("A98", "Otras fiebres virales hemorrágicas, no clasificadas en otra parte"),
                    new Pathology("A99", "Fiebre viral hemorrágica, no especificada")
            );
            pathologiesServices.saveAll(pathologies);
        }
    }
}
