package com.deik.sportapp.user;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class UserService {

    private List<User> users = new ArrayList<>(Arrays.asList(
       new User("1", "Geza", "Pelda", "gezapelda@gmail.com"),
       new User("2", "Aladar", "Minta", "aladarminta@gmail.com")
    ));

    public List<User> getAllUsers() {
        return users;
    }

}
