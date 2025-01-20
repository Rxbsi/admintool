package de.rxbsi.admintool.mapping;

import de.rxbsi.admintool.dto.User;
import de.rxbsi.admintool.model.UserEntity;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UserMapper {

    UserEntity toEntity(User dto);
    User toDto(UserEntity entity);

}
