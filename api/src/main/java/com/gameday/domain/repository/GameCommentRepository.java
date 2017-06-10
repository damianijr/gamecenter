package com.gameday.domain.repository;

import com.gameday.domain.GameComment;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.Collection;

/**
 * Created by damianijr on 25/04/17.
 */
@CrossOrigin("*")
@RepositoryRestResource
public interface GameCommentRepository extends MongoRepository<GameComment, String> {

    Collection<GameComment> findByGameId(Long gameId);

}
