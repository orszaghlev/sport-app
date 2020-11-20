package com.deik.sportapp.event;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Qualifier("datasource2")
@Repository
public interface EventRepository extends JpaRepository<Event, String> {

}
