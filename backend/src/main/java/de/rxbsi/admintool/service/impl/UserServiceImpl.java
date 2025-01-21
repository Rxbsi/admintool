package de.rxbsi.admintool.service.impl;

import de.rxbsi.admintool.dto.User;
import de.rxbsi.admintool.exception.UserNotFoundException;
import de.rxbsi.admintool.mapping.UserMapper;
import de.rxbsi.admintool.model.UserEntity;
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

    @Override
    public User updateUser(Long id, User newUser) {

        return userRepository.findById(id)
                .map(user -> {
                    updateNonNullFields(newUser, user);
                    userRepository.save(user);
                    return userMapper.toDto(user);
                }).orElseThrow(() -> new UserNotFoundException(id));
    }

    @Override
    public String deleteUser(Long id) {

        if (!userRepository.existsById(id)) {
            throw new UserNotFoundException(id);
        }
        userRepository.deleteById(id);

        return "User with id: " + id + " has been deleted successfully!" ;
    }

    private void updateNonNullFields(User source, UserEntity target) {
        if (source.getUsername() != null) {
            target.setUsername(source.getUsername());
        }
        if (source.getName() != null) {
            target.setName(source.getName());
        }
        if (source.getLastName() != null) {
            target.setLastName(source.getLastName());
        }
        if (source.getEmail() != null) {
            target.setEmail(source.getEmail());
        }
    }

}
