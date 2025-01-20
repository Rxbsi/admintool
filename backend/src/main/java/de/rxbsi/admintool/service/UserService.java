package de.rxbsi.admintool.service;

import de.rxbsi.admintool.dto.User;

public interface UserService {

    /**
     * Creates a User
     *
     * @param user The created User
     * @return     The saved User
     */
    User createUser(User user);

}
