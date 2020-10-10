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

    public User getUser(String id) {
        return users.stream().filter(u -> u.getId().equals(id)).findFirst().get();
    }

    public void addUser(User user) {
        users.add(user);
    }

    public void updateUser(String id, User user) {
        for (int i = 0; i < users.size(); i++) {
            User u = users.get(i);
            if (u.getId().equals(id)) {
                users.set(i, user);
                return;
            }
        }
    }

    public void deleteUser(String id) {
        users.removeIf(u -> u.getId().equals(id));
    }

}