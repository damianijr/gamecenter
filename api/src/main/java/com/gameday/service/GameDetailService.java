package com.gameday.service;

import com.gameday.domain.repository.GameCommentRepository;
import com.gameday.domain.repository.GameRepository;
import com.gameday.vo.GameDetailVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by damianijr on 25/04/17.
 */
@Service
public class GameDetailService {

    @Autowired
    private GameRepository gameRepository;

    @Autowired
    private GameCommentRepository gameCommentRepository;


    public GameDetailVO getDetails(Long gameId) {
        return this.gameRepository
                .findById(gameId)
                .map(game -> new GameDetailVO(game, this.gameCommentRepository.findByGameId(gameId)))
                .orElseThrow(() -> new IllegalArgumentException("GameId invalid"));
    }
}
