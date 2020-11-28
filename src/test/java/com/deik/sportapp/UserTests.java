package com.deik.sportapp;

import com.deik.sportapp.config.DatasourceConfiguration;
import com.deik.sportapp.user.User;
import com.deik.sportapp.user.UserRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.context.annotation.Import;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@Import(DatasourceConfiguration.class)
public class UserTests {

    @Autowired
    private UserRepository userRepository;

    @Test
    public void createUserTest() {
        User user = new User("testUser", "User", "Test", "user@users.com", "1234");
        User savedUser = userRepository.save(user);

        assertNotNull(savedUser);
    }

    @Test
    public void existsByUsernameTest() {
        User user = new User("testUser", "User", "Test", "user@users.com", "1234");
        userRepository.save(user);
        Boolean doesUserExist = userRepository.existsByUsername(user.getUsername());

        assertTrue(doesUserExist);
    }

    @Test
    public void existsByEmailTest() {
        User user = new User("testUser", "User", "Test", "user@users.com", "1234");
        userRepository.save(user);
        Boolean doesUserExist = userRepository.existsByEmail(user.getEmail());

        assertTrue(doesUserExist);
    }

    @Test
    public void getUsersTest() {
        List<User> users = userRepository.findAll();
        for (User user : users) {
            System.out.println(user);
        }

        assertTrue(users.size() > 0);
    }

}
