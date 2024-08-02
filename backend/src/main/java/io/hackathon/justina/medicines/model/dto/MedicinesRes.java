package io.hackathon.justina.medicines.model.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class MedicinesRes {

    private Long id;

    private Long code;

    private String name;

    private String namePresentation;

    private String activePrinciple;

    private String strength;
}
