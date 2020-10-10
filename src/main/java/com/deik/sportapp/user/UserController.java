package com.deik.sportapp.user;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
public class UserController {

    @RequestMapping(value = "/users", method = RequestMethod.GET)
    public List<User> getAllUsers() {
        return Arrays.asList(
                new User("1", "Geza", "Pelda", "gezapelda@gmail.com"),
                new User("2", "Aladar", "Minta", "aladarminta@gmail.com")
        );
    }

}
