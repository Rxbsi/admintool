package de.rxbsi.admintool.mapping;

import de.rxbsi.admintool.dto.User;
import de.rxbsi.admintool.model.UserEntity;
import org.mapstruct.Mapper;

@Mapper
public interface UserMapper {

    UserEntity dtoToEntity(User dto);
    User entityToDto(UserEntity entity);

}
