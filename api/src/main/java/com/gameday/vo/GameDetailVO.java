package com.gameday.vo;

import com.gameday.domain.Game;
import com.gameday.domain.GameComment;
import lombok.Getter;
import lombok.Value;

import java.util.Collection;

/**
 * Created by damianijr on 25/04/17.
 */
@Value
public class GameDetailVO {
    Game game;
    Collection<GameComment> comments;
}
