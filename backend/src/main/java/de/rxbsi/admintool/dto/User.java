package de.rxbsi.admintool.dto;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@RequiredArgsConstructor
public class User {
    private Long id;
    private String username;
    private String name;
    private String lastName;
    private String email;

}
