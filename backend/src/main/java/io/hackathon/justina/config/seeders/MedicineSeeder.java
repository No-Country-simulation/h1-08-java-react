package io.hackathon.justina.config.seeders;

import io.hackathon.justina.laboratory.model.Laboratory;
import io.hackathon.justina.laboratory.repository.LaboratoryRepository;
import io.hackathon.justina.medicines.model.Medicine;
import io.hackathon.justina.medicines.model.Units.Unit;
import io.hackathon.justina.medicines.repository.MedicinesRepository;
import io.hackathon.justina.medicines.repository.Units.UnitsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Stream;

@Component
@RequiredArgsConstructor
public class MedicineSeeder implements CommandLineRunner {

    private final MedicinesRepository medicinesRepository;
    private final LaboratoryRepository laboratoryRepository;
    private final UnitsRepository unitsRepository;

    @Override
    public void run(String... args) throws Exception {

        if (medicinesRepository.count() > 0) {
            return;
        }
        if (laboratoryRepository.count() == 0) {

            List<Laboratory> laboratoriesInit = Stream.of(
                    new Laboratory(1L, "67", "DOMÍNGUEZ"),
                    new Laboratory(2L, "13", "ARISTON"),
                    new Laboratory(3L, "498", "ELEA"),
                    new Laboratory(4L, "203", "ROEMMERS"),
                    new Laboratory(5L, "903", "SIEGFRIED"),
                    new Laboratory(6L, "45", "CASASCO"),
                    new Laboratory(7L, "9", "ANDRÓMACO"),
                    new Laboratory(8L, "184", "POEN"),
                    new Laboratory(9L, "138", "LAZAR"),
                    new Laboratory(10L, "21", "BAGÓ"),
                    new Laboratory(11L, "18", "EUROFARMA"),
                    new Laboratory(12L, "751", "ROSSMORE PHARMA"),
                    new Laboratory(13L, "103", "GADOR"),
                    new Laboratory(14L, "172", "ORGANON ARG.")
            ).toList();
            laboratoryRepository.saveAll(laboratoriesInit);
        }
        if (unitsRepository.count() == 0) {

            List<Unit> unitsInit = Stream.of(
                    new Unit(1L, "Miligramos", "mg"),
                    new Unit(2L, "Microgramos", "mcg"),
                    new Unit(3L, "Unidades Internacionales", "IU"),
                    new Unit(4L, "Gramos", "g"),
                    new Unit(5L, "Mililitros", "ml"),
                    new Unit(6L, "Litros", "l")
            ).toList();

            unitsRepository.saveAll(unitsInit);
        }

        List<Medicine> medicines = Stream.of(
                new Medicine(53164L, "5-ASA 1000", "1 G SOB.X 30", "6393421", "7795327064622", "M40", "MESALAZINA", "ANTIINFLAM.INTESTINAL", 1000, 30, false, getUnitById(1L), getLaboratoryById(1L)),
                new Medicine(53165L, "5-ASA 2000", "2 G SOB.X 30", "6393551", "7795327064639", "M40", "MESALAZINA", "ANTIINFLAM.INTESTINAL", 2000, 30, false, getUnitById(1L), getLaboratoryById(1L)),
                new Medicine(11107L, "5-ASA 400", "400 MG SUP.X 10", "3314131", "7795327061188", "M40", "MESALAZINA", "ANTIINFLAM.INTESTINAL", 400, 10, false, getUnitById(1L), getLaboratoryById(1L)),
                new Medicine(11108L, "5-ASA 400", "400 MG SUP.X 30", "3314132", "7795327061195", "M40", "MESALAZINA", "ANTIINFLAM.INTESTINAL", 400, 30, false, getUnitById(1L), getLaboratoryById(1L)),
                new Medicine(11106L, "5-ASA 400", "400 MG COMP.X 60", "3313722", "7795327061171", "M40", "MESALAZINA", "ANTIINFLAM.INTESTINAL", 400, 60, false, getUnitById(1L), getLaboratoryById(1L)),
                new Medicine(11105L, "5-ASA 400", "400 MG COMP.X 30", "3313721", "7795327061164", "M40", "MESALAZINA", "ANTIINFLAM.INTESTINAL", 400, 30, false, getUnitById(1L), getLaboratoryById(1L)),
                new Medicine(59115L, "5-ASA 4000", "4 G SOB.X 30", "6655681", "7795327065742", "M40", "MESALAZINA", "ANTIINFLAM.INTESTINAL", 4000, 30, false, getUnitById(1L), getLaboratoryById(1L)),
                new Medicine(43119L, "5-ASA 500", "500 MG COMP.X 30", "5820131", "7795327063625", "M40", "MESALAZINA", "ANTIINFLAM.INTESTINAL", 500, 30, false, getUnitById(1L), getLaboratoryById(1L)),
                new Medicine(43120L, "5-ASA 500", "500 MG COMP.X 60", "5820132", "7795327063632", "M40", "MESALAZINA", "ANTIINFLAM.INTESTINAL", 500, 60, false, getUnitById(1L), getLaboratoryById(1L)),
                new Medicine(43121L, "5-ASA 800", "800 MG COMP.X 30", "5820001", "7795327063670", "M40", "MESALAZINA", "ANTIINFLAM.INTESTINAL", 800, 30, false, getUnitById(1L), getLaboratoryById(1L)),
                new Medicine(43122L, "5-ASA 800", "800 MG COMP.X 60", "5820002", "7795327063687", "M40", "MESALAZINA", "ANTIINFLAM.INTESTINAL", 800, 60, false, getUnitById(1L), getLaboratoryById(1L)),
                new Medicine(44804L, "5XR 500", "500 MG COMP.X 50", "5895421", "7795349000172", "M40", "MESALAZINA", "ANTIINFLAM.INTESTINAL", 500, 50, false, getUnitById(2L), getLaboratoryById(2L)),
                new Medicine(44805L, "5XR 500", "500 MG COMP.X 100", "5895422", "7795349000189", "M40", "MESALAZINA", "ANTIINFLAM.INTESTINAL", 500, 100, false, getUnitById(2L), getLaboratoryById(2L)),
                new Medicine(40561L, "8 HORAS", "2 MG COMP.REC.X 30", "5624002", "7796285053147", "M10401", "ESZOPICLONA", "HIPNÓTICO", 2, 30, false, getUnitById(3L), getLaboratoryById(3L)),
                new Medicine(40562L, "8 HORAS", "3 MG COMP.REC.X 30", "5624131", "7796285053154", "M10401", "ESZOPICLONA", "HIPNÓTICO", 3, 30, false, getUnitById(3L), getLaboratoryById(3L)),
                new Medicine(47975L, "ABARAX", "50 MG COMP.X 100", "6149681", "7796285272623", "M10020", "BENZNIDAZOL", "ANTICHAGÁSICO", 50, 100, false, getUnitById(3L), getLaboratoryById(3L)),
                new Medicine(47976L, "ABARAX", "100 MG COMP.X 100", "6149711", "7796285272616", "M10020", "BENZNIDAZOL", 100, 100, false, getUnitById(3L), getLaboratoryById(3L)),
                new Medicine(59963L, "ABAXON", "10 MG X 30 COMP.REC.", "6687842", "7795345123387", "M10638", "RIVAROXABÁN", "ANTITROMBÓTICO", 10, 30, false, getUnitById(4L), getLaboratoryById(4L)),
                new Medicine(59964L, "ABAXON", "15 MG X 30 COMP.REC.", "6687972", "7795345123394", "M10638", "RIVAROXABÁN", 15, 30, false, getUnitById(4L), getLaboratoryById(4L)),
                new Medicine(59962L, "ABAXON", "2.5 MG X 30 COMP.REC.", "6688002", "7795345123363", "M10638", "RIVAROXABÁN", 2, 30, false, getUnitById(4L), getLaboratoryById(4L)),
                new Medicine(59965L, "ABAXON", "20 MG X 30 COMP.REC.", "6687712", "7795345123400", "M10638", "RIVAROXABÁN", 20, 30, false, getUnitById(4L), getLaboratoryById(4L)),
                new Medicine(60684L, "ABAXON", "10 MG X 10 COMP.REC.", "6687847", "7795345123370", "M10638", "RIVAROXABÁN", 10, 10, false, getUnitById(4L), getLaboratoryById(4L)),
                new Medicine(21647L, "ACEMUK", "600 MG TAB.EFER.X 20", "4324011", "7798129415050", "M146", "ACETILCISTEÍNA", "MUCOLÍTICO", 600, 20, false, getUnitById(5L), getLaboratoryById(5L)),
                new Medicine(46770L, "ACEMUK", "200 MG TAB.EFER.X 10", "4323943", "7798129417030", "M146", "ACETILCISTEÍNA", "MUCOLÍTICO", 200, 10, false, getUnitById(5L), getLaboratoryById(5L)),
                new Medicine(45712L, "ACEMUK", "600 MG TAB.EFER.X 90", "4324014", "7795380042803", "M146", "ACETILCISTEÍNA", 600, 90, false, getUnitById(5L), getLaboratoryById(5L)),
                new Medicine(45711L, "ACEMUK", "600 MG TAB.EFER.X 60", "4324013", "7798129416804", "M146", "ACETILCISTEÍNA", 600, 60, false, getUnitById(5L), getLaboratoryById(5L)),
                new Medicine(43492L, "ACLUSIN", "100 MG COMP.X 100", "5894891", "7795380646182", "M104", "CICLOSPORINA", "INMUNOSUPRESOR", 100, 100, false, getUnitById(6L), getLaboratoryById(6L)),
                new Medicine(43493L, "ACLUSIN", "50 MG COMP.X 50", "5894892", "7795380646199", "M104", "CICLOSPORINA", "INMUNOSUPRESOR", 50, 50, false, getUnitById(6L), getLaboratoryById(6L)),
                new Medicine(33447L, "ACTAMOL", "500 MG COMP.X 30", "3451030", "7798129407824", "M146", "PARACETAMOL", "ANALGÉSICO", 500, 30, false, getUnitById(1L), getLaboratoryById(7L)),
                new Medicine(33448L, "ACTAMOL", "500 MG COMP.X 10", "3451020", "7798129407908", "M146", "PARACETAMOL", "ANALGÉSICO", 500, 10, false, getUnitById(1L), getLaboratoryById(7L)),
                new Medicine(45389L, "ACTAMOL", "500 MG COMP.X 20", "3451040", "7798129407793", "M146", "PARACETAMOL", "ANALGÉSICO", 500, 20, false, getUnitById(1L), getLaboratoryById(7L)),
                new Medicine(53129L, "NOVOEIGHT 1000UI", "LIOF.PVO.VIAL+J.P.X1X4ML", "639142", "7798058931638", "M10945", "FACTOR VIII COAGULACIÓN RECOMB.", "ANTIHEMOFÍLICO", 1000, 4, false, getUnitById(1L), getLaboratoryById(2L)),
                new Medicine(53130L, "NOVOEIGHT 1500UI", "LIOF.PVO.VIAL+J.P.X1X4ML", "639155", "7798058931645", "M10945", "FACTOR VIII COAGULACIÓN RECOMB.", "ANTIHEMOFÍLICO", 1500, 4, false, getUnitById(1L), getLaboratoryById(2L)),
                new Medicine(53131L, "NOVOEIGHT 250UI", "LIOF.PVO.VIAL+J.P.X1X4ML", "639126", "7798058931614", "M10945", "FACTOR VIII COAGULACIÓN RECOMB.", "ANTIHEMOFÍLICO", 250, 4, false, getUnitById(1L), getLaboratoryById(2L)),
                new Medicine(53132L, "NOVOEIGHT 500UI", "LIOF.PVO.VIAL+J.P.X1X4ML", "639139", "7798058931621", "M10945", "FACTOR VIII COAGULACIÓN RECOMB.", "ANTIHEMOFÍLICO", 500, 4, false, getUnitById(1L), getLaboratoryById(2L)),
                new Medicine(44339L, "NOVOPRESSINA-V", "INY.A.X 5 X 1 ML", "577542", "7792796000021", "M10736", "VASOPRESINA SINTÉTICA", "ANTIDIURÉTICO", 20, 5, false, getUnitById(1L), getLaboratoryById(3L)),
                new Medicine(55197L, "NOVOSEVEN MIXPRO", "1 MG/ML JGA.PRELL.+VIAL", "9955197", "7798058931744", "M11341", "EPTACOG ALFA", "ANTIHEMOFÍLICO", 1, 1, false, getUnitById(1L), getLaboratoryById(2L)),
                new Medicine(55198L, "NOVOSEVEN MIXPRO", "5 MG/ML JGA.PRELL.+VIAL", "9955198", "7798058931751", "M11341", "EPTACOG ALFA", "ANTIHEMOFÍLICO", 5, 1, false, getUnitById(1L), getLaboratoryById(2L)),
                new Medicine(44633L, "NOXAFIL", "40MG/ML SUSP.ORAL X105ML", "5893681", "5012376031095", "M10758", "POSACONAZOL", "ANTIMICÓTICO USO SISTÉMICO", 40, 1, false, getUnitById(1L), getLaboratoryById(4L)),
                new Medicine(52143L, "NOXAFIL", "100MG COMP.LIB.MODIF.X24", "6350391", "7793081000122", "M10758", "POSACONAZOL", "ANTIMICÓTICO USO SISTÉMICO", 100, 24, false, getUnitById(1L), getLaboratoryById(4L)),
                new Medicine(47504L, "NPLATE", "250 MCG INY.A.X 1 X 5 ML", "6052001", "7798337900065", "M10883", "ROMIPLOSTIM", "ANTIHEMORRÁGICO", 250, 1, false, getUnitById(1L), getLaboratoryById(5L)),
                new Medicine(54524L, "NUCALA", "100MG PVO.LIOF. VIAL X 1", "6466001", "7798365530371", "M11307", "MEPOLIZUMAB", "ANTICUERPO MONOCLONAL. INHIB. DE", 100, 1, false, getUnitById(1L), getLaboratoryById(6L)),
                new Medicine(58430L, "NUCALA AI", "100MG/ML AUTOINY. X 1 ML", "6635842", "7798365530661", "M11307", "MEPOLIZUMAB", "ANTICUERPO MONOCLONAL. INHIB. DE", 100, 1, false, getUnitById(1L), getLaboratoryById(6L)),
                new Medicine(58429L, "NUCALA SS", "100MG/ML JGA.PRELL.X 1ML", "6635841", "7798365530678", "M11307", "MEPOLIZUMAB", "ANTICUERPO MONOCLONAL. INHIB. DE", 100, 1, false, getUnitById(1L), getLaboratoryById(6L)),
                new Medicine(47950L, "NULOJIX", "250MG/VIAL PVO.LIOF.X 1", "6160391", "7798008271937", "M10898", "BELATACEPT", "INMUNOSUPRESOR", 250, 1, false, getUnitById(1L), getLaboratoryById(7L)),
                new Medicine(50768L, "NUTRAMIGEN LGG", "LATA X 357 G", "9950768", "7506205806483", "M10083", "CARBOHIDRATOS+ASOC.", "FÓRMULA HIPOALERGÉNICA", 0, 1, false, getUnitById(1L), getLaboratoryById(8L)),
                new Medicine(49366L, "NUTRIBABY 1", "LATA X 400 G", "9949366", "7798181640018", "M7918", "PROTEÍNAS+GRASAS+CARBOHID.+ASOC.", "FÓRMULA LACTANTES HASTA 6 MESES", 0, 1, false, getUnitById(1L), getLaboratoryById(8L)),
                new Medicine(49368L, "NUTRIBABY 1", "STICKS X 15 U X 15 G", "9949368", "7798181640032", "M7918", "PROTEÍNAS+GRASAS+CARBOHID.+ASOC.", "FÓRMULA LACTANTES HASTA 6 MESES", 0, 15, false, getUnitById(1L), getLaboratoryById(8L)),
                new Medicine(57607L, "NUTRIBABY 1", "LATA X 800 G", "9957607", "7798181640667", "M7918", "PROTEÍNAS+GRASAS+CARBOHID.+ASOC.", "FÓRMULA LACTANTES HASTA 6 MESES", 0, 1, false, getUnitById(1L), getLaboratoryById(8L)),
                new Medicine(49369L, "NUTRIBABY 2", "LATA X 400 G", "9949369", "7798181640063", "M7918", "PROTEÍNAS+GRASAS+CARBOHID.+ASOC.", "FÓRM.LACTANTE DE 6 MESES A 1 AÑO", 0, 1, false, getUnitById(1L), getLaboratoryById(8L)),
                new Medicine(49371L, "NUTRIBABY 2", "STICKS X 15 U X 15 G", "9949371", "7798181640087", "M7918", "PROTEÍNAS+GRASAS+CARBOHID.+ASOC.", "FÓRM.LACTANTE DE 6 MESES A 1 AÑO", 0, 15, false, getUnitById(1L), getLaboratoryById(8L)),
                new Medicine(57608L, "NUTRIBABY 2", "LATA X 800 G", "9957608", "7798181640674", "M7918", "PROTEÍNAS+GRASAS+CARBOHID.+ASOC.", "FÓRM.LACTANTE DE 6 MESES A 1 AÑO", 0, 1, false, getUnitById(1L), getLaboratoryById(1L)),
                new Medicine(49373L, "NUTRIBABY 3", "STICKS X 15 U X 15 G", "9949373", "7798181640131", "M7918", "PROTEÍNAS+GRASAS+CARBOHID.+ASOC.", "FÓRMULA INFANTIL", 0, 15, false, getUnitById(1L), getLaboratoryById(8L)),
                new Medicine(57609L, "NUTRIBABY 3", "LATA X 800 G", "9957609", "7798181640681", "M7918", "PROTEÍNAS+GRASAS+CARBOHID.+ASOC.", "FÓRMULA INFANTIL", 0, 1, false, getUnitById(1L), getLaboratoryById(8L)),
                new Medicine(50963L, "NUTRIBABY CONFOR", "LATA X 400 G", "9950963", "7798181640094", "M10001", "PROTEÍNAS+GRASAS+CARBOHID.+ASOC.", "FÓRMULA LACTANTES HASTA 6 MESES", 0, 1, false, getUnitById(1L), getLaboratoryById(8L)),
                new Medicine(52646L, "NUTRIBABY PREMIUM 1", "LATA X 400 G", "9952646", "7798181640322", "M10001", "PROTEÍNAS+GRASAS+CARBOHID.+ASOC.", "FÓRMULA LACTANTES HASTA 6 MESES", 0, 1, false, getUnitById(1L), getLaboratoryById(8L)),
                new Medicine(52645L, "NUTRIBABY PREMIUM 1", "STICKS X 15 U X 15 G", "9952645", "7798181640292", "M10001", "PROTEÍNAS+GRASAS+CARBOHID.+ASOC.", "FÓRMULA LACTANTES HASTA 6 MESES", 0, 15, false, getUnitById(1L), getLaboratoryById(8L)),
                new Medicine(52648L, "NUTRIBABY PREMIUM 2", "LATA X 400 G", "9952648", "7798181640339", "M10001", "PROTEÍNAS+GRASAS+CARBOHID.+ASOC.", "FÓRM.LACTANTE DE 6 MESES A 1 AÑO", 0, 1, false, getUnitById(1L), getLaboratoryById(8L)),
                new Medicine(52647L, "NUTRIBABY PREMIUM 2", "STICKS X 15 U X 15 G", "9952647", "7798181640308", "M10001", "PROTEÍNAS+GRASAS+CARBOHID.+ASOC.", "FÓRM.LACTANTE DE 6 MESES A 1 AÑO", 0, 15, false, getUnitById(1L), getLaboratoryById(8L)),
                new Medicine(52650L, "NUTRIBABY PREMIUM 3", "LATA X 800 G", "9952650", "7798181640346", "M10001", "PROTEÍNAS+GRASAS+CARBOHID.+ASOC.", "FÓRMULA INFANTIL", 0, 1, false, getUnitById(1L), getLaboratoryById(8L)),
                new Medicine(52649L, "NUTRIBABY PREMIUM 3", "STICKS X 15 U X 15 G", "9952649", "7798181640315", "M10001", "PROTEÍNAS+GRASAS+CARBOHID.+ASOC.", "FÓRMULA INFANTIL", 0, 15, false, getUnitById(1L), getLaboratoryById(8L)),
                new Medicine(57615L, "NUTRIBABY PREMIUM 3", "LATA X 800 G", "9957615", "7798181640698", "M10001", "PROTEÍNAS+GRASAS+CARBOHID.+ASOC.", "FÓRMULA INFANTIL", 0, 1, false, getUnitById(1L), getLaboratoryById(8L)),
                new Medicine(57610L, "NUTRIBABY PREMIUM CONFOR 1", "LATA X 800 G", "9957610", "7798181640704", "M10001", "PROTEÍNAS+GRASAS+CARBOHID.+ASOC.", "FÓRMULA LACTANTES HASTA 6 MESES", 0, 1, false, getUnitById(1L), getLaboratoryById(8L)),
                new Medicine(57611L, "NUTRIBABY PREMIUM CONFOR 2", "LATA X 800 G", "9957611", "7798181640711", "M10001", "PROTEÍNAS+GRASAS+CARBOHID.+ASOC.", "FÓRM.LACTANTE DE 6 MESES A 1 AÑO", 0, 1, false, getUnitById(1L), getLaboratoryById(8L)),
                new Medicine(57612L, "NUTRIBABY PREMIUM CONFOR 3", "LATA X 800 G", "9957612", "7798181640728", "M10001", "PROTEÍNAS+GRASAS+CARBOHID.+ASOC.", "FÓRMULA INFANTIL", 0, 1, false, getUnitById(1L), getLaboratoryById(1L)),
                new Medicine(53077L, "NUVARING", "ANILLO VAGINAL X 1", "638035", "7798056831411", "M10057", "ETONOGESTREL + ETINILESTRADIOL", "ANTICONCEPTIVO HORMONAL", 11, 1, false, getUnitById(1L), getLaboratoryById(2L)),
                new Medicine(53170L, "NUVIGIL", "250 MG COMP.X 20", "639199", "7798142935016", "M10946", "ARMODAFINILO", "ESTIMULANTE DEL SNC", 250, 20, false, getUnitById(1L), getLaboratoryById(3L))
        ).toList();

        medicinesRepository.saveAll(medicines);
    }

    private Laboratory getLaboratoryById(Long id) {
        return this.laboratoryRepository.findById(id).orElse(null);
    }

    private Unit getUnitById(Long id) {
        return this.unitsRepository.findById(id).orElse(null);
    }
}
