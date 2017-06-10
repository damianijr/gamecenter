package com.gameday.domain.repository;

import com.gameday.domain.Game;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.Collection;
import java.util.Optional;

/**
 * Created by damianijr on 25/04/17.
 */
@CrossOrigin("*")
@RepositoryRestResource
public interface GameRepository extends CrudRepository<Game, Long> {

    @Query("SELECT g FROM Game g WHERE away.name = :teamName or home.name = :teamName")
    Collection<Game> gamesByTeamName(@Param("teamName") String teamName);

    @RestResource(exported = false)
    Optional<Game> findById(final Long id);

}
