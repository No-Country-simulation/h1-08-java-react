package io.hackathon.justina.utils.modelMapper;

import org.modelmapper.ModelMapper;

public class Mapper {

    private static final Mapper INSTANCE = new Mapper();
    private final ModelMapper modelMapper = new ModelMapper();

    private Mapper() {
    }

    public static Mapper getInstance() {
        return INSTANCE;
    }

    public <S, T> T map(S source, Class<T> targetClass) {
        return modelMapper.map(source, targetClass);
    }
}
