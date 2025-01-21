package de.rxbsi.admintool.controller;

import de.rxbsi.admintool.dto.User;
import de.rxbsi.admintool.model.UserEntity;
import de.rxbsi.admintool.repository.UserRepository;
import de.rxbsi.admintool.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/user")
@CrossOrigin("http://localhost:3000")
public class UserController {

    @Autowired
    private UserService userService;
    @Autowired
    private UserRepository userRepository;

    @PostMapping("/create")
    User createUser(@RequestBody User user) {
        return userService.createUser(user);
    }

    @GetMapping("/users")
    List<UserEntity> listAllUsers() {
        return userRepository.findAll();
    }


}
