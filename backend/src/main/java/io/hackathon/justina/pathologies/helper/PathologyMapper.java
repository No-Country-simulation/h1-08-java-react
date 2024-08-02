package io.hackathon.justina.pathologies.helper;

import io.hackathon.justina.pathologies.model.Pathology;
import io.hackathon.justina.pathologies.model.dto.request.PathologiesReq;
import io.hackathon.justina.pathologies.model.dto.response.PathologiesRes;

public class PathologyMapper {

    public static PathologiesRes toPathologyRes(Pathology pathology) {
        return PathologiesRes.builder()
                .id(pathology.getId())
                .code(pathology.getCode())
                .name(pathology.getName())
                .build();
    }

    public static Pathology toPathology(PathologiesReq pathologyReq) {
        return Pathology.builder()
                .code(pathologyReq.getCode())
                .name(pathologyReq.getName())
                .build();
    }
}
