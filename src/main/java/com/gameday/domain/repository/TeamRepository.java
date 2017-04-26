package com.gameday.domain.repository;

import com.gameday.domain.Team;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

/**
 * Created by damianijr on 25/04/17.
 */
@RepositoryRestResource
public interface TeamRepository extends CrudRepository<Team, Long> {
}
