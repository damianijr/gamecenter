package com.gameday.domain.vo;

import com.gameday.domain.Game;
import com.gameday.domain.GameComment;

import java.util.Collection;

/**
 * Created by damianijr on 25/04/17.
 */
public class GameDetailVO {
    private Game game;
    private Collection<GameComment> comments;

    public GameDetailVO(Game game, Collection<GameComment> comments) {
        this.game = game;
        this.comments = comments;
    }

    public Collection<GameComment> getComments() {
        return comments;
    }

    public Game getGame() {
        return game;
    }
}
