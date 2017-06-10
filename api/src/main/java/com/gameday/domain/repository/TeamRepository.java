package com.gameday.domain.repository;

import com.gameday.domain.Team;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

/**
 * Created by damianijr on 25/04/17.
 */
@CrossOrigin("*")
@RepositoryRestResource
public interface TeamRepository extends CrudRepository<Team, Long> {
}
