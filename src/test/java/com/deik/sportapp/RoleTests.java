package com.deik.sportapp;

import com.deik.sportapp.config.DatasourceConfiguration;
import com.deik.sportapp.user.ERole;
import com.deik.sportapp.user.Role;
import com.deik.sportapp.user.RoleRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.context.annotation.Import;

import static com.deik.sportapp.user.ERole.ROLE_ADMIN;
import static com.deik.sportapp.user.ERole.ROLE_USER;
import static org.junit.jupiter.api.Assertions.*;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@Import(DatasourceConfiguration.class)
public class RoleTests {

    @Autowired
    private RoleRepository roleRepository;

    @Test
    public void createRoleTest() {
        Role role = new Role(ROLE_USER);
        Role savedRole = roleRepository.save(role);

        assertNotNull(savedRole);
    }

    @Test
    public void findUserRoleByNameTest() {
        ERole name = ROLE_USER;
        Role foundRole = roleRepository.findByName(ROLE_USER).orElseThrow(() -> new RuntimeException("Error: Role is not found."));

        assertEquals(name, foundRole.getName());
    }

    @Test
    public void findAdminRoleByNameTest() {
        ERole name = ROLE_ADMIN;
        Role foundRole = roleRepository.findByName(ROLE_ADMIN).orElseThrow(() -> new RuntimeException("Error: Role is not found."));

        assertEquals(name, foundRole.getName());
    }

    @Test
    public void getRolesTest() {
        Iterable<Role> roles = roleRepository.findAll();
        for (Role role : roles) {
            System.out.println(role);
        }

        assertNotNull(roles);
    }

}
