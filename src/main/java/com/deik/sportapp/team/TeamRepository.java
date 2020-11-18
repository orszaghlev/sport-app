package com.deik.sportapp.team;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Qualifier("datasource2")
@Repository
public interface TeamRepository extends JpaRepository<Team, String> {
    public Team findByFullName(String fullName);
}
