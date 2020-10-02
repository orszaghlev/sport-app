package com.deik.sportapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@SpringBootApplication
public class SportappApplication {
    @RequestMapping(value = "/bootTest", method = RequestMethod.GET)
    public String sayHello() {
        return "Spring Boot Test";
    }

    public static void main(String[] args) {
        SpringApplication.run(SportappApplication.class, args);
    }

}
