package io.hackathon.justina.user.services.implementation;

import io.hackathon.justina.user.model.User;
import io.hackathon.justina.user.repository.UserRepository;
import io.hackathon.justina.user.services.Interface.IUserServices;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserServicesImp implements IUserServices {

    private final UserRepository userRepository;

    @Override
    public User findByEmail(String email) {
        return null;
    }

    @Override
    public boolean existsByEmail(String email) {
        return false;
    }

    @Override
    public List<User> findAll() {
        return List.of();
    }

    @Override
    public User findById(Long id) {
        return null;
    }

    @Override
    public boolean existsById(Long id) {
        return false;
    }

    @Override
    public User save(Long entity) {
        return null;
    }

    @Override
    public User update(Long entity) {
        return null;
    }

    @Override
    public void delete(Long entity) {

    }
}
