package io.hackathon.justina.user.services.Interface;

import io.hackathon.justina.user.model.User;
import io.hackathon.justina.utils.genInterface.IBaseCRUDServices;

public interface IUserServices extends IBaseCRUDServices<User, Long> {
    User findByEmail(String email);

    boolean existsByEmail(String email);

}
