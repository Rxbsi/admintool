package de.rxbsi.admintool.service.impl;

import de.rxbsi.admintool.dto.User;
import de.rxbsi.admintool.exception.UserNotFoundException;
import de.rxbsi.admintool.mapping.UserMapper;
import de.rxbsi.admintool.repository.UserRepository;
import de.rxbsi.admintool.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;
    private final UserMapper userMapper;

    @Override
    public User createUser(User user) {
        var userEntity = userMapper.toEntity(user);
        var savedEntity = userRepository.save(userEntity);
        return userMapper.toDto(savedEntity);
    }

    @Override
    public User findUser(Long id) {

        return userMapper.toDto(userRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException(id)));
    }
}
