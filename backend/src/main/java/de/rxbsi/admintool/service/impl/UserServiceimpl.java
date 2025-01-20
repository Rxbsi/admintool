package de.rxbsi.admintool.service.impl;

import de.rxbsi.admintool.dto.User;
import de.rxbsi.admintool.mapping.UserMapper;
import de.rxbsi.admintool.model.UserEntity;
import de.rxbsi.admintool.repository.UserRepository;
import de.rxbsi.admintool.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserServiceimpl implements UserService {

    private final UserRepository userRepository;
    private final UserMapper userMapper;

    @Override
    public User createUser(User user) {
        var userEntity = userMapper.dtoToEntity(user);
        var savedEntity = userRepository.save(userEntity);
        return userMapper.entityToDto(savedEntity);
    }
}
