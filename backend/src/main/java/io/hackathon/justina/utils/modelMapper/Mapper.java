package io.hackathon.justina.utils.modelMapper;

import org.modelmapper.ModelMapper;

import java.util.Optional;

public class Mapper {

    private static final Mapper INSTANCE = new Mapper();
    private final ModelMapper modelMapper = new ModelMapper();

    private Mapper() {
    }

    public static Mapper getInstance() {
        return INSTANCE;
    }

    public <S, T> Optional<T> map(S source, Class<T> targetClass) {
        return Optional.ofNullable(source).map(source1 -> modelMapper.map(source, targetClass));
    }
}
