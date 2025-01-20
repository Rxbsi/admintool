package de.rxbsi.admintool.repository;

import de.rxbsi.admintool.model.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<UserEntity, Long> {
}
