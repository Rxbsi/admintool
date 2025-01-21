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

    /**
     * Finds User through theyre id
     * @param id The User ID
     * @return   The User
     */
    User findUser(Long id);

}
