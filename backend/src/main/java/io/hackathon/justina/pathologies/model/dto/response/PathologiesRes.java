package io.hackathon.justina.pathologies.model.dto.response;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class PathologiesRes {

    private Long id;

    private String code;

    private String name;
}
